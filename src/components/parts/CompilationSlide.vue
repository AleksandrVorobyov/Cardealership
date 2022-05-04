<template lang="pug">
.compilation-slide
  .compilation-slide-info
    h5.compilation-slide__title(v-html="slide.title")
    router-link.compilation-slide__link.btn-main-red(:to="slide.href") 
      span {{ slide.link }}
  .compilation-slide__img
    img(
      :data-splide-lazy="require('@/assets/img/' + slide.src)",
      :alt="slide.alt",
    )
</template>
<script>
export default {
  props: {
    slide: Object,
  },
};
</script>
<style scoped lang="scss">
.compilation-slide {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(38, 38, 38, 0) 63.88%,
    rgba(38, 38, 38, 0.93) 100%
  );
  overflow: hidden;
  border-radius: 25px;
}

.compilation-slide-info {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 20px;

  @media (min-width: 769px) {
    padding: 25px 30px;
  }
}

.compilation-slide__title {
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: var(--white);
  z-index: 50;

  @media (min-width: 769px) {
    font-size: 20px;
    line-height: 23px;
  }
}

.compilation-slide__link {
  display: inline-block;
  height: 40px;
  width: 150px;
  background: var(--grayBorder);
  border-radius: 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--white);
  transition: color 0.4s linear;
  z-index: 50;

  @media (min-width: 769px) {
    font-size: 14px;
    line-height: 16px;
  }

  &:hover {
    color: var(--blackMAin);
  }
}

.compilation-slide__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>