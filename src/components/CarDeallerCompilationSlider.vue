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
            .compilation-slide
              img.compilation-slide__img(
                :src="item.src",
                :alt="item.alt"
              )
              h5.compilation-slide__title {{ item.title }}
              router-link.compilation-slide__link(:to="item.href") {{ item.link }}
</template>
<script>
import { mapGetters } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  computed: {
    ...mapGetters(["compilationSlider"]),
  },
  components: {
    Splide,
    SplideSlide,
  },
};
</script>
<style scoped lang="scss">
.compilation-slider {
  position: relative;
  padding: 100px 0;
  overflow: hidden;
  z-index: 500;
  background: white;
}

.compilation-slider-wrap {
  position: relative;
}
</style>