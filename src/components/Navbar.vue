<template>
  <!-- 导航栏 -->
  <nav id="navbar" class="navbar-fixed bg-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <router-link to="/" class="text-2xl font-bold text-primary">我的博客</router-link>
        
        <!-- 桌面端导航 - 横排 -->
        <div class="hidden md:flex space-x-1">
          <router-link 
            to="/" 
            class="text-dark hover:text-primary transition-all-300 px-6 py-3 border-b-2 border-primary font-medium"
            active-class="text-primary border-primary"
            exact
          >
            首页
          </router-link>
          <router-link 
            to="/tech-notes" 
            class="text-secondary hover:text-primary transition-all-300 px-6 py-3 border-b-2 border-transparent hover:border-gray-300"
            active-class="text-primary border-primary"
          >
            笔记技术笔记
          </router-link>
          <router-link 
            to="/life-notes" 
            class="text-secondary hover:text-primary transition-all-300 px-6 py-3 border-b-2 border-transparent hover:border-gray-300"
            active-class="text-primary border-primary"
          >
            生活笔记
          </router-link>
          <router-link 
            to="/resume" 
            class="text-secondary hover:text-primary transition-all-300 px-6 py-3 border-b-2 border-transparent hover:border-gray-300"
            active-class="text-primary border-primary"
          >
            我的简历
          </router-link>
          <router-link 
            to="/world" 
            class="text-secondary hover:text-primary transition-all-300 px-6 py-3 border-b-2 border-transparent hover:border-gray-300"
            active-class="text-primary border-primary"
          >
            我的世界
          </router-link>
        </div>
        
        <!-- 移动端菜单按钮 -->
        <button id="menu-toggle" class="md:hidden text-dark focus:outline-none" @click="toggleMobileMenu">
          <i class="fa fa-bars text-xl"></i>
        </button>
      </div>
    </div>
    
    <!-- 移动端导航菜单 -->
    <div id="mobile-menu" class="mobile-menu hidden md:hidden bg-white shadow-md" :class="{ 'hidden': !mobileMenuOpen }">
      <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <router-link 
          to="/" 
          class="text-dark hover:text-primary transition-all-300 py-2 border-b border-gray-100"
          @click="closeMobileMenu"
          exact
        >
          首页
        </router-link>
        <router-link 
          to="/tech-notes" 
          class="text-secondary hover:text-primary transition-all-300 py-2 border-b border-gray-100"
          @click="closeMobileMenu"
        >
          笔记技术笔记
        </router-link>
        <router-link 
          to="/life-notes" 
          class="text-secondary hover:text-primary transition-all-300 py-2 border-b border-gray-100"
          @click="closeMobileMenu"
        >
          生活笔记
        </router-link>
        <router-link 
          to="/resume" 
          class="text-secondary hover:text-primary transition-all-300 py-2 border-b border-gray-100"
          @click="closeMobileMenu"
        >
          我的简历
        </router-link>
        <router-link 
          to="/world" 
          class="text-secondary hover:text-primary transition-all-300 py-2"
          @click="closeMobileMenu"
        >
          我的世界
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileMenuOpen = ref(false)

// 移动端菜单切换
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// 关闭移动端菜单
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// 监听路由变化，关闭移动端菜单
router.afterEach(() => {
  closeMobileMenu()
})
</script>

<style scoped>
/* 可以添加一些组件特定的样式 */
</style>
