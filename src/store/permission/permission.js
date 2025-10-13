import { getMenuList } from '@/api/menu' // 假设这个接口获取菜单列表
import { addDynamicRoutes, resetRouter } from '@/router'

const state = {
    menuList: [], // 原始菜单列表
    routes: [], // 所有路由
    addRoutes: [] // 动态添加的路由
}

const mutations = {
    SET_MENU_LIST: (state, menuList) => {
        state.menuList = menuList
    },
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = [...state.routes, ...routes]
    }
}

const actions = {
    /**
     * 获取菜单列表并生成动态路由
     */
    generateRoutes({ commit }) {
        return new Promise(async (resolve, reject) => {
            try {
                // 1. 从后端获取菜单列表
                const { data } = await getMenuList()
                commit('SET_MENU_LIST', data)

                // 2. 生成并添加动态路由
                const dynamicRoutes = addDynamicRoutes(data)

                // 3. 更新路由状态
                commit('SET_ROUTES', dynamicRoutes)

                resolve(dynamicRoutes)
            } catch (error) {
                reject(error)
            }
        })
    },

    /**
     * 退出登录时重置路由和菜单
     */
    resetPermission({ commit }) {
        return new Promise(resolve => {
            resetRouter()
            commit('SET_MENU_LIST', [])
            commit('SET_ROUTES', [])
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
