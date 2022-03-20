<template lang="pug">
section.header__nav
  .container
    .header__nav-wrap
</template>
<script>
import { mapGetters } from "vuex";
export default { 
  computed: {
    ...mapGetters(["headerNav"]),
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
}
</style>