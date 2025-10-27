<template>
  <!-- 页脚 -->
  <footer class="bg-dark text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">我的博客</h3>
          <p class="text-gray-400 mb-4">记录技术探索、生活感悟与个人成长的点滴。</p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-all-300">
              <i class="fa fa-github text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-all-300">
              <i class="fa fa-twitter text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-all-300">
              <i class="fa fa-linkedin text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-all-300">
              <i class="fa fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">分类</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-all-300">技术笔记</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-all-300">生活笔记</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-all-300">前端开发</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-all-300">UI/UX设计</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-all-300">生活方式</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">页面</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-400 hover:text-white transition-all-300">首页</router-link></li>
            <li><router-link to="/tech-notes" class="text-gray-400 hover:text-white transition-all-300">技术笔记</router-link></li>
            <li><router-link to="/life-notes" class="text-gray-400 hover:text transition-all-300">生活笔记</router-link></li>
            <li><router-link to="/resume" class="text-gray-400 hover:text-white transition-all-300">我的简历</router-link></li>
            <li><router-link to="/world" class="text-gray-400 hover:text-white transition-all-300">我的世界</router-link></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">联系我</h3>
          <ul class="space-y-2">
            <li class="flex items-center">
              <i class="fa fa-envelope text-gray-400 mr-2"></i>
              <a href="mailto:contact@example.com" class="text-gray-400 hover:text-white transition-all-300">contact@example.com</a>
            </li>
            <li class="flex items-center">
              <i class="fa fa-map-marker text-gray-400 mr-2"></i>
              <span class="text-gray-400">北京市朝阳区</span>
            </li>
          </ul>
          <div class="mt-4">
            <form class="flex">
              <input type="email" placeholder="您的邮箱地址" class="px-4 py-2 w-full rounded-l-lg focus:outline-none text-dark">
              <button type="submit" class="bg-primary hover:bg-blue-600 px-4 py-2 rounded-r-lg transition-all-300">
                <i class="fa fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 mb-4 md:mb-0">© 2025 我的博客. 保留所有权利.</p>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-white transition-all-300">隐私政策</a>
          <a href="#" class="text-gray-400 hover:text-white transition-all-300">使用条款</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 可以添加一些组件特定的逻辑
</script>

<style scoped>
/* 可以添加一些组件特定的样式 */
</style>
