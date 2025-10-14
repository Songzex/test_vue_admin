<template>
  <div class="sidebar-container">
    <!-- 侧边栏菜单 -->
    <el-menu
        mode="vertical"
        :collapse="isCollapse"
        :default-active="activeMenu"
        :background-color="theme.menuBg"
        :text-color="theme.menuText"
        :active-text-color="theme.menuActiveText"
        :collapse-transition="false"
        :unique-opened="false"
    >
      <!-- 渲染菜单列表（递归入口） -->
      <sidebar-item
          v-for="menu in menuList"
          :key="menu.menuId"
          :menu="menu"
          :base-path="resolveBasePath(menu)"
          :route="route"
      />
    </el-menu>
  </div>
</template>

<script setup>
import { computed, watch ,onMounted,ref} from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import SidebarItem from './SidebarItem.vue' // 递归子组件
import { useTheme } from '@/hooks/userTheme.js'
import { getMenuList } from '@/utils/http/login/index.js'

// 获取状态和路由
const store = useStore()
const route = useRoute()
const { theme } = useTheme()
const menuList=ref([])

// 确保在组件挂载时获取菜单列表
onMounted(async () => {
  try {
    menuList.value= await getMenuList();
    // 使用 commit 更新状态
    store.commit('permission/SET_ROUTES', menuList.value);
    console.log('菜单列表:', menuList.value)
    
    // 添加动态路由
    const { addDynamicRoutes } = await import('@/router/index.js')
    const dynamicRoutes = addDynamicRoutes(menuList.value)
    console.log('动态路由:', dynamicRoutes)
  } catch (error) {
    console.error('获取菜单失败:', error)
  }
})

// 侧边栏折叠状态（可从Vuex获取全局状态）
const isCollapse = computed(() => store.state.app?.sidebarCollapse || false)

// 计算当前激活的菜单（根据路由路径匹配）
const activeMenu = computed(() => {
  // 从路由中提取完整路径，用于匹配菜单
  if (route && route.path) {
    console.log('当前路由路径:', route.path)
    // 确保路径以 / 开头
    const path = route.path.startsWith('/') ? route.path : '/' + route.path;
    return path;
  }
  return '/dashboard'
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
watch(
    () => route?.path,
    (newPath) => {
      console.log('Route path changed to:', newPath)
    }
)
</script>

<style scoped>
.sidebar-container {
  width: 200px;
  height: 100%;
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #304156;
}
</style>