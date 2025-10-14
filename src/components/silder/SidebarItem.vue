<template>
  <!-- 仅渲染非隐藏的菜单  v-if="!menu.hidden"-->
  <template v-if="menu">
    <!-- 1. 目录类型（type=0）且有子菜单：渲染为可展开的菜单组 -->
    <el-sub-menu
        v-if="menu.type === 0 && menu.list && menu.list.length > 0"
        :index="resolveIndex(menu)"
    >
      <template #title>
        <el-icon v-if="menu.icon">
          <component :is="menu.icon" />
        </el-icon>
        <span>{{ menu.name }}</span>
      </template>
      <!-- 递归渲染子菜单 -->
      <sidebar-item
          v-for="subMenu in menu.list"
          :key="subMenu.menuId"
          :menu="subMenu"
          :base-path="resolveSubBasePath(menu, subMenu)"
          :route="route"
      />
    </el-sub-menu>

    <!-- 2. 菜单项类型（type=1）：渲染为可点击的菜单 -->
    <el-menu-item
        v-else-if="menu.type === 1 && menu.url"
        :index="resolveFullPath(menu)"
        @click="handleMenuItemClick(menu)"
    >
      <el-icon v-if="menu.icon">
        <component :is="menu.icon" />
      </el-icon>
      <template #title>
        <span>{{ menu.name }}</span>
      </template>
    </el-menu-item>
    
    <!-- 3. 处理目录类型但没有子菜单的情况 -->
    <el-menu-item
        v-else-if="menu.type === 0 && (!menu.list || menu.list.length === 0) && menu.url"
        :index="resolveFullPath(menu)"
        @click="handleMenuItemClick(menu)"
    >
      <el-icon v-if="menu.icon">
        <component :is="menu.icon" />
      </el-icon>
      <template #title>
        <span>{{ menu.name }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup>
import { useRouter } from 'vue-router'

// 接收父组件传递的菜单数据和基础路径
const props = defineProps({
  menu: {
    type: Object,
    required: true
  },
  basePath: {
    type: String,
    default: ''
  },
  route: {
    type: Object,
    default: () => ({})
  }
})

// 确保正确导入 useRouter
const router = useRouter()

// 解析菜单的唯一标识（用于菜单激活和展开状态）
const resolveIndex = (menu) => {
  // 对于目录类型，使用menuId；对于菜单项，使用url作为路由路径
  return menu.type === 0 ? menu.menuId.toString() : (menu.url || menu.menuId.toString())
}

// 解析完整路径
const resolveFullPath = (menu) => {
  return menu.url ? '/' + menu.url : menu.menuId.toString()
}

// 解析子菜单的基础路径（处理嵌套路由）
const resolveSubBasePath = (parentMenu, subMenu) => {
  // 拼接父路径和子路径（根据实际项目路由格式调整）
  if (parentMenu.url && subMenu.url) {
    return parentMenu.url.endsWith('/')
        ? `${parentMenu.url}${subMenu.url}`
        : `${parentMenu.url}/${subMenu.url}`
  }
  return subMenu.url || parentMenu.url || ''
}

// 处理菜单项点击事件
const handleMenuItemClick = (menu) => {
  console.log('点击菜单项:', menu)
  if (menu.url) {
    // 检查router是否有效
    if (router && typeof router.push === 'function') {
      const fullPath = '/' + menu.url
      console.log('导航到:', fullPath)
      router.push(fullPath).catch(err => {
        console.error('路由导航错误:', err)
      })
    } else {
      // 如果router不可用，使用window.location进行导航
      console.warn('Router不可用，使用window.location导航')
      window.location.hash = '#/' + menu.url
    }
  } else {
    console.warn('菜单URL缺失:', menu)
  }
}
</script>