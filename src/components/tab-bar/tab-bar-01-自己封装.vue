<script setup>
import tabbarData from '@/assets/data/tabbar'
import { getAssetURL } from '@/utils/get_asset.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const currentIndex = ref(0)
const itemClick = index => {
  currentIndex.value = index
  router.push(tabbarData[index].path)
}
</script>

<template>
  <div class="tab-bar">
    <template v-for="(tabbarItem, index) in tabbarData" :key="index">
      <div class="tab-bar-item" :class="{ active: index === currentIndex }" @click="itemClick(index)">
        <img v-if="currentIndex !== index" :src="getAssetURL(tabbarItem.img)" />
        <img v-else :src="getAssetURL(tabbarItem.imgActive)" />
        <p>{{ tabbarItem.text }}</p>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  background-color: #ececec;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid#d4d4d4;
  cursor: pointer;
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    &.active {
      color: #ff9854;
    }
    img {
      width: 32px;
    }
    p {
      font-size: 12px;
      color: #646464;
    }
  }
}
</style>
