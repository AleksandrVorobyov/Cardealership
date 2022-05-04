<template lang="pug">
.header__nav-up
  .header__nav-up-menu
    button.header__nav-up-menu-btn
      span
    .header__nav-up-menu-logo
      router-link.header__nav-up-menu-logo-link(to="/")
        img(:src="require('@/assets/img/' + infoUp.logo)")
    .header__nav-up-menu-slogan
      h2.header__nav-up-menu-slogan-title(v-html="infoUp.slogan")
  .header__nav-up-list
    ul.header__nav-up-list-wrap
      li.header__nav-up-list-item(v-for="item in infoUp.menuUp")
        router-link.header__nav-up-list-link(:to="item.link") {{ item.text }}
  .header__nav-up-numbers
    .header__nav-up-numbers-icon
      SvgIcon(:name="infoUp.numbers.icon")
    .header__nav-up-numbers-link
      a.header__nav-up-numbers-link-title(:href="'tel:' + infoUp.numbers.main") {{ infoUp.numbers.main }}
      a.header__nav-up-numbers-link-subtitle(
        :href="'tel:' + infoUp.numbers.additional"
      ) {{ infoUp.numbers.additional }}
  .header__nav-up-btn
    button.btn-shiny-anim(type="button") {{ infoUp.btn.text }}
</template>
<script>
import SvgIcon from "../SvgIcon.vue";
export default {
  props: {
    infoUp: Object,
  },
  components: {
    SvgIcon,
  },
};
</script>
<style lang="scss">
.header__nav-up {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 769px) {
    margin-right: 25px;
  }

  @media (min-width: 1270px) {
    width: auto;
    margin-right: 0;
  }
}

.header__nav-up-menu,
.header__nav-up-list,
.header__nav-up-btn {
  display: flex;
  align-items: center;
}

.header__nav-up-numbers {
  display: none;
  @media (min-width: 769px) {
    display: flex;
  }
}

.header__nav-up-menu-btn {
  position: relative;
  margin-right: 20px;
  width: 22px;
  height: 14px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  @media (min-width: 414px) {
    width: 28px;
    height: 22px;
  }

  &::before,
  &::after,
  span::before {
    position: absolute;
    left: 0;
    background: var(--blackMain);
    content: "";
    border-radius: 6px;
    width: 100%;
    height: 2px;

    @media (min-width: 414px) {
      height: 4px;
    }
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  span::before {
    top: 50%;
    transform: translateY(-50%);
  }
}

.header__nav-up-menu-logo {
  position: relative;
  width: 130px;
  height: 40px;

  @media (min-width: 769px) {
    width: 200px;
    height: 60px;
  }

  @media (min-width: 1270px) {
    margin-right: 40px;
  }

  a {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  a img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}

.header__nav-up-menu-slogan {
  position: relative;
  max-width: 170px;

  &::before {
    position: absolute;
    left: -20px;
    top: 0;
    content: "";
    width: 1px;
    height: 100%;
    background: var(--grayBorder);
  }

  @media (max-width: 1270px) {
    display: none;
  }
}

.header__nav-up-menu-slogan-title {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: var(--blackMain);

  span {
    padding: 4px 6px;
    background: var(--red);
    color: var(--white);
    border-radius: 22px;
  }
}

.header__nav-up-list {
  @media (max-width: 1270px) {
    display: none;
  }
}

.header__nav-up-list-wrap {
  display: flex;
  gap: 16px;
}

.header__nav-up-list-link {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--blackMain);
  transition: color 0.3s ease;
}

.router-link-active.header__nav-up-list-link {
  color: var(--red);
}

.header__nav-up-numbers-icon {
  width: 31px;
  height: 31px;
  position: relative;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}

.header__nav-up-numbers-link {
  position: relative;
  margin-left: 10px;
}

.header__nav-up-numbers-link-title {
  display: block;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: right;
  text-transform: uppercase;
  color: var(--blackMain);
}

.header__nav-up-numbers-link-subtitle {
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  text-transform: uppercase;
  color: var(--blackMain);

  @media (max-width: 1270px) {
    display: none;
  }
}

.header__nav-up-btn {
  @media (max-width: 1400px) {
    display: none;
  }
}

.header__nav-up-btn button {
  position: relative;
  padding: 16px 22px;
  background: var(--red);
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
  color: var(--white);
  overflow: hidden;
}

.header__nav-up-btn button:hover {
  animation: btnHover1 1s ease-in-out infinite;
}

@keyframes btnHover1 {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }
}
</style>