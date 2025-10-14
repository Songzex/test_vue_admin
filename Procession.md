# 路由安装
 npm install vue-router --save
# 路由配置
{

```js

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
```


}

# 动态路由


# 集成store
npm install vuex --save



  ```js
import { createStore } from 'vuex'

const store = createStore({
state() {
return {
// 在这里定义状态
}
},
mutations: {
// 在这里定义变更
},
actions: {
// 在这里定义动作
}
})

export default store

````



```js
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')

```

# 动态路由配置
加载过程：               -----> router.js [组装路由，菜单目录]
   permission.js                 |
                                 |
                       ------> router-generator.js [函数执行获取表单数据生成菜单目录的路由]