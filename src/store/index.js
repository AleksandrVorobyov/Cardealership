import { createStore } from 'vuex'
import CarDeallerHeader from "./modules/CarDeallerHeader.js"
import CarDeallerMainSlider from "./modules/CarDeallerMainSlider.js"

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    CarDeallerHeader: CarDeallerHeader,
    CarDeallerMainSlider: CarDeallerMainSlider
  }
})
