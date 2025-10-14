<template>
  <!-- 仅渲染非隐藏的菜单  v-if="!menu.hidden"-->
  <template >
    <!-- 1. 目录类型（type=0）且有子菜单：渲染为可展开的菜单组 -->
    <el-sub-menu
        v-if="menu.type === 0 && menu.list && menu.list.length > 0"
        :index="resolveIndex(menu)"
    >
      <template #title>
        <el-icon v-if="menu.icon"><component :is="menu.icon" /></el-icon>
        <span>{{ menu.name }}</span>
      </template>
      <!-- 递归渲染子菜单 -->
      <sidebar-item
          v-for="subMenu in menu.list"
          :key="subMenu.menuId"
          :menu="subMenu"
          :base-path="resolveSubBasePath(menu, subMenu)"
      />
    </el-sub-menu>

    <!-- 2. 菜单项类型（type=1）：渲染为可点击的菜单 -->
    <el-menu-item
        v-else-if="menu.type === 1"
        :index="resolveIndex(menu)"
    >
      <template #title>
        <el-icon v-if="menu.icon"><component :is="menu.icon" /></el-icon>
        <span>{{ menu.name }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
// 接收父组件传递的菜单数据和基础路径
const props = defineProps({
  menu: {
    type: Object,
    required: true,
    default: () => ({})
  },
  basePath: {
    type: String,
    default: ''
  }
})

const route = useRoute()

// 解析菜单的唯一标识（用于菜单激活和展开状态）
const resolveIndex = (menu) => {
  // 对于目录类型，使用menuId；对于菜单项，使用url作为路由路径
  return menu.type === 0 ? menu.menuId.toString() : menu.url
}

// 解析子菜单的基础路径（处理嵌套路由）
const resolveSubBasePath = (parentMenu, subMenu) => {
  // 拼接父路径和子路径（根据实际项目路由格式调整）
  if (parentMenu.url && subMenu.url) {
    return parentMenu.url.endsWith('/')
        ? `${parentMenu.url}${subMenu.url}`
        : `${parentMenu.url}/${subMenu.url}`
  }
  return subMenu.url || parentMenu.url
}
</script>
