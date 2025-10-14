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
  console.log('应用初始化开始...')
  console.log('当前路由:', route.path)
  
  try {
    const res = await getMenuList();
    console.log('获取菜单列表成功:', res)
    
    // 使用 commit 更新状态
    store.commit('permission/SET_ROUTES', res);
    console.log('菜单列表已存储到 Vuex')
    
    // 添加动态路由
    const { addDynamicRoutes } = await import('@/router/index.js')
    const dynamicRoutes = addDynamicRoutes(res)
    console.log('动态路由添加完成:', dynamicRoutes)
    
    // 每次刷新后都导航到仪表板页面
    console.log('导航到默认页面: /dashboard')
    router.push('/dashboard').catch(err => {
      console.error('路由导航错误:', err)
    })
  } catch (error) {
    console.error('获取菜单失败:', error)
    // 即使获取菜单失败，也确保导航到默认页面
    router.push('/dashboard').catch(err => {
      console.error('路由导航错误:', err)
    })
  }
  
  console.log('应用初始化完成')
})
</script>

<template>
  <layout />
</template>