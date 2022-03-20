<template lang="pug">
#header.header
  CarDeallerHeaderPanel(:info="header.panel")
  CarDeallerHeaderNav
</template>

<script>
import { mapGetters } from "vuex";
import CarDeallerHeaderPanel from "./parts/CarDeallerHeaderPanel.vue";
import CarDeallerHeaderNav from "./parts/CarDeallerHeaderNav.vue";
export default {
  name: "CarDeallerHeader",
  components: {
    CarDeallerHeaderPanel,
    CarDeallerHeaderNav,
  },
  computed: {
    ...mapGetters(["header"]),
  },
};
</script>

<style scoped lang="scss">
</style>
