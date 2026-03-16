<script setup>
import UserCard from "@/components/usercard/UserCard.vue";
import FeedType from "@/components/FeedType/feedType.vue";
import FriendlyCard from "@/components/usercard/FriendlyCard.vue";
import TagsCard from "@/components/usercard/TagsCard.vue";
import LunBoTu from "@/components/mainpro/LunBoTu.vue";
import FeedCard from "@/components/FeedCard/FeedCard.vue";
import IndexHeader from "@/components/indexHeader/IndexType.vue";
</script>

<template>
  <div class="index-container">
    <IndexHeader></IndexHeader>
   <div class="list">
    <div class="im">
      <div class="item">
        <UserCard></UserCard>
<!--        <FriendlyCard></FriendlyCard>-->
        <UserCard></UserCard>
      </div>
      <div class="item">
<!--        <FeedType></FeedType>-->
        <UserCard></UserCard>
        <div style="display: flex;flex-direction: row;column-gap: 1.0rem;flex-wrap: wrap;row-gap: 1.2rem">
<!--         <div>
           <FeedCard></FeedCard>
         </div>
          <div>
            <FeedCard></FeedCard>
          </div>
          <div>
            <FeedCard></FeedCard>&lt;!&ndash;页面是100%的时候 这个和我这找一部分看不见&ndash;&gt;
          </div>
          <div>
            <FeedCard></FeedCard>&lt;!&ndash;页面是100%的时候 这个和我这找一部分看不见&ndash;&gt;
          </div>
          <div>
            <FeedCard></FeedCard>&lt;!&ndash;页面是100%的时候 这个和我这找一部分看不见&ndash;&gt;
          </div>-->
        </div>
      </div>
      <div class="item">
        <UserCard></UserCard>
<!--        <UserCard></UserCard>
        <FriendlyCard></FriendlyCard>-->
      </div>
    </div>
     <div style="margin-bottom: 12rem"></div>
   </div>
  </div>
</template>

<style >


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
/* 上部分遮罩：从透明渐变到半透明黑色 */

.index-container {
  width: 100%;
/*  //max-width: 1920px;
  //min-width: auto;*/
  margin: 0 auto;
  background-image: url("src/assets/bgg02.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: auto;
  .list{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    height: 100vh;
    margin-top: 1.2rem;
    margin-left: 12%;
    margin-right: 12%;
  .im{
    display: grid;
    height: 100vh;
    overflow-y: auto; /* 改为auto而非hidden */
    column-gap: 0.1rem;
    grid-template-columns: 1fr 8fr 1fr;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
    .item{
      column-gap: 1.2rem;
      row-gap: 1.0rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
    }
  }
  }
}
@media (max-width: 1097px) {
  /* 全局通用样式：比如减小全局内边距 */
  .index-container {
    .list{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
      height: 100vh;
      .im{
        width: 100%;
        display: flex;
        justify-content: start;
        align-content: center;
        flex-wrap: wrap;
        height: 100vh;
        overflow-y: auto; /* 改为auto而非hidden */
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE/Edge */
        .item{
          column-gap: 1rem;
          row-gap: 0.2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
        }
      }
    }
  }
}
</style>
