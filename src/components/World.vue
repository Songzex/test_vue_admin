<template>
  <!-- 我的世界 -->
  <section id="world" class="py-16 bg-gray-50" v-if="$route.name === 'Home' || $route.name === 'World'">
    <div class="container mx-auto px-4">
      <div class="flex items-center mb-12" data-aos="fade-right">
        <div class="w-12 h-1 bg-green-500 rounded-full mr-4"></div>
        <h2 class="text-3xl font-bold">我的世界</h2>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- 个人介绍 -->
        <div class="lg:col-span-1" data-aos="fade-up">
          <div class="bg-white rounded-xl shadow-card p-6 h-full">
            <div class="flex flex-col items-center mb-6">
              <div class="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-green-100">
                <img src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/51250d9251d8458ea2bf18008f67b444~tplv-a9rns2rl98-image.image?rcl=202510271553322956ECEA4B29F90968F3&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1764143643&x-signature=Q1ZRTDK2ZU4nGljJH60bAeA9iP8%3D" alt="个人头像" class="w-full h-full object-cover">
              </div>
              <h3 class="text-xl font-bold">博主昵称</h3>
              <p class="text-gray-600">前端开发工程师 / UI设计师</p>
            </div>
            <div class="text-center mb-6">
              <p class="text-gray-700">热爱技术，喜欢分享，追求简约而不简单的生活方式。</p>
            </div>
            <div class="flex justify-center space-x-4">
              <a href="#" class="text-gray-600 hover:text-green-500 transition-all-300">
                <i class="fa fa-github text-xl"></i>
              </a>
              <a href="#" class="text-gray-600 hover:text-green-500 transition-all-300">
                <i class="fa fa-twitter text-xl"></i>
              </a>
              <a href="#" class="text-gray-600 hover:text-green-500 transition-all-300">
                <i class="fa fa-linkedin text-xl"></i>
              </a>
              <a href="#" class="text-gray-600 hover:text-green-500 transition-all-300">
                <i class="fa fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <!-- 兴趣爱好 -->
        <div class="lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
          <div class="bg-white rounded-xl shadow-card p-6">
            <h3 class="text-2xl font-bold mb-6 flex items-center">
              <i class="fa fa-heart text-green-500 mr-3"></i> 兴趣爱好
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex items-start">
                <div class="bg-green-100 p-3 rounded-full mr-4">
                  <i class="fa fa-book text-green-500"></i>
                </div>
                <div>
                  <h4 class="font-bold mb-2">阅读</h4>
                  <p class="text-gray-600">喜欢阅读技术书籍、科幻小说和哲学类书籍，不断拓展知识面。</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-green-100 p-3 rounded-full mr-4">
                  <i class="fa fa-camera text-green-500"></i>
                </div>
                <div>
                  <h4 class="font-bold mb-2">摄影</h4>
                  <p class="text-gray-600">热爱旅行摄影，用镜头记录旅途中的美好瞬间和不同文化。</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-green-100 p-3 rounded-full mr-4">
                  <i class="fa fa-music text-green-500"></i>
                </div>
                <div>
                  <h4 class="font-bold mb-2">音乐</h4>
                  <p class="text-gray-600">喜欢听各种类型的音乐，尤其是古典音乐和独立音乐。</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-green-100 p-3 rounded-full mr-4">
                  <i class="fa fa-plane text-green-500"></i>
                </div>
                <div>
                  <h4 class="font-bold mb-2">旅行</h4>
                  <p class="text-gray-600">喜欢探索新的地方，体验不同的文化和风景，拓宽视野。</p>
                </div>
              </div>
            </div>
            
            <!-- 摄影作品 -->
            <h3 class="text-2xl font-bold mt-10 mb-6 flex items-center">
              <i class="fa fa-picture-o text-green-500 mr-3"></i> 摄影作品
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="overflow-hidden rounded-lg">
                <img src="https://p26-doubao-search-sign.byteimg.com/labis/5cea48070233435064fb6966a8449207~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1777103621&x-signature=SOCtibb8RSFZ%2BCxEnvoLaXOc74w%3D" alt="摄影作品" class="w-full h-32 object-cover hover:scale-110 transition-transform duration-500">
              </div>
              <div class="overflow-hidden rounded-lg">
                <img src="https://p26-doubao-search-sign.byteimg.com/labis/39ceae6cf33a2cb278d2a02a11b3c059~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1777103621&x-signature=CBOdOGEdQYud1sqeVNI6IZiBbHQ%3D" alt="摄影作品" class="w-full h-32 object-cover hover:scale-110 transition-transform duration-500">
              </div>
              <div class="overflow-hidden rounded-lg">
                <img src="https://p26-doubao-search-sign.byteimg.com/labis/9e68ccfc23bf92ad54de939c0f79937a~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1777103970&x-signature=JxIxLu53fjHa0UlnQHyaWBHEgPA%3D" alt="摄影作品" class="w-full h-32 object-cover hover:scale-110 transition-transform duration-500">
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12" v-if="$route.name === 'Home'">
        <router-link to="/world" class="inline-block bg-white hover:bg-gray-100 text-green-500 border border-green-500 font-medium py-3 px-6 rounded-lg transition-all-300 shadow-sm hover:shadow">
          了解更多关于我
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// 可以添加一些组件特定的逻辑
</script>

<style scoped>
/* 可以添加一些组件特定的样式 */
</style>
