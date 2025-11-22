<!-- 前端核心代码示例 -->
<template>
  <div>
    <input type="file" @change="handleFileSelect" accept=".zip,.rar"/>
    <div>上传进度：{{ progress }}%</div>
    <button @click="toggleUpload">{{ isPaused ? '继续上传' : '暂停上传' }}</button>
    <button @click="cancelUpload">取消上传</button>
    
    <!-- 添加日志显示区域 -->
    <div class="log-container">
      <h3>上传日志</h3>
      <div class="log-content" ref="logContainer">
        <div v-for="(log, index) in logs" :key="index" class="log-item">
          [{{ log.time }}] {{ log.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SparkMD5 from 'spark-md5';
import http from '@/utils/http/http.js';
import {ref, nextTick} from "vue";

const file = ref(null);
const fileMd5 = ref('');
const shardSize = 5 * 1024 * 1024; // 5MB分片
const shards = ref([]);
const progress = ref(0);
const isPaused = ref(false);
const uploadTasks = ref([]); // 存储并发上传任务（用于暂停）
const totalShards = ref(0);
const uploadedShards = ref(new Set()); // 已上传成功的分片索引
const logs = ref([]); // 日志数组
const logContainer = ref(null); // 日志容器引用

// 添加日志函数
const addLog = (message) => {
  const time = new Date().toLocaleTimeString();
  logs.value.push({ time, message });
  
  // 滚动到底部
  nextTick(() => {
    if (logContainer.value) {
      logContainer.value.scrollTop = logContainer.value.scrollHeight;
    }
  });
  
  console.log(`[上传组件][${time}] ${message}`);
};

// 1. 选择文件并计算MD5、分片
const handleFileSelect = async (e) => {
  file.value = e.target.files[0];
  if (!file.value) return;

  addLog(`开始处理文件: ${file.value.name}, 大小: ${formatFileSize(file.value.size)}`);
  
  // 计算文件MD5（分片计算，避免大文件内存溢出）
  const spark = new SparkMD5.ArrayBuffer();
  const fileReader = new FileReader();
  const chunkSize = 2 * 1024 * 1024; // 2MB/块计算MD5
  let offset = 0;

  fileReader.onload = (e) => {
    spark.append(e.target.result);
    offset += chunkSize;
    addLog(`计算MD5进度: ${Math.min(offset, file.value.size)}/${file.value.size} bytes`);
    
    if (offset < file.value.size) {
      loadNextChunk();
    } else {
      fileMd5.value = spark.end(); // 最终MD5
      addLog(`文件MD5计算完成: ${fileMd5.value}`);
      splitFile(); // 分片
      queryUploadedShards(); // 断点续传：查询已上传分片
    }
  };

  const loadNextChunk = () => {
    const chunk = file.value.slice(offset, offset + chunkSize);
    fileReader.readAsArrayBuffer(chunk);
  };
  loadNextChunk();
};

// 格式化文件大小
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// 3. 断点续传：查询后端已上传的分片
const queryUploadedShards = async () => {
  addLog('开始查询已上传的分片信息');
  try {
    // 直接传递参数，而不是使用 params 对象包装
    const res = await http.get('/api/upload/shards', {
      params: {
        fileMd5: fileMd5.value
      }
    });
    // console.log(`[上传组件][res]`,res);
    // 确保响应数据格式正确
    const shardIndexes = res.uploaded || [];
    uploadedShards.value = new Set(shardIndexes);

    addLog(`已上传分片查询完成，已上传 ${uploadedShards.value.size}/${totalShards.value} 个分片`);
    updateProgress();
    
    // 如果还有未上传的分片，则自动开始上传流程
    const unUploadedShards = shards.value.filter(shard => !uploadedShards.value.has(shard.index));
    if (unUploadedShards.length > 0) {
      addLog(`检测到还有 ${unUploadedShards.length} 个分片未上传，自动开始上传流程`);
      startUpload();
    } else if (uploadedShards.value.size === totalShards.value && totalShards.value > 0) {
      // 如果所有分片都已上传，则直接请求合并
      addLog('检测到所有分片已上传，直接请求服务器合并文件');
      try {
        await http.post('/api/upload/merge', {
          fileMd5: fileMd5.value,
          fileName: file.value.name,
          totalShards: totalShards.value
        });
        addLog('文件合并请求已发送');
        // 后续查询后端处理进度（解压+入库）
        queryTaskStatus();
      } catch (e) {
        addLog(`文件合并请求失败: ${e.message || e}`);
      }
    }
  } catch (e) {
    addLog(`查询分片失败: ${e.message || e}`);
    console.error('查询分片失败', e.uploaded);
  }
};



// 4. 并发上传分片（控制并发数为3）
const startUpload = async () => {
  isPaused.value = false;
  const concurrency = 3; // 并发数（避免过多请求拥堵）
  const unUploadedShards = shards.value.filter(shard => !uploadedShards.value.has(shard.index));
  
  addLog(`开始上传，待上传分片数: ${unUploadedShards.length}, 并发数: ${concurrency}`);

  // 分批上传
  for (let i = 0; i < unUploadedShards.length; i += concurrency) {
    if (isPaused.value) {
      addLog('上传已暂停');
      break;
    }
    
    const batch = unUploadedShards.slice(i, i + concurrency);
    addLog(`开始上传批次 ${Math.floor(i/concurrency) + 1}, 包含分片: ${batch.map(s => s.index).join(', ')}`);
    
    const tasks = batch.map(shard => uploadShard(shard));
    uploadTasks.value = tasks;
    try {
      await Promise.all(tasks);
      addLog(`批次 ${Math.floor(i/concurrency) + 1} 上传完成`);
    } catch (e) {
      addLog(`批次上传失败: ${e.message || e}`);
      return;
    }
  }

  // 所有分片上传完成，请求合并
  if (!isPaused.value && uploadedShards.value.size === totalShards.value) {
    addLog('所有分片上传完成，请求服务器合并文件');
    try {
      await http.post('/api/upload/merge', {
        fileMd5: fileMd5.value,
        fileName: file.value.name,
        totalShards: totalShards.value
      });
      addLog('文件合并请求已发送');
      // 后续查询后端处理进度（解压+入库）
      queryTaskStatus();
    } catch (e) {
      addLog(`文件合并请求失败: ${e.message || e}`);
    }
  }
};

// 5. 上传单个分片
const uploadShard = async (shard) => {
  const formData = new FormData();
  formData.append('fileMd5', fileMd5.value);
  formData.append('shardIndex', shard.index);
  formData.append('totalShards', totalShards.value);
  formData.append('fileName', file.value.name);
  formData.append('shard', shard.blob);

  try {
    addLog(`开始上传分片 ${shard.index+1}/${totalShards.value}`);
    
    // 使用http实例发送分片上传请求
    await http.post('/api/upload/shard', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    
    uploadedShards.value.add(shard.index);
    addLog(`分片 ${shard.index+1} 上传成功`);
    updateProgress(); // 更新整体进度
  } catch (e) {
    addLog(`分片 ${shard.index+1} 上传失败: ${e.message || e}`);
    // 失败重试（可选：最多3次）
    if (shard.retryCount < 3) {
      shard.retryCount = (shard.retryCount || 0) + 1;
      addLog(`分片 ${shard.index+1} 开始重试，第 ${shard.retryCount} 次`);
      return uploadShard(shard);
    }
    throw e;
  }
};

// 6. 更新上传进度
const updateProgress = () => {
  progress.value = Math.round((uploadedShards.value.size / totalShards.value) * 100);
  addLog(`整体上传进度更新: ${uploadedShards.value.size}/${totalShards.value} (${progress.value}%)`);
};

// 7. 暂停/继续上传
const toggleUpload = () => {
  if (isPaused.value) {
    addLog('继续上传');
    startUpload();
  } else {
    addLog('暂停上传');
    isPaused.value = true;
    // 取消所有未完成的请求
    uploadTasks.value.forEach(task => task.cancel && task.cancel());
  }
};

// 8. 取消上传（可选：通知后端删除已上传分片）
const cancelUpload = async () => {
  addLog('取消上传');
  isPaused.value = true;
  uploadTasks.value.forEach(task => task.cancel && task.cancel());
  try {
    await http.delete('/api/upload/cancel', { 
      params: { fileMd5: fileMd5.value } 
    });
    addLog('服务器端已上传分片清理完成');
  } catch (e) {
    addLog(`服务器端清理失败: ${e.message || e}`);
  }
  uploadedShards.value.clear();
  progress.value = 0;
  addLog('本地上传状态已重置');
};

// 2. 分割文件为分片
const splitFile = () => {
  totalShards.value = Math.ceil(file.value.size / shardSize);
  shards.value = [];
  for (let i = 0; i < totalShards.value; i++) {
    const start = i * shardSize;
    const end = Math.min(start + shardSize, file.value.size);
    shards.value.push({
      index: i,
      blob: file.value.slice(start, end)
    });
  }
  addLog(`文件分割完成，总共 ${totalShards.value} 个分片，每个分片大小 ${formatFileSize(shardSize)}`);
};

// 9. 查询后端处理进度（解压+入库）
const queryTaskStatus = async () => {
  addLog('开始轮询服务器处理状态');
  const interval = setInterval(async () => {
    try {
      // 确保参数正确传递
      const params = { fileMd5: fileMd5.value };
      const res = await http.get('/api/upload/taskStatus', { params });
      
      const status = res.data?.status || res.status;
      addLog(`服务器处理状态: ${status}`);
      
      if (status === 'completed') {
        clearInterval(interval);
        addLog('上传并处理完成！');
        alert('上传并处理完成！');
      } else if (status === 'failed') {
        clearInterval(interval);
        const msg = res.data?.msg || res.msg || '未知错误';
        addLog(`处理失败: ${msg}`);
        alert('处理失败：' + msg);
      }
      // 可选：展示处理进度（如解压进度、入库进度）
    } catch (e) {
      addLog(`查询处理状态失败: ${e.message || e}`);
    }
  }, 3000);
};
</script>

<style scoped>
.log-container {
  margin-top: 20px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  max-height: 300px;
  overflow-y: auto;
}

.log-container h3 {
  margin: 0;
  padding: 10px;
  background-color: #f5f7fa;
  border-bottom: 1px solid #dcdfe6;
}

.log-content {
  padding: 10px;
  font-family: monospace;
  font-size: 12px;
}

.log-item {
  margin-bottom: 5px;
  line-height: 1.4;
}

.log-item:last-child {
  margin-bottom: 0;
}
</style>