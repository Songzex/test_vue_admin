<script setup>
</script>

<template>
  <div class="index-container">

    <div class="im">
      <video autoplay loop muted playsinline>
        <source src="../../assets/bea.mp4" type="video/mp4">
        <!-- 可选：添加其他格式视频作为兼容 -->
        <source src="../../assets/bea.mp4" type="video/webm">
      </video>
      <!-- 上部分虚化遮罩 -->
      <div class="mask top-mask"></div>
      <!-- 下部分虚化遮罩 -->
      <div class="mask bottom-mask"></div>
<!--    </div>-->
    </div>
    <div class="headerr">
      <div style="display: flex;justify-content: start;align-items: center;padding-top: 15px;padding-left: 23px;column-gap: 25px;
">
        <img src="../../assets/logo2.png" style="width: 40px;height: 40px;border-radius: 50px
">
        <div class="text">泽熙小站</div>
      </div>

    </div>
 <div class="list">
   <div>——推荐文章列表</div>
   <div>——技术文章列表</div>
   <div>——学习文章列表</div>
   <div>——潜力文章列表</div>
 </div>
  </div>
</template>

<style scoped>
.im {
  /* 容器设置为相对定位，作为视频的定位参考 */
  position: relative;
  width: 100%; /* 容器宽度（可根据需求调整，如固定值） */
  height: 400px
; /* 容器高度（100vh 表示占满整个视口高度） */
  overflow: hidden; /* 隐藏超出容器的部分 */
}

.im video {
  /* 绝对定位使视频脱离文档流，铺满容器 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* 内容层级3（最高，覆盖视频和遮罩） */
  /* 保证视频比例不变的情况下填满容器（可能会裁剪边缘） */
  object-fit: cover;
}
/* 虚化遮罩基础样式 */
.mask {
  position: absolute;
  width: 100%;
  /* 遮罩高度（可调整，这里设为15%视口高度） */
  height: 15vh;
  pointer-events: none; /* 让遮罩不影响鼠标交互（如点击视频下方内容） */
}

/* 上部分遮罩：从透明渐变到半透明黑色 */

.index-container {
  margin: 0 auto;
  padding: 0;
  .headerr{
    z-index: 3; /* 内容层级3（最高，覆盖视频和遮罩） */
    text-align: center;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, rgb(231, 244, 216), transparent);
    .text{
      padding: inherit;
      font-size: 36px;
      color: #919191;
      font-family: 'AlimamaFangYuanTiVF-Thin', serif;
    }
  }
  .im{
    text-align: center;
    width: 100%;
    height: 400px;
  }
  .list{
    padding-left: 633px;
    display: flex;
    flex-direction: column;
    justify-content:  center;
    align-items: start;
    row-gap: 134px;
  }
}
</style>