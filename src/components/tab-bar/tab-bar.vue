<script setup>
import tabbarData from '@/assets/data/tabbar'
import { getAssetURL } from '@/utils/get_asset.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const currentIndex = ref(0)
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(tabbarItem, index) in tabbarData">
        <van-tabbar-item :to="tabbarItem.path">
          <span>{{ tabbarItem.text }}</span>
          <template #icon="props">
            <img :src="props.active ? getAssetURL(tabbarItem.imgActive) : getAssetURL(tabbarItem.img)" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped></style>
