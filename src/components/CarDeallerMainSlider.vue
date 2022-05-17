<template lang="pug">
section.main-slider
  .big-container
    .main-slider-wrap
      Splide(:options="mainSlider.options")
        SplideSlide(v-for="item in mainSlider.slides")
          .main-slider__item
            .container
              .main-slider__item-text
                h5.main-slider__item-notification {{ item.notification }}
                h2.main-slider__item-title {{ item.title }}
                h3.main-slider__item-subtitle {{ item.subtitle }}
              .main-slider__item-img
                img(:src="require('@/assets/img/' + item.img)")
</template>
<script>
import { mapGetters } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  computed: {
    ...mapGetters(["mainSlider"]),
  },
  components: {
    Splide,
    SplideSlide,
  },
};
</script>
<style lang="scss">
.main-slider {
  position: relative;
  overflow: hidden;
  margin: 20px 0;
  z-index: 300;
  padding-bottom: 30px;

  @media (min-width: 540px) {
    margin: 40px 0;
    padding-bottom: 60px;
  }
}

.main-slider-wrap {
  position: relative;
}

.main-slider__item {
  position: relative;
  padding: 15px;
  width: 100%;
  background: var(--gray400);
  border-radius: 25px;
  overflow: hidden;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 270px;
    background: linear-gradient(#ffffff80, #ffffff80),
      url("~@/assets/img/mainSlider/slide-01-bg.jpg") right / contain no-repeat;
    background-blend-mode: multiply;
    mix-blend-mode: multiply;
    opacity: 0.5;
    content: "";

    @media (min-width: 769px) {
      top: 0;
      right: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(#ffffff80, #ffffff80),
        url("~@/assets/img/mainSlider/slide-01-bg.jpg") right / cover no-repeat;
    }

    @media (min-width: 1240px) {
      background: linear-gradient(#ffffff80, #ffffff80),
        url("~@/assets/img/mainSlider/slide-01-bg.jpg") right / contain
          no-repeat;
    }
  }

  @media (min-width: 540px) {
    height: 360px;
    padding: 35px;
  }

  @media (min-width: 1240px) {
    padding: 80px 50px;
    height: 500px;
  }

  @media (min-width: 1430px) {
    height: 600px;
  }
}

.main-slider__item-text {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 200;
  z-index: 100;
}

.main-slider__item-notification {
  padding: 5px 10px;
  margin-bottom: 10px;
  width: fit-content;
  display: inline-block;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: var(--white);
  background: var(--red);
  border-radius: 33px;

  @media (min-width: 540px) {
    margin-bottom: 25px;
  }

  @media (min-width: 1240px) {
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 19px;
  }
}

.main-slider__item-title {
  max-width: 750px;
  margin-bottom: 10px;
  display: inline-block;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: var(--blackMain);

  @media (min-width: 540px) {
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 24px;
  }

  @media (min-width: 1240px) {
    font-size: 48px;
    line-height: 56px;
  }

  @media (min-width: 1430px) {
    font-size: 60px;
    line-height: 70px;
  }
}

.main-slider__item-subtitle {
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: var(--gray);

  @media (min-width: 1240px) {
    font-size: 29px;
    line-height: 34px;
  }
}

.main-slider__item-img {
  position: relative;
  width: 100%;
  height: 140px;
  z-index: 100;
  margin: 0 auto;
  z-index: 50;

  @media (min-width: 540px) {
    position: absolute;
    margin: 0;
    width: 60%;
    height: 50%;
    right: 10px;
    top: 50%;
    transform: translateY(-20%);
  }

  @media (min-width: 720px) {
    right: 50px;
    transform: translateY(-30%);
  }

  @media (min-width: 1430px) {
    transform: translateY(-40%);
  }

  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}

.main-slider-class-pagination .main-slider-class-page {
  position: relative;
  width: 10px;
  height: 10px;
  background: var(--gray);
}

.main-slider-class-pagination.splide__pagination {
  max-width: 1430px;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  bottom: -30px;

  @media (min-width: 540px) {
    bottom: 35px;
    justify-content: flex-start;
  }

  @media (min-width: 1240px) {
    padding: 0 15px;
    bottom: 80px;
  }
}

.main-slider-class-pagination .main-slider-class-page.is-active {
  width: 20px;
  height: 20px;
  transform: scale(1);
  background: var(--red);

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background: var(--white);
    content: "";
    border-radius: 50%;
  }
}

.splide__arrows.main-slider-class-arrows {
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
}

.main-slider .main-slider-class-arrow {
  background: transparent;
  width: auto;
  height: auto;

  svg {
    width: 34px;
    height: 34px;
  }
}
</style>