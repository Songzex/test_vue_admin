<template>
  <!-- 返回顶部按钮 -->
  <button 
    id="back-to-top" 
    class="fixed bottom-8 right-8 bg-primary hover:bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all-300 opacity-0 invisible"
    @click="scrollToTop"
  >
    <i class="fa fa-arrow-up"></i>
  </button>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const backToTopButton = ref(null)

// 监听滚动事件，控制返回顶部按钮的显示/隐藏
onMounted(() => {
  backToTopButton.value = document.getElementById('back-to-top')
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopButton.value.classList.remove('opacity-0', 'invisible');
      backToTopButton.value.classList.add('opacity-100', 'visible');
    } else {
      backToTopButton.value.classList.add('opacity-0', 'invisible');
      backToTopButton.value.classList.remove('opacity-100', 'visible');
    }
  });
})

// 滚动到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>

<style scoped>
/* 可以添加一些组件特定的样式 */
</style>
