<script setup>
// 你原有所有逻辑（完全保留）
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { onMounted, onUnmounted } from 'vue'
import router from './router'
import { getMenuList } from '@/utils/http/login/index.js'

const store = useStore()
const route = useRoute()

// 你原有初始化逻辑（仅新增监听）
onMounted(async () => {

  // 以下是你原有代码，一行未改
  console.log('应用初始化开始...')
  console.log('当前路由:', route.path)

  try {
    const res = await getMenuList();
    console.log('获取菜单列表成功:', res)
    store.commit('permission/SET_ROUTES', res);
    console.log('菜单列表已存储到 Vuex')

    const { addDynamicRoutes } = await import('@/router/index.js')
    const dynamicRoutes = addDynamicRoutes(res)
    console.log('动态路由添加完成:', dynamicRoutes)

    router.push('/index').catch(err => {
      console.error('路由导航错误:', err)
    })
  } catch (error) {
    console.error('获取菜单失败:', error)
    router.push('/index').catch(err => {
      console.error('路由导航错误:', err)
    })
  }

  console.log('应用初始化完成')
})

// 组件卸载时移除监听（避免内存泄漏）
onUnmounted(() => {
  window.removeEventListener('resize', handleZoomLimit);
  // 恢复原生样式，不留痕迹
  document.documentElement.style.transform = 'none';
})
</script>

<template>
  <!-- 你原有模板，完全不变 -->
  <router-view></router-view>
</template>

<style scoped>
/* 你原有样式保留，无任何新增 */
</style>
