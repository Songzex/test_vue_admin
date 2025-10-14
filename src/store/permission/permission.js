import { getMenuList } from '@/utils/http/login/index.js'
import { addDynamicRoutes, resetRouter } from '@/router'

const state = {
    menuList: [],
    routes: [],
    addRoutes: []
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
    async generateRoutes({ commit }) {
        try {
            // 1. 从后端获取菜单列表
            const { data } = await getMenuList()
            console.log('菜单列表获取成功：', data)

            if (!data || !data.length) {
                throw new Error('菜单列表获取失败')
            }

            commit('SET_MENU_LIST', data)

            // 2. 生成并添加动态路由
            const dynamicRoutes = addDynamicRoutes(data)

            // 3. 更新路由状态
            commit('SET_ROUTES', dynamicRoutes)

            return dynamicRoutes
        } catch (error) {
            console.error('生成路由失败:', error)
            throw error
        }
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
