/**
 * 将后端返回的菜单数据转换为Vue Router路由配置
 * @param {Array} menuList 后端返回的菜单列表
 * @returns {Array} 转换后的路由配置数组
 */
export function convertMenuToRoutes(menuList) {
    const routes = []

    menuList.forEach(menu => {
        // 转换单个菜单为路由配置
        const route = convertMenuToRoute(menu)
        if (route) {
            routes.push(route)
        }
    })

    return routes
}

/**
 * 将单个菜单转换为路由配置
 * @param {Object} menu 单个菜单数据
 * @returns {Object} 路由配置
 */
function convertMenuToRoute(menu) {
    // 如果是目录类型(type=0)且没有子菜单，不生成路由
    if (menu.type === 0 && (!menu.list || menu.list.length === 0)) {
        return null
    }

    // 基础路由配置
    const route = {
        path: menu.url ? `/${menu.url}` : `/${menu.menuId}`, // 路径处理
        name: menu.name.replace(/\s/g, ''), // 去除空格作为路由名称
        meta: {
            title: menu.name, // 菜单名称
            icon: menu.icon,  // 菜单图标
            menuId: menu.menuId, // 菜单ID
            perms: menu.perms // 权限标识
        },
        // 根据URL动态匹配组件（关键映射）
        component: getComponentByUrl(menu.url),
        children: [] // 子路由
    }

    // 处理子菜单
    if (menu.list && menu.list.length > 0) {
        menu.list.forEach(childMenu => {
            const childRoute = convertMenuToRoute(childMenu)
            if (childRoute) {
                route.children.push(childRoute)
            }
        })
    }

    // 目录类型菜单(type=0)通常作为路由容器，不需要组件
    if (menu.type === 0) {
        route.component = () => import('@/layout') // 使用布局组件作为容器
        // 如果目录只有一个子路由，设置重定向
        if (route.children.length === 1) {
            route.redirect = route.children[0].path
        }
    }

    return route
}

/**
 * 根据URL匹配对应的组件
 * 这里需要根据实际项目的组件路径进行映射
 */
function getComponentByUrl(url) {
    if (!url) return null

    // 组件路径映射表，key为后端返回的url，value为组件路径
    const componentMap = {
        'admin/config-gift-group': () => import('@/views/admin/config-gift-group'),
        // 其他页面的映射关系
        // 'user/list': () => import('@/views/user/list'),
        // 'dashboard': () => import('@/views/dashboard/index')
    }

    // 如果有匹配的组件则返回，否则返回默认的404组件
    return componentMap[url] || (() => import('@/views/error-page/404'))
}
