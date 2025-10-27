<template>
  <div class="article-card bg-white rounded-xl shadow-card overflow-hidden" data-aos="fade-up" :data-aos-delay="delay">
    <div class="relative overflow-hidden h-48">
      <img :src="post.image" :alt="post.title" class="article-image w-full h-full object-cover">
      <div :class="`absolute top-4 right-4 bg-${categoryColor} text-white text-xs font-medium px-3 py-1 rounded-full`">
        {{ post.tags[0] }}
      </div>
    </div>
    <div class="p-6">
      <div class="flex items-center text-sm text-gray-500 mb-2">
        <span>{{ post.date }}</span>
        <span class="mx-2">•</span>
        <span>{{ post.readTime }}</span>
      </div>
      <h3 class="text-xl font-bold mb-3 line-clamp-2">{{ post.title }}</h3>
      <p class="text-gray-600 mb-4 line-clamp-3">{{ post.excerpt }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in post.tags" :key="tag" class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
          {{ tag }}
        </span>
      </div>
      <a href="#" :class="`inline-block text-${categoryColor} hover:text-${categoryColor === 'primary' ? 'blue-700' : 'yellow-700'} font-medium transition-all-300`">
        阅读更多 <i class="fa fa-arrow-right ml-1"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// 定义组件接收的props
const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  categoryColor: {
    type: String,
    default: 'primary'
  },
  delay: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
/* 可以添加一些组件特定的样式 */
</style>
