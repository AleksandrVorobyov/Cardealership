<template lang="pug">
.card
  .card__nav
    h3.card__nav-title(v-html="info.title")
    .card__nav-btns
      button.card__nav-btns-btn(v-for="item in info.btnIcons", :key="item")
        SvgIcon(:name="item.icon")
  .card__main
    .card__main-top
      h5.card__main-top-offer(v-html="info.offer")
      h5.card__main-top-benefit(v-html="info.benefit")
    .card__main-center
      ul.card__main-center-actions
        li.card__main-center-action(v-for="item in info.actions", :key="item")
          .card__main-center-action-icon
            SvgIcon(:name="item.icon")
          p.card__main-center-action-text(v-html="item.text")
      .card__main-center-img
        img(:src="require('@/assets/img/' + info.mainImg)")
      .card__main-center-img-bg
        img(:src="require('@/assets/img/' + info.mainBg)")
    .card__main-bottom
      h5.card__main-top-price(v-html="info.price")
      h5.card__main-top-credit(v-html="info.credit")
  .card__footer
    .card__footer-property
      .card__footer-property-item(v-for="item in info.property", :key="item")
        .card__footer-property-item-icon
          SvgIcon(:name="item.icon")
        p.card__footer-property-item-text {{ item.text }}
    .card__footer-btns
      button.card__footer-btns-btn(
        v-for="btn in info.btns",
        :key="btn",
        :type="btn.type",
        :class="btn.class"
      ) {{ btn.text }}
</template>
<script>
import SvgIcon from "../SvgIcon.vue";
export default {
  props: {
    info: Object,
  },
  components: {
    SvgIcon,
  },
};
</script>
<style scoped lang="scss">
.card {
  position: relative;
  padding: 20px;
  width: 100%;
  overflow: hidden;
  background: white;
  box-shadow: 0px 0px 30px rgba(133, 147, 159, 0.3);
  border-radius: 25px;
  z-index: 500;

  @media (min-width: 769px) {
    padding: 25px;
  }
}

.card__nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  @media (min-width: 769px) {
    margin-bottom: 25px;
  }
}

.card__nav-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: var(--blackMain);

  @media (min-width: 769px) {
    font-size: 27px;
    line-height: 32px;
  }
}

.card__nav-btns {
  display: flex;
  gap: 15px;
}

.card__nav-btns-btn {
  position: relative;
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
  border: none;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: none;
    stroke: var(--gray);
    stroke-width: 2px;
    transition: stroke 0.4s linear, filter 0.4s linear;
  }

  &:hover svg {
    stroke: var(--red);
    filter: drop-shadow(0px 0px 2px var(--red));
  }
}

.card__main {
  margin-bottom: 10px;
}

.card__main-top {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 10px;
}

.card__main-top-offer {
  position: relative;
  padding: 5px 22px 5px 15px;
  height: 24px;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: white;
  border-radius: 4px;
  background: var(--red);

  @media (min-width: 769px) {
    font-size: 13px;
    line-height: 15px;
    padding: 7px 22px 7px 15px;
    height: 30px;
  }

  &::before {
    position: absolute;
    top: 50%;
    right: -8px;
    height: 19px;
    width: 19px;
    background: var(--red);
    content: "";
    border-radius: 4px;
    transform: rotate(45deg) translateY(-50%);
    transform-origin: top;
    z-index: -1;

    @media (min-width: 769px) {
      height: 23px;
      width: 23px;
    }
  }
}

.card__main-top-benefit {
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: var(--red);

  @media (min-width: 769px) {
    font-size: 12px;
    line-height: 14px;
  }
}

.card__main-center {
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;

  @media (min-width: 769px) {
    justify-content: flex-start;
  }
}

