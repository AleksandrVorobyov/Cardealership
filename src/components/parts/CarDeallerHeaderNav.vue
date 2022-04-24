<template lang="pug">
section#headerNav.header__nav
  .container
    .header__nav-wrap
      CarDeallerHeaderNavUp(:infoUp="info.up")
      CarDeallerHeaderNavDown(:infoDown="info.down")
</template>

<script>
import CarDeallerHeaderNavUp from "./CarDeallerHeaderNavUp";
import CarDeallerHeaderNavDown from "./CarDeallerHeaderNavDown";

export default {
  props: {
    info: Object,
  },
  components: {
    CarDeallerHeaderNavUp,
    CarDeallerHeaderNavDown,
  },
  methods: {
    headerNavFix() {
      this.$store.commit("headerNavFix");
    },
  },
  created() {
    window.addEventListener("scroll", this.headerNavFix);
  },
};
</script>

<style scoped lang="scss">
.header__nav {
  position: relative;
  overflow: hidden;
  z-index: 800;
  background: var(--white);
  transition: top 0.8s linear;
  top: -100%;
}

.header__nav--fix {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 0px 6px var(--gray);
}

.header__nav-wrap {
  position: relative;
  padding: 22px 0 22px;

  @media (max-width: 1270px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.header__nav-wrap > div + div {
  @media (min-width: 769px) {
    margin-top: 10px;
  }
}
</style>