<template>
  <div class="home">
    <home-navbar />
    <home-banner />
    <home-search-box />
  </div>
</template>

<script setup>
import HomeNavbar from './cpns/home-navbar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import HomeBanner from './cpns/home-banner.vue'
</script>

<style lang="less" scoped>
.home {}
</style>
