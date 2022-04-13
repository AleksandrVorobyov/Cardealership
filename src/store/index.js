import { createStore } from 'vuex'
import CarDeallerHeader from "./modules/CarDeallerHeader.js"
import CarDeallerMainSlider from "./modules/CarDeallerMainSlider.js"
import CarDeallerMainFilter from "./modules/CarDeallerMainFilter.js"
import CarDeallerCardStock from "./modules/CarDeallerCardStock.js"
import CarDeallerNotFound from "./modules/CarDeallerNotFound.js"

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
    CarDeallerCardStock: CarDeallerCardStock,
    CarDeallerNotFound: CarDeallerNotFound,
  }
})
