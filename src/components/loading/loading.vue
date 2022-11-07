<script setup>
import {useMainStore} from "@/stores/modules/main";

const mainStore = useMainStore()

console.log(mainStore.isLoading)
</script>

<template>
  <div class="loading" v-if="mainStore.isLoading">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
.loading {
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  //background-color: rgba(0, 0, 0, .5);

  .bg {
    width: 140px;
    height: 140px;
    background: url("@/assets/img/home/loading-bg.png") no-repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 95px;
      margin-bottom: 10px;
    }

  }

}
</style>