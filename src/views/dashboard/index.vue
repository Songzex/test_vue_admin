<script setup>
</script>

<template>
  <div class="dashboard-container">
    <h1>仪表盘</h1>
    <p>欢迎来到管理系统</p>

    <div class="dashboard-content">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card class="dashboard-card">
            <div class="card-header">
              <el-icon><User /></el-icon>
              <span>用户总数</span>
            </div>
            <div class="card-content">
              <h2>1,234</h2>
            </div>
          </el-card>
        </el-col>

        <el-col :span="8">
          <el-card class="dashboard-card">
            <div class="card-header">
              <el-icon><Document /></el-icon>
              <span>文章总数</span>
            </div>
            <div class="card-content">
              <h2>567</h2>
            </div>
          </el-card>
        </el-col>

        <el-col :span="8">
          <el-card class="dashboard-card">
            <div class="card-header">
              <el-icon><TrendCharts /></el-icon>
              <span>今日访问</span>
            </div>
            <div class="card-content">
              <h2>890</h2>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="24">
          <el-card class="dashboard-card">
            <div class="card-header">
              <el-icon><DataAnalysis /></el-icon>
              <span>数据统计</span>
            </div>
            <div class="card-content">
              <p>这里是数据统计图表区域</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  padding: 20px;
}

.dashboard-content {
  margin-top: 20px;
}

.dashboard-card {
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #333;
}

.card-header .el-icon {
  margin-right: 10px;
  font-size: 20px;
}

.card-content {
  margin-top: 15px;
  text-align: center;
}

.card-content h2 {
  margin: 0;
  font-size: 28px;
  color: #409EFF;
}
</style>