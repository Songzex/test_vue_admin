<template>
  <div class="editor-container">
    <!-- 左侧工具栏（含媒体和链接功能） -->
    <div class="toolbar">
      <!-- 文本格式 -->
<!--      <button class="tool-btn ql-bold" title="加粗 (Ctrl+B)"></button>
      <button class="tool-btn ql-italic" title="斜体 (Ctrl+I)"></button>
      <button class="tool-btn ql-underline" title="下划线 (Ctrl+U)"></button>
      <button class="tool-btn ql-strike" title="删除线"></button>-->
<!--      <div class="separator"></div>-->

      <!-- 标题 -->
      <button class="tool-btn ql-header" value="1" title="标题1"></button>
      <button class="tool-btn ql-header" value="2" title="标题2"></button>
      <button class="tool-btn ql-header" value="3" title="标题3"></button>
      <div class="separator"></div>

      <!-- 列表与缩进 -->
      <button class="tool-btn ql-list" value="ordered" title="有序列表"></button>
      <button class="tool-btn ql-list" value="bullet" title="无序列表"></button>
      <button class="tool-btn ql-indent" value="-1" title="减少缩进"></button>
      <button class="tool-btn ql-indent" value="+1" title="增加缩进"></button>
      <div class="separator"></div>

      <!-- 结构 -->
      <button class="tool-btn ql-blockquote" title="引用"></button>
      <button class="tool-btn ql-code-block" title="代码块"></button>
      <div class="separator"></div>

      <!-- 媒体与链接 -->
      <button class="tool-btn ql-link" title="插入链接"></button>
      <button class="tool-btn ql-image" title="插入图片"></button>
      <button class="tool-btn ql-video" title="插入视频"></button>
      <div class="separator"></div>

      <!-- 对齐方式 -->
      <button class="tool-btn ql-align" value="left" title="左对齐"></button>
      <button class="tool-btn ql-align" value="center" title="居中"></button>
      <button class="tool-btn ql-align" value="right" title="右对齐"></button>
      <div class="separator"></div>

      <button class="tool-btn ql-bold" title="加粗 (Ctrl+B)"></button>
      <button class="tool-btn ql-italic" title="斜体 (Ctrl+I)"></button>
      <button class="tool-btn ql-underline" title="下划线 (Ctrl+U)"></button>
      <button class="tool-btn ql-strike" title="删除线"></button>
      <div class="separator"></div>
      <!-- 清除格式 -->
      <button class="tool-btn ql-clean" title="清除格式"></button>
    </div>

    <!-- 右侧编辑区 -->
    <div class="content-wrapper">
      <!-- 代码语言选择器 -->
<!--      <div class="lang-selector">-->
<!--        <label>代码语言：</label>-->
<!--        <select v-model="currentLang" @change="updateAllCodeHighlight">-->
<!--          <option value="javascript">JavaScript</option>-->
<!--          <option value="html">HTML</option>-->
<!--          <option value="css">CSS</option>-->
<!--          <option value="python">Python</option>-->
<!--        </select>-->
<!--      </div>-->

      <!-- 编辑器内容区 -->
      <div class="editor" ref="editorRef"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'

// 编辑器实例
const editorRef = ref(null)
let quill = null
const currentLang = ref('javascript')

