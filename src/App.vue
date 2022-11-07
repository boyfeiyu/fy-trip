<script setup>
import TabBar from './components/tab-bar/tab-bar.vue'
import {useRoute} from 'vue-router'

import Loading from "@/components/loading/loading.vue";

const route = useRoute()
</script>
<template>
  <div class="app">
    <RouterView/>
    <TabBar v-show="!route.meta.hiddenTabbar"/>
    <Loading/>
  </div>
</template>
<style lang="less" scoped>
.app {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

:root {
  --primary-color: #ff9854;
}
</style>
