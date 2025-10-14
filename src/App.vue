// 修改 App.vue 文件
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Sidebar from './components/silder/index.vue'
import layout from './layout/index.vue'
import {onMounted} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
const store = useStore()
const route = useRoute()
import { getMenuList } from '@/utils/http/login/index.js'

// 确保在组件挂载时获取菜单列表
onMounted(async () => {
  try {
    const res = await getMenuList();
    // 使用 commit 更新状态
    store.commit('permission/SET_ROUTES', res);
    console.log('菜单列表:', res)
  } catch (error) {
    console.error('获取菜单失败:', error)
  }
})
</script>

<template>
  <layout>
<!--    <header>-->
<!--      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->

<!--      <div class="wrapper">-->
<!--        <HelloWorld msg="You did it!" />-->
<!--      </div>-->
<!--    </header>-->

    <Sidebar></Sidebar>

<!--    <main>
      <TheWelcome />
    </main>-->
  </layout>
</template>
