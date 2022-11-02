import { defineStore } from 'pinia'
import { getAllCitiesData } from '@/services/modules/city.js'
export const useCityStore = defineStore('city', {
  state: () => {
    return {
      allCities: {},
      currentCity: { cityName: '西安' },
    }
  },
  actions: {
    async fetchAllCitiesData() {
      const res = await getAllCitiesData()
      this.allCities = res.data
    },
  },
})

export default useCityStore
