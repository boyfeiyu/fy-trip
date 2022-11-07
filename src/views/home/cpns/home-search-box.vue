<script setup>
import {useRouter} from 'vue-router'
import {useCityStore} from '@/stores/modules/city.js'
import {storeToRefs} from 'pinia';
import {computed, ref} from "vue";
import {formatMMDD} from "@/utils/format_date";
import dayjs from "dayjs";
import useHomeStore from "@/stores/modules/home";

const router = useRouter()
const cityClick = () => {
  router.push('/city')
}
// 当前城市
const cityStore = useCityStore()
const currentCity = storeToRefs(cityStore).currentCity

// 热门建议数据
// const homeStore = useHomeStore()

// 日期选择
const showCalendar = ref(false)
const startDate = ref(new Date())
const endDate = ref(new Date().setDate(startDate.value.getDate() + 1))
const diffDay = computed(() => {
  return dayjs(endDate.value).diff(startDate.value, 'day')
})
const fstartDate = computed(() => {
  return formatMMDD(startDate.value)
})
const fendDate = computed(() => {
  return formatMMDD(endDate.value)
})
const onConfirm = (dates) => {
  startDate.value = dates[0];
  endDate.value = dates[1];
  showCalendar.value = false;
}

// 热门建议
const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
const hotSugests = storeToRefs(homeStore).hotSuggests

// 搜索按钮
const searchBtnClick = () => {
  router.push({
    path: '/search'

  })
}
</script>

<template>
  <div class="home-search-box">
    <!--  定位-->
    <div class="location flex-area">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="right">
        <p>我的位置</p>
        <img src="@/assets/img/home/icon_location.png"/>
      </div>
    </div>
    <!--  日期-->
    <div class="flex-area date-range ">
      <div class="start">
        <div class="date" @click="showCalendar = true">
          <span class="tip">入住</span>
          <span class="time">{{ fstartDate }}</span>
        </div>
        <div class="stay">共{{ diffDay }}晚</div>
      </div>
      <div class="end">
        <div class="date" @click="showCalendar = true">
          <span class="tip">离店</span>
          <span class="time">{{ fendDate }}</span>
        </div>
      </div>
      <van-calendar v-model:show="showCalendar" type="range" @confirm="onConfirm" color="#ff9854" :round="false"/>
    </div>
    <!--    价格人数-->
    <div class="flex-area price-counter">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>

    <!--    关键字-->
    <div class="flex-area keyword">关键字/位置/民宿名</div>
    <!--    热门建议-->
    <div class="flex-area hot-suggest">
      <template v-for="(item, index) in hotSugests ">
        <div class="hot-item" :style="{background:item.tagText.background.color, color:item.tagText.color}">
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <!--    搜索按钮-->
    <div class="flex-area search-btn">
      <div class="btn" @click="searchBtnClick">
        开始搜索
      </div>
    </div>
  </div>

</template>

<style lang="less" scoped>
.home-search-box {
  --van-calendar-background-color: #fff;
  --van-calendar-popup-height: 100%;
}

.flex-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .end {
    min-width: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

}

.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 41px;

  .right {
    display: flex;

    img {
      position: relative;
      width: 20px;
      height: 20px;
      left: 3px;
      top: -2px;
    }
  }
}

.date-range {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  .start {
    display: flex;
    justify-content: space-between;
    flex: 1;

    .stay {
      flex: 1;
      font-size: 12px;
      color: #666;
      text-align: center;
    }
  }

  .end {
    min-width: 30%;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.price-counter, .keyword {
  color: #999999;
}

.hot-suggest {

  flex-wrap: wrap;
  justify-content: flex-start;
  height: 100%;

  .hot-item {
    padding: 0 4px;
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    margin: 10px 6px 0 5px;
    border-radius: 8px;
  }

  margin-bottom: 15px;
}

.search-btn {
  height: 38px;

  .btn {
    background-color: var(--primary-color);
    height: 38px;
    width: 100%;
    text-align: center;
    line-height: 38px;
    font-weight: 500;
    font-size: 18px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
  }
}
</style>
