<template>
  <LayOut />
</template>

<script setup>
import LayOut from '@/components/layout/index.vue'
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

.main-container {
  display: flex;
  flex: 1;
  padding: 0;
  background-color: #f0f2f5;
  overflow: hidden;
}

.content-wrapper {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
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