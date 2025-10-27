<script setup>

</script>

<template>
<div class="yuan">
  <div CLASS="border">
    <div style="width: 10px;height: 10px
"><img src="../../assets/logo2.png " style="width: 25px
"></div>
    <div style="width:  25px;height:  25px;padding-top: 3px"
    ><img src="../../assets/right.png " style="width: 20px
"></div>
    <div style="font-size: 15px ;padding-top: 4px;margin-left: -14px;"><div>你的知识库</div></div>
  </div>
  <div class="two">
    <div class="item">
      <div ><img
          style="width: 25px;height: 25px; padding-top: 8px;
" src="../../assets/logobook.png " ></img></div>
      <div class="text">机器学习</div>
      <div>
        <div ><img
            style="width: 20px;height: 20px;
             padding: 10px;
"src="../../assets/suo.png"></div>
      </div>
    </div>
    <div class="item2">
      <div><img
          style="width: 20px;height: 20px;
          padding: 13px;
          padding-left: -62px
          ;
"src="../../assets/right.png " ></div><img
        style="width: 20px;height: 20px;
        padding: 10px;
        padding-left: -62px;
"
        src="../../assets/more1.png"></div>
  </div>
  <div class="three">
   <div class="input">
     <div style="display: flex;flex-direction: row;align-items: start;padding-left: 23px;
     padding-top: 8px;
     column-gap: 23px;
">
       <div><img
           style="width: 25px;height: 25px;"
           src="../../assets/searecxh.png"></div>
       <div style="color: #b7c4d8">搜索</div>
     </div>
   </div>
    <div class="add"><img
        style="width: 20px;height: 20px;"
        src="../../assets/add.png"></div>
  </div>
  <div class="four">
    <div style="display: flex;flex-direction: row;column-gap: 23px
">
      <div><img
          style="width:20px;
          height: 20px;"
          src="../../assets/mulv.png "></div>
      <div>目录</div>
    </div>
    <div style="display: flex;flex-direction: row;column-gap: 23px">
      <div>目录</div>
      <div>目录</div>
    </div>
  </div>
</div>
</template>

<style scoped>
.four{
  display: flex;
  padding-top: 16px;
  column-gap: 122px;
  align-items: center;
 justify-content: space-around;
}
.three{
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  width: 90%;
  padding-left: 20px;
  .input{
    width: 300px;
    height: 38px;
    background-color: #f3f3f3;
    border-radius: 12px;
    border: #b3c0d1 1px solid;
  }
  .add{
    width: 38px;
    height: 15px;
    padding: 10px 0px 14px 13px;
    background-color: #fafafa;
    border-radius: 12px
  ;
    border: #b3c0d1 1px solid;
  }
}
.yuan {
  width: 380px;
  height: 100vh;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  row-gap: 23px;
  background-color: #fafafa;
  border: #f1f1f1 solid 0.51px;
}
.border{
  margin-top: 23px;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: row;
  padding-left: 23px;
  column-gap: 12px;
}
.two{
  display: grid;
  grid-template-columns: 6fr 4fr;
  padding-left: 23px;
  padding-top: 13px;
  .item{
    display: flex;
    flex-direction: row;
  }
  .text{
    padding: 10px;
    width: max-content;
    display: flex;
    font-size: 16px;
    justify-content: start;
    align-items: start;
    flex-direction: column;
  }
}
.item2{
  display: flex;
  column-gap: 65px;
  justify-content: start;
  align-items: start;
  flex-direction: row;

}
</style>