onMounted(() => {
  // 初始化编辑器（含媒体上传配置）
  quill = new Quill(editorRef.value, {
    theme: 'snow',
    modules: {
      toolbar: {
        container: '.toolbar',
        // 自定义工具栏按钮逻辑（核心：图片/视频/链接）
        handlers: {
          // 1. 插入链接
          link: function(value) {
            if (value) {
              const url = prompt('请输入链接地址:')
              if (url) {
                // 插入链接（支持选中文本作为链接文字）
                const range = quill.getSelection()
                if (range) {
                  quill.formatText(range, 'link', url)
                } else {
                  // 未选中文本时，插入链接文字
                  quill.insertText(quill.getSelection().index, '链接', 'link', url)
                }
              }
            } else {
              // 清除链接格式
              quill.format('link', false)
            }
          },

          // 2. 图片上传
          image: function(value) {
            if (value) {
              const input = document.createElement('input')
              input.type = 'file'
              input.accept = 'image/*'
              input.onchange = async (e) => {
                const file = e.target.files[0]
                if (file) {
                  // 调用上传函数（替换为你的后端接口）
                  const imageUrl = await uploadMedia(file, 'image')
                  // 插入图片到编辑器
                  const range = quill.getSelection()
                  quill.insertEmbed(range.index, 'image', imageUrl)
                  quill.setSelection(range.index + 1)
                }
              }
              input.click()
            } else {
              quill.format('image', false)
            }
          },

          // 3. 视频上传
          video: function(value) {
            if (value) {
              const input = document.createElement('input')
              input.type = 'file'
              input.accept = 'video/*'
              input.onchange = async (e) => {
                const file = e.target.files[0]
                if (file) {
                  // 调用上传函数（替换为你的后端接口）
                  const videoUrl = await uploadMedia(file, 'video')
                  // 插入视频到编辑器
                  const range = quill.getSelection()
                  quill.insertEmbed(range.index, 'video', videoUrl)
                  quill.setSelection(range.index + 1)
                }
              }
              input.click()
            } else {
              quill.format('video', false)
            }
          }
        }
      },
      history: { delay: 1000, maxStack: 100 }
    },
    placeholder: '开始编辑内容...'
  })

  // 内容变化时更新代码高亮
  quill.on('text-change', () => {
    updateAllCodeHighlight()
  })
})

// 媒体上传函数（需替换为实际后端接口）
const uploadMedia = async (file, type) => {
  // 模拟上传（实际项目中替换为真实接口）
  console.log(`上传${type}文件:`, file)

  // 1. 创建FormData
  const formData = new FormData()
  formData.append('file', file)
  formData.append('type', type)

  // 2. 调用后端接口（示例URL，需替换）
  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    const data = await response.json()
    if (data.success) {
      return data.url // 假设接口返回图片/视频的URL
    } else {
      alert('上传失败: ' + data.message)
      return ''
    }
  } catch (error) {
    console.error('上传错误:', error)
    alert('上传失败，请重试')
    return ''
  }

  // 3. 模拟成功返回（测试用）
  // return URL.createObjectURL(file)
}

// 更新代码高亮
const updateAllCodeHighlight = () => {
  const codeBlocks = document.querySelectorAll('.editor pre.ql-syntax code')
  codeBlocks.forEach(block => {
    block.className = `language-${currentLang.value}`
    const code = block.textContent
    block.innerHTML = hljs.highlight(code, { language: currentLang.value }).value
  })
}
</script>
<style scoped>
/* ========================================
   1. 全局容器样式：调整为flex布局
======================================== */
.editor-container {
  width: 100%;
  height: 100%;
  min-height: 100vh; /* 占满屏幕高度 */
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  display: flex;
  flex-direction: column; /* 纵向排列工具栏和内容区 */
}

/* ========================================
   2. 工具栏样式：固定在顶部
======================================== */
.toolbar {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 6px 16px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e5e7eb;
  flex-wrap: wrap;
  gap: 10px;
  position: sticky; /* 工具栏也固定在顶部 */
  top: 0;
  z-index: 10; /* 避免被内容遮挡 */
}

