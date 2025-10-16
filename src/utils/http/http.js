// src/utils/http/request.js
import axios from 'axios'
import store from '@/store'

// 定义基础URL
const BASE_URL ='https://scycy/font/api';

// 定义默认请求头
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json;charset=UTF-8'
}

class HttpRequest {
    constructor(baseURL = BASE_URL) {
        this.baseURL = baseURL
        this.pending = new Map() // 存储请求标识和取消函数
    }

    // 获取token的方法
    getToken() {
        // 从Vuex store中获取token
        return store.state.user?.token || localStorage.getItem('token') || ''
    }

    // 创建axios实例
    getInstance() {
        const instance = axios.create({
            baseURL: this.baseURL,
            timeout: 10000,
            headers: { ...DEFAULT_HEADERS }
        })

        // 请求拦截器
        instance.interceptors.request.use(
            config => {
                // 添加请求标识，用于取消重复请求
                const url = `${config.url}&${config.method}&${JSON.stringify(config.params || {})}`
                config.cancelToken = new axios.CancelToken(cancel => {
                    if (!this.pending.has(url)) {
                        this.pending.set(url, cancel)
                    }
                })

                // 添加token到请求头
                const token = this.getToken()
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`
                }

                return config
            },
            error => {
                return Promise.reject(error)
            }
        )

        // 响应拦截器
        instance.interceptors.response.use(
            response => {
                // 请求完成后删除对应的标识
                const url = `${response.config.url}&${response.config.method}&${JSON.stringify(response.config.params || {})}`
                this.pending.delete(url)

                // 根据后端约定处理响应数据
                const res = response.data
                if (res.code === 200) {
                    return res
                } else {
                    // 可以在这里统一处理错误
                    return Promise.reject(res)
                }
            },
            error => {
                // 请求失败也删除对应的标识
                if (error.config) {
                    const url = `${error.config.url}&${error.config.method}&${JSON.stringify(error.config.params || {})}`
                    this.pending.delete(url)
                }
                return Promise.reject(error)
            }
        )

        return instance
    }

    // 取消所有请求
    cancelAllRequest() {
        for (const [, cancel] of this.pending) {
            cancel()
        }
        this.pending.clear()
    }

    // 取消指定请求
    cancelRequest(url) {
        if (this.pending.has(url)) {
            const cancel = this.pending.get(url)
            cancel()
            this.pending.delete(url)
        }
    }

    // GET请求
    get(url, params = {}, config = {}) {
        return this.getInstance().get(url, {
            params,
            ...config
        })
    }

    // POST请求
    post(url, data = {}, config = {}) {
        return this.getInstance().post(url, data, config)
    }

    // PUT请求
    put(url, data = {}, config = {}) {
        return this.getInstance().put(url, data, config)
    }

    // DELETE请求
    delete(url, config = {}) {
        return this.getInstance().delete(url, config)
    }
}

// 创建默认实例
const http = new HttpRequest(BASE_URL)

export default http

// 导出getToken方法