<template lang="pug">
section.header__nav
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
};
</script>

<style scoped lang="scss">
.header__nav {
  position: relative;
  overflow: hidden;
  z-index: 500;
  background: var(--white);
}

.header__nav-wrap {
  position: relative;
  padding: 22px 0 28px;
}
</style>