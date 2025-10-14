<template>
  <div class="sidebar-container">
    <!-- 侧边栏菜单 -->
<!--菜单没有被展示-->
    <el-menu
        mode="vertical"
        :collapse="isCollapse"
        :default-active="activeMenu"
        :background-color="theme.menuBg"
        :text-color="theme.menuText"
        :active-text-color="theme.menuActiveText"
        :collapse-transition="false"
        router
    >
      <!-- 渲染菜单列表（递归入口） -->
      <sidebar-item
          v-for="menu in menuList"
          :key="menu.menuId"
          :menu="menu"
          :base-path="resolveBasePath(menu)"
      />
    </el-menu>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import SidebarItem from './SidebarItem.vue' // 递归子组件
import { useTheme } from '@/hooks/userTheme.js' //

// 获取状态和路由
const store = useStore()
const route = useRoute()
const { theme } = useTheme()

// 从Vuex获取后端返回的原始菜单列表（也可直接使用路由数据）
const menuList = computed(() => store.state.permission.menuList)
console.log('菜单列表menuList:', menuList.value)
// 侧边栏折叠状态（可从Vuex获取全局状态）
const isCollapse = computed(() => store.state.app.sidebarCollapse)

// 计算当前激活的菜单（根据路由路径匹配）
const activeMenu = computed(() => {
  // 从路由中提取完整路径，用于匹配菜单
  if (route && route.path) {
    return route.path
  }
  return ''
})
// 解析菜单的基础路径（用于嵌套路由）
const resolveBasePath = (menu) => {
  // 顶级菜单（parentId=0）且类型为目录（type=0）时，路径为自身或子菜单路径
  if (menu.parentId === 0 && menu.type === 0) {
    return menu.url || (menu.list && menu.list[0]?.url) || ''
  }
  return menu.url || ''
}

// 监听路由变化，处理特殊场景（如刷新后菜单状态）
// 监听路由变化，处理特殊场景（如刷新后菜单状态）
watch(
    () => route?.path,  // 添加可选链操作符
    (newPath) => {
      // 可在此处添加菜单状态同步逻辑
      console.log('Route path changed to:', newPath)
    }
)
</script>

<style scoped>
.sidebar-container {
  width: 200px; /* 设置固定宽度 */
  height: 100%;
  overflow-y: auto;
  position: fixed; /* 固定定位 */
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>
