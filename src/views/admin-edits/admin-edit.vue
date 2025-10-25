<script setup>
import EditSilder from "@/components/editsilder/editSilder.vue";
</script>

<template>
  <div class="admin-edit">
   <div class="sidebar-wrapper">
     <EditSilder></EditSilder>
   </div>
    <div class="header"></div>
 </div>
</template>

<style scoped>
.admin-edit{
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 6fr;
}
.sidebar-wrapper {
  justify-self: start;
}
.header{
  width: 100%;
  height: 100%;
  background-color: #fbfbfb;
}
</style>