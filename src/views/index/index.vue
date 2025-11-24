<script setup>
import UserCard from "@/components/usercard/UserCard.vue";
import FeedType from "@/components/FeedType/feedType.vue";
import FriendlyCard from "@/components/usercard/FriendlyCard.vue";
import TagsCard from "@/components/usercard/TagsCard.vue";
import LunBoTu from "@/components/mainpro/LunBoTu.vue";
</script>

<template>
  <div class="index-container">
    <div class="headerr">
      <div style="display: flex;justify-content: start;align-items: center;padding-top: 5px;padding-left: 23px;column-gap: 25px;
">
        <img src="../../assets/img/a-022-mojito.png" style="width: 40px;height: 40px;border-radius: 50px
">
      </div>
      <div class="text">
        <div class="list01">
          <div><img src="../../assets/img/a-001-beercan.png" style="width: 40px;height: 40px;border-radius: 50px
"></div>
          <div style="font-size: 18px">首页</div>
        </div>

        <div class="list01">
          <div><img src="../../assets/img/a-002-milkshake.png" style="width: 40px;height: 40px;border-radius: 50px
"></div>
          <div style="font-size: 18px">分类</div>
        </div>
        <div class="list01">
          <div><img src="../../assets/img/a-008-coconutdrink.png " style="width: 40px;height: 40px;border-radius: 50px
"></div>
          <div style="font-size: 18px">了解</div>
        </div>
        <div class="list01">
          <div><img src="../../assets/img/a-017-icedcoffee.png" style="width: 40px;height: 40px;border-radius: 50px
"></div>
          <div style="font-size: 18px">AI</div>
        </div>
      </div>
      <div class="me">
        <div><img src="../../assets/img/a-017-icedcoffee.png" style="width: 40px;height: 40px;border-radius: 50px
"></div>
        <div style="font-size: 18px">我的</div>
      </div>
    </div>
 <div class="list">
   <div class="block01">
     <UserCard></UserCard>
     <feed-type></feed-type>
     <TagsCard></TagsCard>
     <FriendlyCard></FriendlyCard>
   </div>
   <div class="block02">
    <LunBoTu></LunBoTu>
   </div>
   <div class="block03">
     <LunBoTu></LunBoTu>
     <LunBoTu></LunBoTu>
     <LunBoTu></LunBoTu>
   </div>
 </div>
  </div>
</template>

<style scoped>
/* 屏幕宽度小于或等于600px时应用的样式 */
/* 屏幕宽度大于 1024px 时的样式 */
@media screen and (max-width: 768px) {
  .list{
    margin-top: 2%;
    margin-left: 13%;
    margin-right: 13%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    column-gap: 1.53rem;
    align-items: start;
    .block01{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 2.23rem;
      height: auto;
    }
    .block02{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 2.23rem;
      height: auto;
    }
    .block03{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 2.23rem;
      height: auto;
    }
  }
}
/* 屏幕宽度在 768px 到 1024px 之间时的样式 */
/* 屏幕宽度小于 768px 时的样式 */
.me{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 0.23rem;
  padding-right: 0.23rem;
  padding-top: 0.12rem;
  padding-bottom: 0.12rem;
  border-radius: 10px;
}
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
  background-image: url("src/assets/bgg02.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  .headerr{
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    z-index: 3; /* 内容层级3（最高，覆盖视频和遮罩） */
    text-align: center;
    background-color: rgba(251, 251, 251,0.8);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); /* 添加阴影效果，增强卡片感 */
    width: 100%;
    height: 76px;
    .text{
      display: flex;
      flex-direction:row;
      justify-content: start;
      width: 30%;
      align-items: center;
      padding: inherit;
      font-size: 16px;
      column-gap: 24px;
      border-radius: 20px;
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
        //background-color: #fafafa;
        border-radius: 10px;
      }
    }
  }
  .im{
    text-align: center;
    width: 100%;
    height: 400px;
  }
  .list{
    margin-top: 2%;
    margin-left: 13%;
    margin-right: 13%;
    display: grid;
    grid-template-columns: 2fr 6fr 2fr;
    justify-content:space-around;
    column-gap: 1.53rem;
    align-items: start;
    .block01{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 2.23rem;
      height: auto;
    }
    .block02{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 2.23rem;
      height: auto;
    }
    .block03{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 2.23rem;
      height: auto;
    }
  }
}
</style>