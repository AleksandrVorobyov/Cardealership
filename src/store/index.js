import { createStore } from 'vuex'
import CarDeallerHeader from "./modules/CarDeallerHeader.js"
import CarDeallerMainSlider from "./modules/CarDeallerMainSlider.js"
import CarDeallerMainFilter from "./modules/CarDeallerMainFilter.js"

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    CarDeallerHeader: CarDeallerHeader,
    CarDeallerMainSlider: CarDeallerMainSlider,
    CarDeallerMainFilter: CarDeallerMainFilter,
  }
})
