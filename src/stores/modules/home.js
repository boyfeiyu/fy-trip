import { defineStore } from "pinia";
import { getHotSuggests, getCategories } from "@/services/modules/home";
import { getHouseList } from "@/services/modules/home";

export const useHomeStore = defineStore("home", {
  state: () => {
    return {
      hotSuggests: [],
      categories: [],
      houseList: [],
      nowPage: 1,
    };
  },
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggests();
      // console.log(res)
      this.hotSuggests = res.hotSuggestsData.data;
    },
    async fetchCategories() {
      const res = await getCategories();
      // console.log(res)
      this.categories = res.data;
    },
    async fetchHouseList() {
      // console.log(this.nowPage);
      if (this.nowPage >= 30) return;
      const res = await getHouseList(this.nowPage++);
      // console.log(res);
      this.houseList = [...this.houseList, ...res.data];
    },
  },
});
export default useHomeStore;
