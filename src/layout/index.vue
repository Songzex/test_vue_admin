<template>
  <div class="layout-container">
    <Sidebar></Sidebar>
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from '/src/components/silder/index.vue'
// 布局组件，用于包裹页面内容
// import Sidebar from './components/silder/index.vue'
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
}
</style>
