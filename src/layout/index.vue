<template>
  <div class="layout-container">
    <div>
      测试问题
    </div>
    <Sidebar />
    <div class="main-container">
      <router-view />
    </div>
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
}
</style>