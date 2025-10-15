<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px"><Sidebar /></el-aside>
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
</style>