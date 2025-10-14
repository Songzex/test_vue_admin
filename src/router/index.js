import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import { convertMenuToRoutes } from '@/utils/router-generator.js'

// 常量路由（不需要权限的路由）
export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        hidden: true
    },
    // 添加默认首页路由
    {
        path: '/',
        redirect: '/dashboard',
        hidden: true
    }
]

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes: constantRoutes
})

/**
 * 动态添加路由
 * @param {Array} menuList 后端返回的菜单列表
 */
export function addDynamicRoutes(menuList) {
    // 1. 将菜单数据转换为路由配置
    const dynamicRoutes = convertMenuToRoutes(menuList)

    // 2. 创建根路由容器（通常使用Layout组件）
    const rootRoute = {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: dynamicRoutes
    }

    // 3. 添加动态路由到路由系统
    router.addRoute(rootRoute)

    // 4. 添加404路由作为最后一项
    router.addRoute({
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        hidden: true
    })

    return dynamicRoutes
}

// 重置路由（用于退出登录时）
export function resetRouter() {
    const newRouter = createRouter({
        history: createWebHashHistory(),
        scrollBehavior: () => ({ top: 0 }),
        routes: constantRoutes
    })
    router.matcher = newRouter.matcher // 重置路由匹配器
}

export default router
