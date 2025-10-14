<template>
  <div class="layout-container">
    <Header />
    <Sidebar />
    <el-main >
      <router-view />
    </el-main>
    <Footer />
  </div>
</template>

<script setup>
import Sidebar from '../components/silder/index.vue'
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
  display: flex;
}

.main-container {
  flex: 1;
  padding: 20px;
  margin-left: 200px; /* 为侧边栏留出空间 */
  background-color: #986d6d; /* 添加背景色以便更好地看到内容区域 */
}

/* 确保内容区域有足够的z-index */
:deep(.main-container) {
  position: relative;
  z-index: 1;
}
</style>