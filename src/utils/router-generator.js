

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

    console.log('转换后的路由配置:', routes)
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
        name: menu.name ? menu.name.replace(/\s/g, '') : `menu_${menu.menuId}`, // 去除空格作为路由名称
        meta: {
            title: menu.name || '', // 菜单名称
            icon: menu.icon || '',  // 菜单图标
            menuId: menu.menuId, // 菜单ID
            perms: menu.perms || '' // 权限标识
        },
        children: [] // 子路由
    }

    // 处理子菜单
    if (menu.list && menu.list.length > 0) {
        menu.list.forEach(childMenu => {
            const childRoute = convertMenuToRoute(childMenu)
            if (childRoute) {
                // 确保子路由路径正确
                if (!childRoute.path.startsWith('/')) {
                    childRoute.path = route.path + '/' + childRoute.path
                }
                route.children.push(childRoute)
            }
        })
    }

    // 目录类型菜单(type=0)通常作为路由容器，需要组件
    if (menu.type === 0) {
        // 如果有子路由，使用布局组件作为容器
        if (route.children.length > 0) {
            // 使用布局组件作为容器
            route.component = () => import('@/layout/index.vue')
            // 如果目录只有一个子路由，设置重定向
            if (route.children.length === 1) {
                route.redirect = route.children[0].path
            }
        } else {
            // 没有子路由则不生成路由
            return null
        }
    } else if (menu.type === 1) {
        // 菜单项类型(type=1)需要具体组件
        route.component = getComponentByUrl(menu.url)
    }

    // 如果没有组件则不生成路由
    if (!route.component) {
        console.warn('路由缺少组件:', route)
        return null
    }

    console.log('生成路由:', route)
    return route
}

/**
 * 根据URL匹配对应的组件
 * 这里需要根据实际项目的组件路径进行映射
 */
function getComponentByUrl(url) {
    if (!url) {
        console.warn('URL为空，无法映射组件')
        return null
    }

    console.log('尝试映射组件URL:', url)

    // 组件路径映射表
    const componentMap = {
        'login/index': () => import('@/views/login/index.vue'),
        '404/index': () => import('@/views/404/index.vue'),
        'dashboard': () => import('@/views/dashboard/index.vue'),
        'index': () => import('@/views/index/index.vue'),
        'admin': () => import('@/views/admin/index.vue')
    }

    // 尝试精确匹配
    if (componentMap[url]) {
        console.log('找到组件映射:', url)
        return componentMap[url]
    }

    // 尝试模糊匹配（去掉可能的文件扩展名）
    const cleanUrl = url.replace('.vue', '').replace('.js', '')
    if (componentMap[cleanUrl]) {
        console.log('找到组件映射(清理后):', cleanUrl)
        return componentMap[cleanUrl]
    }

    // 特殊处理：如果URL中包含 '404' 字样
    if (url.includes('404')) {
        console.log('检测到404相关URL，映射到404页面:', url)
        return () => import('@/views/404/index.vue')
    }

    console.warn('未找到组件映射，使用默认404页面:', url)
    // 默认返回404页面
    return () => import('@/views/404/index.vue')
}