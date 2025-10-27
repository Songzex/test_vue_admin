<template>
  <!-- 我的简历 -->
  <section id="resume" class="py-16 bg-white" v-if="$route.name === 'Home' || $route.name === 'Resume'">
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
      
      <div class="text-center mt-12" v-if="$route.name === 'Home'">
        <router-link to="/resume" class="inline-block bg-white hover:bg-gray-100 text-secondary border border-secondary font-medium py-3 px-6 rounded-lg transition-all-300 shadow-sm hover:shadow">
          查看完整简历
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
