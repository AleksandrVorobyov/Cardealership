<template lang="pug">
section#header.header
  CarDeallerHeaderPanel(:info="header.panel")
  CarDeallerNav(:info="header.nav")
</template>

<script>
import { mapGetters } from "vuex";
import CarDeallerHeaderPanel from "./parts/HeaderPanel.vue";
import CarDeallerNav from "./CarDeallerNav.vue";

export default {
  name: "CarDeallerHeader",
  components: {
    CarDeallerHeaderPanel,
    CarDeallerNav,
  },
  computed: {
    ...mapGetters(["header"]),
  },
};
</script>

<style scoped lang="scss">
.header {
  position: relative;
}
</style>
