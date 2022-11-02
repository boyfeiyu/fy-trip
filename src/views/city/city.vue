<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useCityStore } from '@/stores/modules/city.js'
import { storeToRefs } from 'pinia'
import cityGroup from './cpns/city-group.vue'
// 搜索框
const router = useRouter()
const onSearchCancelClick = () => {
  router.back()
}
const searchValue = ref("")

// 城市数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// tab数据
const tabActive = ref()

// content

</script>

<template>
  <div class="city">
    <div class="top">
      <!-- 搜索框 -->
      <van-search v-model="searchValue" shape="round" show-action placeholder="城市/区域/位置"
        @cancel="onSearchCancelClick" />
      <!-- tab -->
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <!-- 城市内容区 -->
    <div class="content">
      <template v-for="(group, key, index) in allCities">
        <city-group v-show="tabActive === key" :groupData="group" />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.top {
  position: relative;
  z-index: 9;
}

.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>
