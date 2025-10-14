// src/hooks/useTheme.js
import { reactive } from 'vue'

// 主题配置
const themeConfig = {
    // 菜单主题
    menuBg: '#304156',
    menuText: '#aea7a7',
    menuActiveText: '#e0ebed',

    // 侧边栏主题
    sidebarBg: '#2b2f3a',
    sidebarText: '#bfcbd9',
    sidebarActiveText: '#c0d3fd',

    // 头部主题
    headerBg: '#ffffff',
    headerText: '#303133',
    headerBorder: '#d8dce5'
}

export function useTheme() {
    // 使用 reactive 创建响应式主题对象
    const theme = reactive({
        ...themeConfig
    })

    // 切换主题的方法（可选）
    const toggleTheme = (newTheme) => {
        Object.assign(theme, newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}
