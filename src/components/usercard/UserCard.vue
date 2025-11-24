<template>
<div class="userCard" :style="{ '--bg-opacity': backgroundOpacity }">
  <div  class="row1">
    <div class="img">
    <img
        style="border-radius: 50%;width: 100%;height: 100%"
        src="https://pic2.zhimg.com/v2-60c254dd8ebe57779d3ba359ff1fc321_r.jpg?source=1940ef5c">
    </div>
    <div class="name">宋在明</div>
  </div>
  <div  class="row2">
    <div>
      <div>帖子</div>
      <div>23</div>
    </div>

    <div>
      <div>关注</div>
      <div>23</div>
    </div>

    <div>
      <div>粉丝</div>
      <div>999</div>
    </div>
  </div>
  <div class="row3">
    <el-button  type="primary" style="width: 98%;">发布帖子</el-button>
  </div>

</div>
</template>

<script setup>
// 定义 props，用于控制背景透明度 (0-1之间, 0表示完全透明，1表示完全不透明)
const props = defineProps({
  backgroundOpacity: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
.userCard{
  width: 18.5rem;
  height:12.2rem;
  display: flex; /* 改为flex布局 */
  flex-direction: column; /* 垂直排列子元素 */
  row-gap: 1rem; /* 现在row-gap会生效 */
  padding: 1rem;
  /* 使用 CSS 变量控制背景透明度 */
  border-radius: 15%;
  background-color: rgba(251, 251, 251,0.8);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); /* 添加阴影效果，增强卡片感 */
  
  /* 添加过渡动画效果 */
  transition: all 0.3s ease;
  transform: translateY(0);
  
  .row1{
    display: flex;
    align-items: center;
    flex-direction: row;
    column-gap: 10px;
    justify-content: start;
    .img{
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
  .row2{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 0.25rem;
    align-items: center;
  }
  .row3{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/* 添加鼠标悬停效果，营造起伏感 */
.userCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px 5px rgba(0, 0, 0, 0.2);
}
</style>