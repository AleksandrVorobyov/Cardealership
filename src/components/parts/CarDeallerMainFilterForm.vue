<template lang="pug">
form.main-filter__form
  h3.main-filter__form-title {{ info.title }}
  .main-filter__form-info
    h5.main-filter__form-info-title {{ info.range.title }}
    .main-filter__form-info-price
      span {{ (info.range.min < 1000 ? info.range.min : info.range.min / 1000) + info.range.minRu }}
      span -
      span {{ (info.range.max < 1000 ? info.range.max : info.range.max / 1000) + info.range.maxRu }}
  .main-filter__form-range
    .slider-track
    input#slider-1(
      type="range",
      min="0",
      max="3000",
      value="0",
      step="10",
      @input="slideOne()"
    )
    input#slider-2(
      type="range",
      min="0",
      max="3000",
      value="500",
      step="10",
      @input="slideTwo()"
    )
  .main-filter__form-line
    p.main-filter__form-line-text(v-for="item in info.line", :key="item") {{ item }}
  .main-filter__form-drop
    button.main-filter__form-drop-btn(
      type="button",
      v-for="item in info.drop",
      :key="item",
      @click="mainFilterDrop($event)"
    ) 
      span {{ item.title }}
      svgIcon(:name="item.icon")
  button.main-filter__form-btn(type="submit") Показать
</template>
<script>
import svgIcon from "../SvgIcon.vue";
export default {
  props: {
    info: Object,
  },
  components: {
    svgIcon,
  },
  methods: {
    slideOne() {
      this.$store.dispatch("slideOne");
    },
    slideTwo() {
      this.$store.dispatch("slideTwo");
    },
    mainFilterDrop() {
      this.$store.commit("mainFilterDrop", event);
    },
  },
  mounted() {
    this.slideOne();
    this.slideTwo();
  },
  computed: {
    rangeMinPrice(infoFilterForm) {
      if (info.range.min < 1000) {
        return info.range.min + info.range.minRu;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.main-filter__form {
  position: relative;
  width: 100%;
  max-width: 800px;
  background: var(--gray400);
  border-radius: 11px;
  padding: 35px;

  @media (min-width: 1430px) {
    max-width: 500px;
    background: transparent;
    padding: 0;
    border-radius: 0;
  }
}

.main-filter__form-title {
  display: block;
  margin-bottom: 20px;
  font-weight: 900;
  font-size: 20px;
  line-height: 23px;
  color: var(--blackMain);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
}

.main-filter__form-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.main-filter__form-info-title {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--blackMain);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
}

.main-filter__form-info-price {
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: var(--blackMain);
  display: flex;
  gap: 5px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
}

.main-filter__form-range {
  position: relative;
  width: 100%;
  height: 10px;
  margin-bottom: 20px;
}

input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  outline: none;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  background-color: transparent;
  pointer-events: none;
}

.slider-track {
  width: 100%;
  height: 6px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 6px;
}

input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  height: 5px;
}
input[type="range"]::-moz-range-track {
  -moz-appearance: none;
  height: 5px;
}
input[type="range"]::-ms-track {
  appearance: none;
  height: 5px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 14px;
  width: 14px;
  background-color: var(--red);
  cursor: pointer;
  margin-top: -5px;
  pointer-events: auto;
  border-radius: 50%;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 14px;
  width: 14px;
  cursor: pointer;
  border-radius: 50%;
  background-color: var(--red);
  pointer-events: auto;
}

input[type="range"]::-ms-thumb {
  appearance: none;
  height: 14px;
  width: 14px;
  cursor: pointer;
  border-radius: 50%;
  background-color: var(--red);
  pointer-events: auto;
}

input[type="range"]:active::-webkit-slider-thumb {
  background-color: #ffffff;
  border: 3px solid var(--red);
}

.main-filter__form-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.main-filter__form-line-text {
  position: relative;
  display: block;
  margin: 0;
  text-align: center;
  font-weight: 700;
  font-size: 9px;
  line-height: 11px;
  color: var(--gray100);
  margin-left: 5px;

  @media (min-width: 768px) {
    font-size: 11px;
    line-height: 13px;
  }

  &::before {
    position: absolute;
    top: -13px;
    left: 50%;
    transform: translate(-50%);
    width: 1px;
    height: 8px;
    background: var(--gray100);
    content: "";
  }
}

.main-filter__form-line > .main-filter__form-line-text:first-child {
  text-align: left;
  margin-left: 0;
  &::before {
    left: 0;
    transform: translate(0);
  }
}

.main-filter__form-line > .main-filter__form-line-text:last-child {
  text-align: right;
  margin-left: 0;
  &::before {
    left: 100%;
    transform: translate(-100%);
  }
}

.main-filter__form-drop {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 20px;
}

.main-filter__form-drop-btn {
  position: relative;
  padding: 20px 15px;
  background: #ffffff;
  border: 1px solid var(--gray200);
  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;
  flex-grow: 1;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--blackMain);

  * {
    pointer-events: none;
  }

  span,
  svg {
    user-select: none;
  }

  svg {
    width: 12px;
    height: 12px;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
}

.main-filter__form-drop-btn--active {
  svg {
    transform: translateY(-50%) rotate(180deg);
  }
}

.main-filter__form-btn {
  position: relative;
  padding: 16px 20px;
  text-align: center;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  text-transform: uppercase;
  background: var(--red);
  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>