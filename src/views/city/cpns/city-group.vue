<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router'
import { useCityStore } from '@/stores/modules/city.js'
const router = useRouter()
const cityStore = useCityStore()
const props = defineProps({
  groupData: {
    type: Object,
    default: () => { return {} }
  }
})
const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list
})

// 城市的点击与回显
const cityClick = (city) => {
  cityStore.currentCity = city
  router.back()
}
</script>

<template>
  <div class="city-group">

    <van-index-bar :index-list="indexList">
      <!-- 热门数据 -->
      <van-index-anchor index="热门" />
      <div class="hot-group">
        <template v-for="(cityItem, index) in groupData?.hotCities">
          <div class="hot-item" @click="cityClick(cityItem)"> {{ cityItem.cityName }}</div>
        </template>
      </div>
      <!-- 城市数据 -->
      <template v-for="(groupItem, index) in groupData?.cities">
        <van-index-anchor :index="groupItem.group" />
        <template v-for="(cityItem, indey) in groupItem.cities">
          <van-cell :title="cityItem.cityName" @click="cityClick(cityItem)" />
        </template>
      </template>
    </van-index-bar>

  </div>
</template>

<style lang="less" scoped>
.hot-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
  padding-right: 20px;
  .hot-item {
    display: block;
    width: 70px;
    height: 28px;
    margin: 6px;
    border-radius: 14px;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    font-size: 12px;
  }
}
</style>
