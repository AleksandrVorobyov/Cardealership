<template lang="pug">
.home-page
  header
    CarDeallerHeader
  main
    CarDeallerMainSlider
    CarDeallerMainFilter
    CarDeallerCardStock
    CarDeallerCompilationSlider
</template>

<script>
import CarDeallerHeader from "@/components/CarDeallerHeader.vue";
import CarDeallerMainSlider from "@/components/CarDeallerMainSlider.vue";
import CarDeallerMainFilter from "@/components/CarDeallerMainFilter.vue";
import CarDeallerCardStock from "@/components/CarDeallerCardStock.vue";
import CarDeallerCompilationSlider from "@/components/CarDeallerCompilationSlider.vue";

export default {
  name: "Home",
  components: {
    CarDeallerHeader,
    CarDeallerMainSlider,
    CarDeallerMainFilter,
    CarDeallerCardStock,
    CarDeallerCompilationSlider,
  },
};
</script>
