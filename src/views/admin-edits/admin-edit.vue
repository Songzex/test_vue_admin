<script setup>
import EditSilder from "@/components/editsilder/editSilder.vue";
import Edit from "@/components/edit/edit.vue";
</script>

<template>
  <div class="admin-edit">
   <div class="sidebar-wrapper">
     <EditSilder></EditSilder>
   </div>
    <div class="header">
    <edit></edit>
    </div>
 </div>
</template>

<style scoped>
.admin-edit{
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 10fr;
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