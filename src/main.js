import './assets/main.css'
import './assets/icon/iconfont.css' // 引入自定义图标字体

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store'
import router from './router'
import { QuillEditor } from '@vueup/vue-quill'
import 'quill/dist/quill.snow.css' // 引入默认样式（snow 主题，基础美观）

const app = createApp(App)
app.use(store).use(router).use(ElementPlus).mount('#app')
app.component('QuillEditor', QuillEditor) // 注册为全局组件
// 注册所有Element Plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}