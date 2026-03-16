
<script setup>
import { useRouter } from 'vue-router'
// 定义路由器实例
const router = useRouter()

// 跳转到编辑页面的方法
const goedit = () => {
  router.push('/edit')
}
</script>
<template>
  <div class="header">
    <div
        @click="goedit()"
        style="display: flex;justify-content: start;align-items: center;padding-top: 0.05rem;padding-left: 0.23rem;column-gap: 0.25rem;
">
      <img src="../../assets/img/a-022-mojito.png" style="width: 0.4rem;height:  0.4rem;border-radius: 0.5rem
">
      <text style="font-size: 0.18rem;width: max-content">开始编辑</text>
    </div>
    <div class="text">
      <div class="list01">
        <div><img src="../../assets/img/a-001-beercan.png" style="width: 0.4rem;height: 0.4rem;border-radius: 0.5rem
"></div>
        <el-dropdown>
  <span class="el-dropdown-link">
    <div style="font-size: 0.18rem;width: 0.55rem">首页</div>
  </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="list01">
        <div><img src="../../assets/img/a-002-milkshake.png" style="width: 0.4rem;height:0.4rem;border-radius:0.5rem
"></div>
        <el-dropdown>
  <span class="el-dropdown-link">
    <div style="font-size: 0.18rem;width: 0.55rem">分类</div>
  </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="list01">
        <div><img src="../../assets/img/a-008-coconutdrink.png "style="width: 0.4rem;height:0.4rem;border-radius:0.5rem
"></div>
        <el-dropdown>
  <span class="el-dropdown-link">
    <div style="font-size: 0.18rem;width: 0.55rem">了解我</div>
  </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="list01">
        <div><img src="../../assets/img/a-017-icedcoffee.png" style="width: 0.4rem;height:0.4rem;border-radius:0.5rem
"></div>
        <el-dropdown>
  <span class="el-dropdown-link">
    <div style="font-size: 0.18rem;width: 0.55rem">AI</div>
  </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="me">
      <div><img src="../../assets/img/a-017-icedcoffee.png" style="width: 0.4rem;height:0.4rem;border-radius:0.5rem
"></div>
      <div style="font-size: 0.18rem;width: max-content">宋在明</div>
      <div>
        <img
            style="border-radius: 100%;width:0.6rem;height: 0.6rem"
            src="https://pic2.zhimg.com/v2-60c254dd8ebe57779d3ba359ff1fc321_r.jpg?source=1940ef5c">
      </div>
    </div>
  </div>
</template>

<style scoped>
.header{
  position: relative;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  z-index: 3; /* 内容层级3（最高，覆盖视频和遮罩） */
  text-align: center;
  background-color: rgba(251, 251, 251,0.8);
  box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.1); /* 添加阴影效果，增强卡片感 */
  width: 100%;
  height: 0.96rem;
  .text{
    display: flex;
    flex-direction:row;
    justify-content: start;
    width: 50%;
    align-items: center;
    padding: inherit;
    font-size: 0.16rem;
    column-gap: 0.24rem;
    border-radius: 0.2rem;
    color: #000000;
    font-family: 'AlimamaFangYuanTiVF-Thin', serif;
    .list01{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding-left: 0.23rem;
      padding-right: 0.23rem;
      padding-top: 0.12rem;
      padding-bottom: 0.12rem;
/*      width: 1.23rem;*/
      border-radius: 0.1rem;
    }
  }
  .me{
    column-gap: 0.23rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 0.23rem;
    padding-right: 0.23rem;
    padding-top: 0.12rem;
    padding-bottom: 0.12rem;
    border-radius: 0.1rem;
  }
}
@media (max-width: 1097px) {
  .header{
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    z-index: 3; /* 内容层级3（最高，覆盖视频和遮罩） */
    text-align: center;
    background-color: rgba(251, 251, 251,0.8);
    box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.1); /* 添加阴影效果，增强卡片感 */
    width: 100%;
    height: 0.96rem;
    .text{
      display: flex;
      flex-direction:row;
      justify-content: start;
      width: 50%;
      align-items: center;
      padding: inherit;
      font-size: 0.16rem;
      column-gap: 0.24rem;
      border-radius: 0.2rem;
      color: #000000;
      font-family: 'AlimamaFangYuanTiVF-Thin', serif;
      .list01{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-left: 0.23rem;
        padding-right: 0.23rem;
        padding-top: 0.12rem;
        padding-bottom: 0.12rem;
        /*      width: 1.23rem;*/
        border-radius: 0.1rem;
      }
    }
    .me{
      column-gap: 0.23rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding-left: 0.23rem;
      padding-right: 0.23rem;
      padding-top: 0.12rem;
      padding-bottom: 0.12rem;
      border-radius: 0.1rem;
    }
  }
}
</style>
