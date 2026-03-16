<script>
import IndexHeader from "@/components/indexHeader/IndexType.vue";

export default {
  name: "FeedDetils",
  components: {IndexHeader}
}
</script>

<template>
<index-header></index-header>
  <div class="feedDetils">
    <div class="row1">
      <div class="abc">前端</div>
      <div class="dates">2023-06-15</div>
    </div>
    <div class="row2">欢迎来到Century论坛！新用户必读</div>
    <div class="row3">
      <div class="side1" >
        <img
            style="width: 51px;height: 50px;border-radius: 100%"
            src="../../assets/img/toux.png"></img>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feedDetils{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>