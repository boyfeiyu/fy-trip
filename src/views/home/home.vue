<script setup>
import HomeNavbar from './cpns/home-navbar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import HomeBanner from './cpns/home-banner.vue'
import HomeCategories from './cpns/home-categories.vue';
import HomeContent from './cpns/home-content.vue';
import useScroll from '@/hooks/useScroll'
import {ref} from "vue";
import {watch} from "vue";
import useHomeStore from "@/stores/modules/home";

const homeStore = useHomeStore()
// 监听滚动到底部
const homeRef = ref()
const {isReachBottom, scrollTop} = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseList().then(
        () => {
          isReachBottom.value = false
        }
    )
  }

})
</script>

<template>
  <div class="home" ref="homeRef">
    <home-navbar/>
    <home-banner/>
    <home-search-box/>
    <home-categories/>
    <home-content/>
    <button>点击加载更多</button>
  </div>
</template>


<style lang="less" scoped>
.home {
  height: calc(100vh);
  overflow-y: auto;

  //&::-webkit-scrollbar {
  //  display: none
  //}

  padding-bottom: 60px;

}
</style>
