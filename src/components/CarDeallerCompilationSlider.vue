<template lang="pug">
section.compilation-slider
  .container
    .compilation-slider-wrap
      .compilation-slider__nav
        h3.compilation-slider__nav-title {{ compilationSlider.nav.title }}
        router-link.compilation-slider__nav-link(to="/") {{ compilationSlider.nav.link }}
      .compilation-slider__slider
        Splide(:options="compilationSlider.sliderOptions")
          SplideSlide(v-for="item in compilationSlider.slides")
            CarDeallerCompilationSlide(:slide="item")
</template>
<script>
import { mapGetters } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import CarDeallerCompilationSlide from "./parts/CompilationSlide.vue";
export default {
  computed: {
    ...mapGetters(["compilationSlider"]),
  },
  components: {
    Splide,
    SplideSlide,
    CarDeallerCompilationSlide,
  },
};
</script>
<style lang="scss">
.compilation-slider {
  position: relative;
  margin: 20px 0;
  overflow: hidden;
  z-index: 500;
  background: var(--white);

  @media (min-width: 769px) {
    margin: 40px 0;
  }
}

.compilation-slider .container {
  padding: 0;
  max-width: 100%;

  @media (min-width: 1430px) {
    max-width: 1430px;
    padding: 0 15px;
  }
}

.compilation-slider-wrap {
  position: relative;
}

.compilation-slider__nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  padding: 0 10px;

  @media (min-width: 1430px) {
    padding: 0;
  }

  @media (min-width: 541px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
    margin-bottom: 25px;
  }

  @media (min-width: 769px) {
    justify-content: flex-start;
    width: auto;
    margin-bottom: 45px;
    padding: 0 20px;
  }
}

.compilation-slider__nav-title {
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: var(--blackMains);

  @media (min-width: 769px) {
    font-size: 40px;
    line-height: 47px;
  }
}

.compilation-slider__nav-link {
  position: relative;
  padding: 4px 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--white);
  background: var(--red);
  border-radius: 11px;
  width: fit-content;

  @media (min-width: 769px) {
    padding: 6px 14px;
    font-size: 16px;
  }
}

.compilationSlider-class-arrows {
  position: absolute;
  top: -93px;
  right: 20px;
  display: flex;
  gap: 10px;

  @media (min-width: 1430px) {
    right: 0;
  }
}

.splide__arrow.compilationSlider-class-arrow {
  position: relative;
  top: 0;
  left: 0;
  transform: translate(0);
  width: 48px;
  height: 48px;
  border-radius: 6px;
  overflow: hidden;
  background: var(--red);
  opacity: 1;
  transition: background 0.4s linear, box-shadow 0.4s linear;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: var(--white);
    transition: fill 0.4s linear;
    height: 16px;
    width: 14px;
  }
}

.splide__arrow.compilationSlider-class-arrow.compilationSlider-class-prev {
  svg {
    transform: translate(calc(-50% - 3px), -50%) rotate(180deg);
  }
}

.splide__arrow.compilationSlider-class-arrow.compilationSlider-class-next {
  svg {
    transform: translate(calc(-50% + 3px), -50%);
  }
}

.splide__arrow.compilationSlider-class-arrow:hover {
  background: var(--white);
  box-shadow: 0px 0px 30px rgba(133, 147, 159, 0.7);
  opacity: 1;

  svg {
    fill: var(--blackMain);
  }
}
</style>