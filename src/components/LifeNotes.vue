<template>
  <!-- 生活笔记 -->
  <section id="life-notes" class="py-16 bg-gray-50" v-if="$route.name === 'Home' || $route.name === 'LifeNotes'">
    <div class="container mx-auto px-4">
      <div class="flex items-center mb-12" data-aos="fade-right">
        <div class="w-12 h-1 bg-accent rounded-full mr-4"></div>
        <h2 class="text-3xl font-bold">生活笔记</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="life-notes-container">
        <ArticleCard 
          v-for="(post, index) in lifePosts" 
          :key="post.id" 
          :post="post" 
          :category-color="'accent'" 
          :delay="(index % 3) * 100"
        />
      </div>
      
      <div class="text-center mt-12" v-if="$route.name === 'Home'">
        <router-link to="/life-notes" class="inline-block bg-white hover:bg-gray-100 text-accent border border-accent font-medium py-3 px-6 rounded-lg transition-all-300 shadow-sm hover:shadow">
          查看更多生活笔记
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue'
import ArticleCard from './ArticleCard.vue'

// 从全局提供的数据源中获取生活笔记
const posts = inject('posts')
const lifePosts = posts.life
</script>

<style scoped>
/* 可以添加一些组件特定的样式 */
</style>
