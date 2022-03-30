<template lang="pug">
.home-page
  header
    CarDeallerHeader
  main
    CarDeallerMainSlider
</template>

<script>
import CarDeallerHeader from "@/components/CarDeallerHeader.vue";
import CarDeallerMainSlider from "@/components/CarDeallerMainSlider.vue";

export default {
  name: "Home",
  components: {
    CarDeallerHeader,
    CarDeallerMainSlider,
  },
};
</script>
