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

  <!-- 笔记技术笔记 -->
  <section id="tech-notes" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex items-center mb-12" data-aos="fade-right">
        <div class="w-12 h-1 bg-primary rounded-full mr-4"></div>
        <h2 class="text-3xl font-bold">笔记技术笔记</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="tech-notes-container">
        <ArticleCard
            v-for="(post, index) in techPosts"
            :key="post.id"
            :post="post"
            :category-color="'primary'"
            :delay="(index % 3) * 100"
        />
      </div>

      <div class="text-center mt-12">
        <router-link to="/tech-notes" class="inline-block bg-white hover:bg-gray-100 text-primary border border-primary font-medium py-3 px-6 rounded-lg transition-all-300 shadow-sm hover:shadow">
          查看更多技术笔记
        </router-link>
      </div>
    </div>
  </section>

  <!-- 生活笔记 -->
  <section id="life-notes" class="py-16 bg-gray-50">
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

      <div class="text-center mt-12">
        <router-link to="/life-notes" class="inline-block bg-white hover:bg-gray-100 text-accent border border-accent font-medium py-3 px-6 rounded-lg transition-all-300 shadow-sm hover:shadow">
          查看更多生活笔记
        </router-link>
      </div>
    </div>
  </section>

  <!-- 我的简历 -->
  <section id="resume" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex items-center mb-12" data-aos="fade-right">
        <div class="w-12 h-1 bg-secondary rounded-full mr-4"></div>
        <h2 class="text-3xl font-bold">我的简历</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- 技能专长 -->
        <div data-aos="fade-up">
          <h3 class="text-2xl font-bold mb-6 flex items-center">
            <i class="fa fa-star text-secondary mr-3"></i> 技能专长
          </h3>
          <div class="space-y-6">
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium">前端开发</span>
                <span>90%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-secondary h-2 rounded-full" style="width: 90%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium">UI/UX设计</span>
                <span>85%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-secondary h-2 rounded-full" style="width: 85%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium">后端开发</span>
                <span>75%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-secondary h-2 rounded-full" style="width: 75%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium">移动应用开发</span>
                <span>70%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-secondary h-2 rounded-full" style="width: 70%"></div>
              </div>
            </div>
          </div>

          <h3 class="text-2xl font-bold mt-10 mb-6 flex items-center">
            <i class="fa fa-code text-secondary mr-3"></i> 技术栈
          </h3>
          <div class="flex flex-wrap gap-3">
            <span class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full transition-all-300">HTML5</span>
            <span class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full transition-all-300">CSS3/Tailwind</span>
            <span class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full transition-all-300">JavaScript</span>
            <span class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full transition-all-300">TypeScript</span>
            <span class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full transition-all-300">Vue.js</span>
            <span class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full transition-all-300">React</span>
            <span class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full transition-all-300">Node.js</span>
            <span class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full transition-all-300">Express</span>
            <span class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full transition-all-300">MongoDB</span>
            <span class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full transition-all-300">Git</span>
          </div>
        </div>

        <!-- 工作经历 -->
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-2xl font-bold mb-6 flex items-center">
            <i class="fa fa-briefcase text-secondary mr-3"></i> 工作经历
          </h3>
          <div class="space-y-8">
            <div class="relative pl-8 pb-8 border-l-2 border-gray-200">
              <div class="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary"></div>
              <div class="mb-1">
                <h4 class="text-xl font-bold">高级前端开发工程师</h4>
                <p class="text-secondary">科技创新公司</p>
              </div>
              <p class="text-gray-600">2023年至今</p>
              <p class="mt-3 text-gray-700">负责公司核心产品的前端架构设计和开发，优化用户体验，提升产品性能。</p>
            </div>
            <div class="relative pl-8 pb-8 border-l-2 border-gray-200">
              <div class="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary"></div>
              <div class="mb-1">
                <h4 class="text-xl font-bold">前端开发工程师</h4>
                <p class="text-secondary">互联网科技有限公司</p>
              </div>
              <p class="text-gray-600">2020年 - 2023年</p>
              <p class="mt-3 text-gray-700">参与多个Web应用项目的开发，负责前端界面实现和交互功能开发。</p>
            </div>
            <div class="relative pl-8 border-l-2 border-gray-200">
              <div class="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary"></div>
              <div class="mb-1">
                <h4 class="text-xl font-bold">UI/UX设计师</h4>
                <p class="text-secondary">数字设计工作室</p>
              </div>
              <p class="text-gray-600">2018年 - 2020年</p>
              <p class="mt-3 text-gray-700">负责客户项目的界面设计和用户体验优化，参与产品从概念到上线的全过程。</p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <router-link to="/resume" class="inline-block bg-white hover:bg-gray-100 text-secondary border border-secondary font-medium py-3 px-6 rounded-lg transition-all-300 shadow-sm hover:shadow">
          查看完整简历
        </router-link>
      </div>
    </div>
  </section>

  <!-- 我的世界 -->
  <section id="world" class="py-16 bg-gray-50">
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

      <div class="text-center mt-12">
        <router-link to="/world" class="inline-block bg-white hover:bg-gray-100 text-green-500 border border-green-500 font-medium py-3 px-6 rounded-lg transition-all-300 shadow-sm hover:shadow">
          了解更多关于我
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue'
// import ArticleCard from './.'

// 从全局提供的数据源中获取文章
const posts = inject('posts')
const techPosts = posts.tech
const lifePosts = posts.life
</script>

<style scoped>
/* 可以添加一些组件特定的样式 */
</style>
