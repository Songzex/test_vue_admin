<script setup>

</script>

<template>
<div class="yuan">
  <div CLASS="border">
    <div style="width: 15px;height: 15px
"><img src="../../assets/logo2.png " style="width: 25px
"></div>
    <div style="width:  25px;height:  25px;padding-top: 3px"
    ><img src="../../assets/right.png " style="width: 20px
"></div>
    <div style="font-size: 15px ;padding-top: 4px;margin-left: -14px;"><div>你的知识库</div></div>
  </div>
  <div class="two">
    <div class="item">
      <div> <div style="width: 40px;height: 40px
"><img src="../../assets/book.png " style="width: 40px
"></div></div>
      <div class="text"><div>机器学习</div></div>
      <div>
        <div style="width: 40px;height: 40px
"><img src="../../assets/suo.png " style="width: 40px
"></div>
      </div>
      <div><div style="width: 40px;height: 40px
"><img src="../../assets/right.png " style="width: 40px
"></div></div>
    </div>
    <div class="item2">...</div>
  </div>
  <div></div>
  <div></div>

  <div>
    <div></div>
    <div></div>
  </div>
</div>
</template>

<style scoped>
.yuan {
  width: 380px;
  height: 100vh;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  background-color: #fafafa;
  border: #f1f1f1 solid 0.51px;
}
.border{
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: row;
  padding: 23px;
  column-gap: 12px;
}
.two{
  display: grid;
  grid-template-columns: 6fr 4fr;
  .item{
    display: flex;
    flex-direction: row;
    column-gap: 62px;
  }
  .text{
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
  }
}
</style>