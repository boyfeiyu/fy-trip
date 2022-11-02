<script setup>
import TabBar from './components/tab-bar/tab-bar.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
  <div class="app">
    <RouterView />
    <TabBar v-show="!route.meta.hiddenTabbar" />
  </div>
</template>
<style lang="less" scoped>
.app {
  position: fixed;
  width: 100%;
  height: 100%;
}
:root {
  --primary-color: #ff9854;
}
</style>
