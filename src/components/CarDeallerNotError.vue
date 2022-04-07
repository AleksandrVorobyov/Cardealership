<template lang="pug">
.not-found-wrap
  .container
    header
      .not-found__nav
        ul.not-found__nav-list
          li.not-found__nav-list-item(
            v-for="item in notFound.nav",
            :key="item"
          )
            router-link.not-found__nav-list-item-link(:to="item.link") {{ item.text }}
    main
      .not-found__error
        .not-found__error-img
          img(:src="require('@/assets/img/' + notFound.error)")
        h2.not-found__error-title {{ notFound.errorTitle }}
        p.not-found__error-text(
          v-for="item in notFound.errorText",
          :key="item"
        ) {{ item }}
    footer
      .not-found__footer
        router-link.not-found__footer-link(:to="notFound.btn.link") {{ notFound.btn.text }}
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NotFound",
  components: {},
  computed: {
    ...mapGetters(["notFound"]),
  },
};
</script>

<style scoped lang="scss">
.not-found-wrap {
  position: relative;
  padding: 20px 0;
  background: var(--blackMain);
  z-index: 1000;
  min-height: 100vh;

  @media (min-width: 540px) {
    padding: 120px 0;
  }

  &::before {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    content: "";
    background: url("~@/assets/img/notFound/bg.jpg") center / cover no-repeat;
    filter: opacity(0.9);
    height: 100%;
    width: 100%;
    background-blend-mode: multiply;
    z-index: -1;
    pointer-events: none;
  }
}

header {
  margin-bottom: 20px;

  @media (min-width: 540px) {
    margin-bottom: 30px;
  }
}

main {
  margin-bottom: 30px;

  @media (min-width: 540px) {
    margin-bottom: 60px;
  }
}

.not-found__nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 540px) {
    gap: 45px;
    justify-content: center;
  }
}

.not-found__nav-list-item-link {
  font-weight: 700;
  font-size: 9px;
  line-height: 11px;
  text-decoration-line: underline;
  text-transform: uppercase;
  color: var(--white);
  transition: color 0.4s linear;

  &:hover {
    color: var(--red);
  }

  @media (min-width: 540px) {
    font-size: 14px;
    line-height: 17px;
  }

  @media (min-width: 769px) {
    font-size: 16px;
    line-height: 19px;
  }
}

.not-found__error-img {
  position: relative;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 100%;
  height: 145px;

  @media (min-width: 370px) {
    width: 325px;
    height: 145px;
  }

  @media (min-width: 540px) {
    width: 457px;
    height: 275px;
    margin-bottom: 30px;
  }

  @media (min-width: 769px) {
    width: 657px;
    height: 375px;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: contain;
  }
}

.not-found__error-title {
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: var(--white);

  @media (min-width: 540px) {
    font-size: 36px;
    line-height: 47px;
    margin-bottom: 30px;
  }

  @media (min-width: 769px) {
    font-size: 44px;
    line-height: 52px;
  }
}

.not-found__error-text {
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: var(--white);
  opacity: 0.3;

  @media (min-width: 540px) {
    font-size: 16px;
    line-height: 21px;
  }

  @media (min-width: 769px) {
    font-size: 18px;
  }
}

.not-found__footer {
  position: relative;
  display: flex;
  justify-content: center;
}

.not-found__footer-link {
  position: relative;
  padding: 18px 30px;
  width: 270px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--red);
  border-radius: 6px;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;
  color: var(--white);

  @media (min-width: 769px) {
    font-size: 16px;
  }
}
</style>