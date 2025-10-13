# 路由安装
 npm install vue-router --save
# 路由配置
{

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue' // 示例组件

const routes = [
{ path: '/', component: Home }
]

const router = createRouter({
history: createWebHistory(),
routes
})

createApp(App).use(router).mount('#app')


}

# 动态路由


# 集成store
npm install vuex --save