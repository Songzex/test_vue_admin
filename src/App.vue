<script setup>
import layout from './layout/index.vue'
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import { onMounted } from 'vue'
import router from './router'
const store = useStore()
const route = useRoute()
import { getMenuList } from '@/utils/http/login/index.js'

// 确保在组件挂载时获取菜单列表
onMounted(async () => {
  try {
    const res = await getMenuList();
    // 使用 commit 更新状态
    store.commit('permission/SET_ROUTES', res);
    console.log('菜单列表:', res)
    
    // 添加动态路由
    const { addDynamicRoutes } = await import('@/router/index.js')
    const dynamicRoutes = addDynamicRoutes(res)
    console.log('动态路由:', dynamicRoutes)
  } catch (error) {
    console.error('获取菜单失败:', error)
  }
})
</script>

<template>
  <layout />
</template>