.card__main-center-actions {
  position: relative;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.card__main-center-action {
  display: flex;
  gap: 5px;

  @media (min-width: 769px) {
    gap: 10px;
  }
}

.card__main-center-action:hover {
  .card__main-center-action-icon {
    transform: rotate(365deg);
    background: var(--red);
  }
}

.card__main-center-action-icon {
  position: relative;
  width: 20px;
  height: 20px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--blackMain);
  transition: transform 0.4s linear, background 0.4s linear;

  @media (min-width: 769px) {
    width: 32px;
    height: 32px;
    padding: 8px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
}

.card__main-center-action-text {
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  color: var(--blackMain);

  @media (min-width: 769px) {
    font-size: 13px;
    line-height: 15px;
  }
}

.card__main-center-action-text span {
  color: var(--red);
}

.card__main-center-img {
  position: relative;
  width: 180px;
  height: 100px;
  pointer-events: none;
  user-select: none;

  @media (min-width: 769px) {
    width: 270px;
    height: 150px;
  }
}

.card__main-center-img-bg {
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-90%);
  width: 290px;
  height: 170px;
  z-index: -5;
  pointer-events: none;
  user-select: none;

  @media (min-width: 769px) {
    width: 370px;
    height: 220px;
    transform: translateY(-80%);
  }
}

.card__main-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__main-top-price {
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: var(--blackMain);

  @media (min-width: 769px) {
    font-size: 22px;
    line-height: 26px;
  }
}

.card__main-top-credit {
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: var(--blackMain);

  @media (min-width: 769px) {
    font-size: 16px;
    line-height: 14px;
  }
}

.card__footer-property {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.card__footer-property-item {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px 6px 10px;
  background: #fff;
  border: 1px solid var(--grayBorder);
  box-sizing: border-box;
  border-radius: 20px;
  transition: border 0.4s linear;

  @media (min-width: 769px) {
    padding: 7px 12px 7px 8px;
  }
}

.card__footer-property-item:hover {
  border: 1px solid var(--red);

  .card__footer-property-item-icon svg {
    fill: var(--red);
  }

  .card__footer-property-item-text {
    color: var(--red);
  }
}

.card__footer-property-item-icon {
  width: 16px;
  height: 16px;

  @media (min-width: 769px) {
    width: 20px;
    height: 20px;
  }

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: var(--blackMain);
    transition: fill 0.4s linear;
  }
}

.card__footer-property-item-text {
  font-weight: 400;
  font-size: 8px;
  line-height: 9px;
  color: var(--blackMain);
  transition: color 0.4s linear;

  @media (min-width: 769px) {
    font-size: 12px;
    line-height: 14px;
  }
}

.card__footer-btns {
  display: grid;
  padding-right: 20px;
  grid-template-areas: "footerBtnOne footerBtnOne" "footerBtnTwo footerBtnThree";

  @media (min-width: 769px) {
    padding-right: 15px;
    display: flex;
  }
}

.card__footer-btns-btn {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 17px;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.4s linear;

  @media (min-width: 769px) {
    padding: 10px;
  }

  &::before {
    position: absolute;
    content: "";
    width: 39px;
    height: 39px;
    right: -16px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    border-radius: 6px;
    z-index: -1;

    @media (min-width: 769px) {
      width: 29px;
      height: 29px;
      right: -12px;
    }
  }

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
  }
}

.card__footer-btns-btn--red {
  background: var(--red);
  z-index: 100;
  border-radius: 6px;
  grid-area: footerBtnOne;
  margin-bottom: 8px;

  @media (min-width: 769px) {
    margin-bottom: 0;
  }

  &::before {
    background: var(--red);
  }
}

.card__footer-btns-btn--black {
  background: var(--blackMain);
  z-index: 90;
  border-radius: 6px;
  grid-area: footerBtnTwo;

  @media (min-width: 769px) {
    border-radius: 0px 6px 6px 0px;
  }

  &::before {
    background: var(--blackMain);
  }
}

.card__footer-btns-btn--gray {
  background: var(--gray);
  z-index: 80;
  border-radius: 0px 6px 6px 0px;
  grid-area: footerBtnThree;

  &::before {
    background: var(--gray);
  }
}
</style>