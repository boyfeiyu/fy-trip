<script setup>
import useHomeStore from "@/stores/modules/home";
import {storeToRefs} from "pinia";
import HouseItemV3 from '@/components/house-item-v3/house-item-v3.vue'
// import HouseItemV9 from '@/components/house-item-v9/house-item-v9'

const homeStore = useHomeStore()
homeStore.fetchHouseList()
const houseList = storeToRefs(homeStore).houseList
</script>

<template>
  <div class="content">
    <h2>热门精选</h2>
    <ul class="house-list">
      <template v-for="(item) in houseList">
        <li>
          <house-item-v9 v-if="item.discoveryContentType === 9" :item="item"/>
          <house-item-v3 v-if="item.discoveryContentType === 3" :item="item"/>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped>

</style>