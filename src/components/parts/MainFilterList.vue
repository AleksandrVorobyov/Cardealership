<template lang="pug">
ul.main-filter__list
  li.main-filter__list-item(v-for="item in info.list")
    router-link.main-filter__list-link(:to="info.listLink")
      .main-filter__list-img
        img(
          :src="require('@/assets/img/mainFilter/' + item + '.png')",
          :alt="item"
        )
      p.main-filter__list-text {{ item }}
</template>
<script>
export default {
  props: {
    info: Object,
  },
};
</script>
<style scoped lang="scss">
.main-filter__list {
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  height: 100%;
  width: 100%;
  max-height: 420px;
  max-width: 800px;
  gap: 15px 0;

  @media (min-width: 540px) {
    gap: 5px 0;
  }

  @media (min-width: 768px) {
    max-height: 370px;
  }
}

.main-filter__list-item {
  width: fit-content;
}

.main-filter__list-link {
  display: flex;
  align-items: center;

  @media (min-width: 540px) {
    gap: 5px;
  }

  @media (min-width: 768px) {
    gap: 10px;
  }
}

.main-filter__list-link:hover {
  .main-filter__list-text {
    color: var(--red);
  }
}

.main-filter__list-img {
  position: relative;
  display: none;

  @media (min-width: 540px) {
    display: block;
    width: 30px;
    height: 30px;
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
  }
}

.main-filter__list-text {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: var(--blackMain);
  transition: color 0.4s linear;
  text-decoration: underline;

  @media (min-width: 540px) {
    text-decoration: none;
  }
}
</style>