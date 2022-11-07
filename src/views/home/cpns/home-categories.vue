<script setup>
import {storeToRefs} from 'pinia';
import useHomeStore from '../../../stores/modules/home';

const homeStore = useHomeStore()
homeStore.fetchCategories()
const categories = storeToRefs(homeStore).categories
</script>

<template>
  <div class="home-categories">
    <ul class="categories">
      <template v-for="(item, index) in categories" :key="item.id">
        <li class="item">
          <img :src="item.pictureUrl">
          <div class="title">{{ item.title }}</div>
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  margin-top: 10px;
  padding-left: 15px;

  &::-webkit-scrollbar {
    display: none
  }

  .item {
    flex-shrink: 0;
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    img {
      width: 44px;
      height: 44px;
    }
  }
}
</style>
