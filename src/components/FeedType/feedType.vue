<template>
  <div class="userCard">
    <div  class="row1">
        <i class="iconfont icon-haha"></i>
      <div class="name">全部类别</div>
    </div>
    <div  class="row2">
      <div class="r1">
        <div class="rr1">
          <i class="iconfont icon-haha"></i>
          <div>我的实时帖子AAAAAA</div>
        </div>
        <div>23</div>
      </div>

      <div class="r1">
        <div class="rr1">
          <i class="iconfont icon-haha"></i>
          <div>我的实时帖子AAAAAA</div>
        </div>
        <div>23</div>
      </div>

      <div class="r1">
        <div class="rr1">
          <i class="iconfont icon-haha"></i>
          <div>我的实时帖子AAAAAA</div>
        </div>
        <div>23</div>
      </div>
    </div>
  </div>
</template>

<script setup>


</script>

<style scoped>
.userCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px 5px rgba(0, 0, 0, 0.2);
}
.userCard{
  width: 18.5rem;
  height:12.2rem;
  display: flex; /* 改为flex布局 */
  flex-direction: column; /* 垂直排列子元素 */
  row-gap: 1rem; /* 现在row-gap会生效 */
  padding: 1rem;
  border-radius: 15%;
  transition: all 0.3s ease;
  transform: translateY(0);
  background-color: rgba(251, 251, 251, 0.8);
  box-shadow: 0 2px 12px 0 rgba(14, 14, 14, 0.1); /* 添加阴影效果，增强卡片感 */

  /* 添加过渡动画效果 */
  transition: all 0.3s ease;
  transform: translateY(0);

  .row1{
    display: flex;
    align-items: center;
    flex-direction: row;
    column-gap: 10px;
    justify-content: start;
    align-items: center;
    .img{
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
  .row2{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 13px;
    align-items: center;
  }
  .r1{
    display: flex;
    width: 100%;
    justify-content: space-around;
    felx-direction: row;
    .rr1{
      display: flex;
      justify-content: space-around;
      align-items: center;
      column-gap: 0.25rem;
    }
  }

}
</style>