<template lang="pug">
.special-offer__slide
  .special-offer__slide-nav
    h4.special-offer__slide-nav-title {{ slideInfo.title }}
    h6.special-offer__slide-nav-sutitle {{ slideInfo.subtitle }}
  .special-offer__slide-btn
    router-link.special-offer__slide-btn-link.btn-main-gray(
      :to="slideInfo.linkHref"
    ) 
      span {{ slideInfo.linkText }}
  .special-offer__slide-img
    img(:data-splide-lazy="require('@/assets/img/' + slideInfo.img)", :alt="slideInfo.alt")
</template>
<script>
export default {
  props: {
    slideInfo: Object,
  },
};
</script>
<style scoped lang="scss">
.special-offer__slide {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  z-index: 100;
  overflow: hidden;
  background: var(--gray400);
  border-radius: 25px;
  padding: 25px 30px;
}

.special-offer__slide-nav {
  z-index: 50;
}

.special-offer__slide-nav-title {
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: var(--blacMain);

  @media (min-width: 769px) {
    font-size: 20px;
    line-height: 23px;
  }
}

.special-offer__slide-nav-sutitle {
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: var(--gray);

  @media (min-width: 769px) {
    font-size: 14px;
    line-height: 16px;
  }
}

.special-offer__slide-btn-link {
  position: relative;
  display: inline-block;
  width: 140px;
  height: 40px;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: var(--blacMain);
  background: var(--red);
  border-radius: 6px;
  transition: color .4s linear;

  @media (min-width: 769px) {
    font-size: 14px;
    line-height: 16px;
  }

  &:hover {
    color: var(--white);
  }
}

.special-offer__slide-img {
  position: absolute;
  top: 0;
  right: 0;
  width: 75%;
  height: 100%;
  z-index: -10;

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -10;
  }

  &::before {
    position: absolute;
    content: "";
    width: 250px;
    height: 300px;
    top: 50%;
    transform: translate(0%, -50%);
    left: -50%;
    filter: blur(35px);
    background: #eff0f0;
    z-index: 10;

    @media (min-width: 769px) {
      width: 300px;
      height: 350px;
    }
  }
}
</style>