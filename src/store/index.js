// store/index.js
import { createStore } from 'vuex'
import permission from './permission/permission'

const store = createStore({
    state() {
        return {
            app: {
                sidebarCollapse: false
            }
        }
    },
    mutations: {
        // 添加修改侧边栏状态的mutation
        TOGGLE_SIDEBAR_COLLAPSE(state) {
            state.app.sidebarCollapse = !state.app.sidebarCollapse
        }
    },
    actions: {
        toggleSidebarCollapse({ commit }) {
            commit('TOGGLE_SIDEBAR_COLLAPSE')
        }
    },
    modules: {
        permission // 注册permission模块
    }
})

export default store
