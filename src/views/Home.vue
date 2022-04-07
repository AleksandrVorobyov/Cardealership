<template lang="pug">
.home-page
  header
    CarDeallerHeader
  main
    CarDeallerMainSlider
    CarDeallerMainFilter
</template>

<script>
import CarDeallerHeader from "@/components/CarDeallerHeader.vue";
import CarDeallerMainSlider from "@/components/CarDeallerMainSlider.vue";
import CarDeallerMainFilter from "@/components/CarDeallerMainFilter.vue";

export default {
  name: "Home",
  components: {
    CarDeallerHeader,
    CarDeallerMainSlider,
    CarDeallerMainFilter,
  },
};
</script>
