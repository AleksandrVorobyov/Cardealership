import { createStore } from 'vuex'
import CarDeallerHeader from "./modules/CarDeallerHeader.js"
import CarDeallerMainSlider from "./modules/CarDeallerMainSlider.js"
import CarDeallerMainFilter from "./modules/CarDeallerMainFilter.js"
import CarDeallerCardStock from "./modules/CarDeallerCardStock.js"
import CarDeallerNotFound from "./modules/CarDeallerNotFound.js"
import CarDeallerCompilationSlider from "./modules/CarDeallerCompilationSlider.js"
import CarDeallerFormBanner from "./modules/CarDeallerFormBanner.js"
import CarDeallerSpecialOfferSlider from "./modules/CarDeallerSpecialOfferSlider.js"

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
    CarDeallerCompilationSlider: CarDeallerCompilationSlider,
    CarDeallerFormBanner: CarDeallerFormBanner,
    CarDeallerSpecialOfferSlider: CarDeallerSpecialOfferSlider,
  }
})
