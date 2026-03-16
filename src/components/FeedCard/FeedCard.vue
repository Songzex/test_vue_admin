<script>
export default {
  name: "FeedCard",
  methods:{
    goDetils (){
      this.$router.push({
        path: '/details'
      })
    }
  }
}
</script>

<template>
<div class="feedCard" @click="goDetils()">
  <div class="row1">
    <div class="abc">前端</div>
    <div class="dates">2023-06-15</div>
  </div>
  <div class="row2">欢迎来到Century论坛！新用户必读</div>
  <div class="row3">
    <div class="side1" >
      <img
          style="width: 51px;height: 50px;border-radius: 100%"
          src="../../assets/img/toux.png">
    </div><!--侧1-->
    <div class="side2"><!--侧2-->
      <div class="side22"><!--侧colum-->
        欢迎各位加入Century论坛大家庭！本文将介绍论
        坛的使用规则、功能特点以及如何快速融入社区...
        ，以及如何解决常见的布局问题...
      </div>
      <div class="botinf"><!--测底部-->
        <div class="botinfs">
              <div style="color: #096dd9">
                <text>浏览量：1.2k</text>
              </div>
                 <div style="color: #b74fbf">
                   <text>赞 1.2k</text>
                 </div>
                 <div style="color: #387867">
                   <text>评论 1.2k</text>
                 </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.feedCard {
  border-radius: 10px;
 /* width: 423px;*/
  width: max-content;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(251, 251, 251,0.8);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); /* 添加阴影效果，增强卡片感 */
  .row1{
    width: max-content;
    .abc{
      width: max-content;
      background-color: #d3c148;
      padding: 1px 1px 1px 1px;
      border-radius: 15px;
    }
    .dates{
      width: max-content;
      background-color: #d3c148;
      padding: 1px 1px 1px 1px;
      border-radius: 15px;
    }
    column-gap: 23px;
    display: flex;
    flex-direction: row;
  }
  .row2{
    display: flex;
    font-size: 18px;
    font-weight: bold;
  }
  .row3{
    display: grid;
    column-gap: 3px;
    align-items: start;
    .side2{
      display: flex;
      flex-direction: column;
      .side22{
        padding-left: 1rem;
        padding-right: 1rem;
        width: 21rem;
        flex-wrap: wrap;
      }
    }

    .botinf{
      width: max-content;
      align-content: space-evenly;
      display: flex;
      padding: 1rem;
    }
    .botinfs{
      display: flex;
      justify-content: center;
      align-content: center;
      column-gap: 3rem;
      width: max-content;
      flex-wrap: wrap;

    }

  }
}
</style>
