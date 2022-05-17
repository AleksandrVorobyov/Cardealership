<template lang="pug">
section.about-main
  .container
    .about-main-wrap
      .about-main__list-radio
        .about-main__list-radio-item(
          v-for="(item, idx) in aboutMain.infoCheck",
          :key="item"
        )
          input(
            type="radio",
            :id="`about-main-radio-0${idx + 1}`",
            name="about-main-list-radio",
            :value="item.radio",
            v-bind:checked="item.checked",
            @click="aboutMainCheckFunc($event)"
          )
          label.about-main__list-radio-text(
            :for="`about-main-radio-0${idx + 1}`"
          ) {{ item.radio }}
      .about-main__info
        h4.about-main__info-title {{ infoCheckActiveTitle }}
        p.about-main__info-text {{ infoCheckActiveText }}
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["aboutMain", "infoCheckActiveTitle", "infoCheckActiveText"]),
  },
  methods: {
    aboutMainCheckFunc(e) {
      this.$store.commit("aboutMainCheckFunc", e);
    },
  },
};
</script>
<style scoped lang="scss">
.about-main {
  position: relative;
  margin: 20px 0;
  overflow: hidden;
  z-index: 500;
  background: white;

  @media (min-width: 769px) {
    margin: 40px 0;
  }
}

.about-main-wrap {
  position: relative;
}

.about-main__list-radio {
  position: relative;
  display: flex;
  gap: 25px;
  margin-bottom: 30px;

  &::before {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--grayBorder);
    content: "";
    opacity: 1;
    transition: opacity 0.3s linear;
  }

  @media (min-width: 541px) {
    gap: 30px;
  }

  @media (min-width: 769px) {
    margin-bottom: 50px;
    gap: 50px;

    &::before {
      opacity: 0;
    }
  }
}

.about-main__list-radio-item input {
  position: absolute;
  opacity: 0;
  left: -9999px;
}

.about-main__list-radio-item input:checked + label {
  color: var(--red);

  &::before {
    opacity: 1;
  }
}

.about-main__list-radio-text {
  position: relative;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: var(--blackMain);
  cursor: pointer;
  transition: color 0.3s linear;
  user-select: none;

  &::before {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--red);
    content: "";
    opacity: 0;
    transition: opacity 0.3s linear;
  }

  @media (min-width: 769px) {
    font-size: 16px;
    line-height: 19px;

    &::before {
      bottom: -15px;
    }
  }
}

.about-main__info-title {
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: var(--blackMain);

  @media (min-width: 541px) {
    margin-bottom: 25px;
  }

  @media (min-width: 769px) {
    margin-bottom: 30px;
    font-size: 40px;
    line-height: 47px;
  }
}

.about-main__info-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: var(--gray);

  @media (min-width: 769px) {
    font-size: 16px;
  }
}
</style>