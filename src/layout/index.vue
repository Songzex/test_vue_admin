<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px"><Sidebar class="sidebar-container" /></el-aside>
        <el-container>
          <el-main><router-view /></el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Sidebar from '../components/layout/index.vue'
</script>

<style scoped>
.layout-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.headers {
  background-color: #b3c0d1;
  color: #333;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.main-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar-container {
  height: calc(100vh - 60px);
  position: fixed;
  top: 60px;
  left: 0;
  width: 200px;
  z-index: 1000;
}

.content-wrapper {
  flex: 1;
  margin-left: 200px;
  padding: 20px;
  background-color: #f0f2f5;
  height: calc(100vh - 60px);
  overflow-y: auto;
  margin-top: 0px;
}
</style>