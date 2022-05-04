<template lang="pug">
section#headerNav.header__nav
  .container
    .header__nav-wrap
      HeaderNavUp(:infoUp="info.up")
      HeaderNavDown(:infoDown="info.down")
</template>

<script>
import HeaderNavUp from "./parts/HeaderNavUp";
import HeaderNavDown from "./parts/HeaderNavDown";

export default {
  props: {
    info: Object,
  },
  components: {
    HeaderNavUp,
    HeaderNavDown,
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
}

.header__nav--fix {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 0px 6px var(--gray);
  animation: navTopAnim 1s linear 0s;
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

@keyframes navTopAnim {
  0% {
    top: -100%;
  }

  70% {
    top: 20px;
  }

  80% {
    top: 0px;
  }

  90% {
    top: 10px;
  }

  100% {
    top: 0px;
  }
}
</style>