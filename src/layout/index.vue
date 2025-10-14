<template>
  <div class="layout-container">
    <div class="header">
      <h2>管理系统</h2>
    </div>
    <div class="main-wrapper">
      <Sidebar />
      <div class="content-container">
        <router-view />
      </div>
    </div>
    <div class="footer">
      <p>© 2025 管理系统</p>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/layout/index.vue'
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 100;
}

.main-wrapper {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.content-container {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f0f2f5;
}

.footer {
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
}
</style>