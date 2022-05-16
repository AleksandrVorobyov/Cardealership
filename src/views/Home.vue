<template lang="pug">
.home-page
  header
    CarDeallerHeader
  main
    CarDeallerMainSlider
    CarDeallerMainFilter
    CarDeallerCardStock
    CarDeallerCompilationSlider
    CarDeallerFormBanner
    CarDeallerSpecialOfferSlider
    CarDeallerAboutMain
</template>

<script>
import CarDeallerHeader from "@/components/CarDeallerHeader.vue";
import CarDeallerMainSlider from "@/components/CarDeallerMainSlider.vue";
import CarDeallerMainFilter from "@/components/CarDeallerMainFilter.vue";
import CarDeallerCardStock from "@/components/CarDeallerCardStock.vue";
import CarDeallerCompilationSlider from "@/components/CarDeallerCompilationSlider.vue";
import CarDeallerFormBanner from "@/components/CarDeallerFormBanner.vue";
import CarDeallerSpecialOfferSlider from "@/components/CarDeallerSpecialOfferSlider.vue";
import CarDeallerAboutMain from "@/components/CarDeallerAboutMain.vue";

export default {
  name: "Home",
  components: {
    CarDeallerHeader,
    CarDeallerMainSlider,
    CarDeallerMainFilter,
    CarDeallerCardStock,
    CarDeallerCompilationSlider,
    CarDeallerFormBanner,
    CarDeallerSpecialOfferSlider,
    CarDeallerAboutMain,
  },
};
</script>
