<template lang="pug">
section.special-offer
  .container
    .special-offer-wrap
      .special-offer__nav
        h3.special-offer__nav-title {{ specialOffer.nav.title }}
      .special-offer__slider
        Splide(:options="specialOffer.sliderOptions")
          SplideSlide(v-for="item in specialOffer.slides")
            SpecialOfferSlide(:slideInfo="item")
</template>
<script>
import { mapGetters } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import SpecialOfferSlide from "./parts/SpecialOfferSlide.vue";

export default {
  computed: {
    ...mapGetters(["specialOffer"]),
  },
  components: {
    Splide,
    SplideSlide,
    SpecialOfferSlide,
  },
};
</script>
<style lang="scss">
.special-offer {
  position: relative;
  margin: 40px 0;
  overflow: hidden;
  z-index: 500;
  background: white;
}

.special-offer .container {
  padding: 0;
  max-width: 100%;

  @media (min-width: 1430px) {
    max-width: 1430px;
    padding: 0 15px;
  }
}

.special-offer-wrap {
  position: relative;
}

.special-offer__nav {
  margin-bottom: 45px;
}

.special-offer__nav-title {
  padding: 0 10px;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: var(--blackMain);

  @media (min-width: 769px) {
    font-size: 40px;
    line-height: 47px;
    padding: 0 20px;
  }
}

.specialOfferSlider-class-arrows {
  position: absolute;
  top: -68px;
  right: 0;
  display: flex;
  gap: 10px;
}

.splide__arrow.specialOfferSlider-class-arrow {
  position: relative;
  top: 0;
  left: 0;
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

.splide__arrow.specialOfferSlider-class-arrow.specialOfferSlider-class-prev {
  svg {
    transform: translate(calc(-50% - 3px), -50%) rotate(180deg);
  }
}

.splide__arrow.specialOfferSlider-class-arrow.specialOfferSlider-class-next {
  svg {
    transform: translate(calc(-50% + 3px), -50%);
  }
}

.splide__arrow.specialOfferSlider-class-arrow:hover {
  background: var(--white);
  box-shadow: 0px 0px 30px rgba(133, 147, 159, 0.7);
  opacity: 1;

  svg {
    fill: var(--blackMain);
  }
}
</style>