<script setup>
import { getMenuList, login } from '@/utils/http/login/index.js';
import {onMounted} from "vue";
// 调用获取菜单列表
const fetchMenuList = async () => {
  try {
    //const res = await getMenuList()
    const res =  getMenuList()
    console.log('菜单列表:', res)
  } catch (error) {
    console.error('获取菜单失败:', error)
  }
}

// 调用登录接口
const handleLogin = async (loginData) => {
  try {
    //const res = await login(loginData)
   // localStorage.setItem('token', res.data.token)
    await fetchMenuList();
    console.log('登录结果:', res)
  } catch (error) {
    console.error('登录失败:', error)
  }
}
onMounted(async () => {
  await handleLogin({
    username: 'admin',
    password: '123456'
  })
})
</script>

<template>

</template>

<style scoped>

</style>