/* 功能分组、按钮等样式保持不变 */
.tool-group { display: flex; align-items: center; gap: 2px; }
.tool-separator { width: 1px; height: 26px; background-color: #e5e7eb; margin: 0 4px; }
.tool-btn {
  width: 34px;
  height: 34px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4b5563;
  font-size: 14px;
  transition: all 0.2s ease;
}
/* 按钮图标和交互样式保持不变 */
.ql-bold::before { content: "B"; font-weight: 700; }
.ql-italic::before { content: "I"; font-style: italic; }
/* ... 其他按钮图标样式省略 ... */
.tool-btn:hover { background-color: #e9ecef; color: #111827; transform: translateY(-1px); }
.tool-btn.ql-active { background-color: #e6f7ff; color: #1890ff; box-shadow: 0 1px 3px rgba(24, 144, 255, 0.2); }

/* ========================================
   3. 内容区样式：核心修改 - 滚动与粘性定位
======================================== */
/* 内容容器：作为滚动根节点 */
.content-wrapper {
  flex: 1; /* 占满剩余高度 */
  padding: 20px;
  background-color: #ffffff;
  overflow-y: auto; /* 内容过多时整体滚动 */
}

/* 语言选择器：随内容滚动，但在编辑区上方 */
.lang-selector {
  margin: 0 auto 16px; /* 居中显示 */
  padding: 8px 16px;
  background-color: #f8f9fa;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  display: inline-flex;
  align-items: center;
}
.lang-selector label {
  font-size: 13px;
  color: #4b5563;
  margin-right: 8px;
}
.lang-selector select {
  padding: 5px 10px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 13px;
  color: #111827;
  background-color: #ffffff;
  cursor: pointer;
  transition: border-color 0.2s;
}
.lang-selector select:focus { outline: none; border-color: #1890ff; }

/* 编辑区：核心修改 - 相对定位 + 内容滚动 */
.editor-container-inner {
  max-width: 900px; /* 内容最大宽度，避免过宽 */
  margin: 0 auto; /* 居中显示 */
  position: relative; /* 作为编辑区的相对定位容器 */
}

/* 编辑区内容框：支持自身滚动，且始终在视野内 */
.editor {
  min-height: 300px; /* 最小高度 */
  max-height: calc(100vh - 200px); /* 最大高度（屏幕高度 - 工具栏和边距） */
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #ffffff;
  line-height: 1.8;
  font-size: 15px;
  color: #1d2129;
  overflow-y: auto; /* 内容过多时自身滚动 */
  position: relative; /* 相对定位，随容器滚动 */
  transition: border-color 0.2s;
}
.editor:focus-within {
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
}

/* ========================================
   4. 文本、媒体、代码块样式保持不变
======================================== */
.editor p { margin: 0 0 16px 0; }
.editor h1, .editor h2, .editor h3 { margin: 28px 0 16px 0; font-weight: 600; }
.editor h1 { font-size: 24px; border-bottom: 1px solid #f0f0f0; padding-bottom: 8px; }
.editor h2 { font-size: 20px; }
.editor h3 { font-size: 18px; }

.editor ul, .editor ol { margin: 16px 0; padding-left: 28px; }
.editor blockquote {
  border-left: 3px solid #1890ff;
  padding: 12px 16px;
  margin: 16px 0;
  background-color: #f0f7ff;
  color: #4e5969;
  font-size: 14px;
  border-radius: 0 4px 4px 0;
}

.editor img, .editor video {
  max-width: 100%;
  margin: 20px 0;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;
}
.editor img:hover, .editor video:hover { transform: translateY(-2px); }

.editor a {
  color: #1890ff;
  text-decoration: none;
  border-bottom: 1px solid rgba(24, 144, 255, 0.3);
  transition: all 0.2s;
}
.editor a:hover { color: #096dd9; background-color: rgba(24, 144, 255, 0.1); }

.editor pre.ql-syntax {
  padding: 18px !important;
  margin: 20px 0 !important;
  border-radius: 6px !important;
  background-color: #282c34 !important;
  color: #abb2bf !important;
  font-family: 'Fira Code', 'Consolas', monospace !important;
  font-size: 14px !important;
  overflow-x: auto !important;
}

/* 代码高亮样式保持不变 */
.hljs-keyword { color: #cc7832 !important; }
.hljs-string { color: #6a8759 !important; }
.hljs-comment { color: #808080 !important; font-style: italic !important; }

/* ========================================
   5. 响应式适配
======================================== */
@media (max-width: 768px) {
  .toolbar { padding: 6px 8px; gap: 6px; }
  .tool-btn { width: 30px; height: 30px; font-size: 12px; }
  .content-wrapper { padding: 16px; }
  .editor {
    max-height: calc(100vh - 180px); /* 小屏幕调整最大高度 */
    padding: 16px;
    font-size: 14px;
  }
}
</style>