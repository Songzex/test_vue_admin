<template>
  <!-- 大背景图区域 -->
  <header class="relative h-[500px] md:h-[600px] overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img src="https://p26-doubao-search-sign.byteimg.com/labis/9e68ccfc23bf92ad54de939c0f79937a~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1777103970&x-signature=JxIxLu53fjHa0UlnQHyaWBHEgPA%3D" alt="博客背景" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
    </div>
    <div class="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
      <div class="max-w-2xl" data-aos="fade-right" data-aos-duration="1000">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white text-shadow">探索知识的旅程</h1>
        <p class="text-lg md:text-xl text-gray-200 mb-8">记录技术探索、生活感悟与个人成长的点滴</p>
        <div class="flex flex-wrap gap-4">
          <router-link to="/tech-notes" class="inline-block bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all-300 shadow-md hover:shadow-lg">
            技术笔记
          </router-link>
          <router-link to="/life-notes" class="inline-block bg-white hover:bg-gray-100 text-primary font-medium py-3 px-6 rounded-lg transition-all-300 shadow-md hover:shadow-lg">
            生活笔记
          </router-link>
        </div>
      </div>
    </div>
  </header>
  
  <!-- 内容区域 -->
  <main class="py-16 bg-gray-50">
    <!-- 这里将由路由视图填充内容 -->
  </main>
</template>

<script setup>
// 可以添加一些组件特定的逻辑
</script>

<style scoped>
/* 可以添加一些组件特定的样式 */
</style>
