<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <Sidebar />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Sidebar from '../components/layout/index.vue'
</script>

<style scoped>
.common-layout {
  height: 100vh;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.el-aside {
  background-color: #304156;
  color: #fff;
  text-align: center;
  line-height: 200px;
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 200px;
  z-index: 999;
}

.el-main {
  background-color: #f0f2f5;
  color: #333;
  padding: 20px;
  overflow-y: auto;
  margin-left: 200px;
  margin-top: 60px;
  height: calc(100vh - 60px);
}
</style>