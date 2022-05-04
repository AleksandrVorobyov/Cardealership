<template lang="pug">
section.form-banner
  .container
    .form-banner-wrap
      .form-banner__img
        img(
          :src="require('@/assets/img/' + formBanner.bgImgSrc)",
          :alt="formBanner.bgImgAlt"
        )
      form#form-banner.form-banner__form(
        action="#",
        @submit="formBannerValid($event)"
      )
        h3.form-banner__form-title {{ formBanner.title }}
        h5.form-banner__form-subtitle(v-html="formBanner.subtitle")
        .form-banner__form-field
          input#form-banner-tel.form-banner__form-field-tel(
            type="text",
            :placeholder="formBanner.formFieldPlaceholder",
            @keyup.enter="formBannerValid($event)",
            @keyup="formBannerTel",
            :value="formBanner.formField",
            maxlength="12",
            required
          )
          button#form-banner-btn.form-banner__form-field-btn.btn-shiny-anim.btn-main-red(
            type="submit"
          )
            span {{ formBanner.formBtnText }}
        p.form-banner__form-assent(v-html="formBanner.assent")
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["formBanner"]),
  },
  methods: {
    formBannerValid(e) {
      this.$store.commit("formBannerValid", e);
    },
    formBannerTel() {
      this.$store.commit("formBannerTel");
    },
  },
};
</script>
<style lang="scss">
.form-banner {
  position: relative;
  margin: 40px 0 35px;
  overflow: hidden;
  z-index: 500;
}

.form-banner-wrap {
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: var(--blackMain);
  border-radius: 25px;
  overflow: hidden;
  z-index: 100;
  width: fit-content;

  @media (min-width: 540px) {
    align-items: center;
    flex-direction: column-reverse;
  }

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    max-width: 800px;
  }

  @media (min-width: 1430px) {
    max-width: 100%;
    margin: 0;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 150px;
    content: "";
    filter: blur(80px);
    background: var(--red);
    z-index: -1;
    border-radius: 25px;

    @media (min-width: 540px) {
      top: 100%;
      width: 440px;
      height: 200px;
      transform: translateY(-100%);
    }

    @media (min-width: 768px) {
      top: 50%;
      height: 100px;
      transform: translateY(-50%);
    }

    @media (min-width: 1430px) {
      width: 700px;
      height: 120px;
      filter: blur(80px);
    }
  }
}

.form-banner__img {
  position: relative;
  width: 280px;
  height: 230px;
  margin: auto 0;

  @media (min-width: 1430px) {
    width: 470px;
    height: 320px;
    margin: 0;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media (min-width: 540px) {
      transform: rotate(-90deg);
    }

    @media (min-width: 768px) {
      transform: rotate(0);
    }
  }
}

.form-banner__form {
  padding: 0px 20px 30px;
  width: 100%;
  max-width: 400px;

  @media (min-width: 540px) {
    padding: 35px;
  }

  @media (min-width: 768px) {
    padding: 35px 0px;
    max-width: 350px;
  }

  @media (min-width: 1430px) {
    padding-top: 65px;
    padding-bottom: 65px;
    max-width: 770px;
  }
}

.form-banner__form-title {
  margin-bottom: 5px;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: var(--white);

  @media (min-width: 1430px) {
    font-size: 30px;
    line-height: 35px;
  }
}

.form-banner__form-subtitle {
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--white);

  @media (min-width: 1430px) {
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 23px;
  }

  span {
    color: var(--red);
    font-weight: 700;
  }
}

.form-banner__form-field {
  display: grid;
  gap: 10px;
  margin-bottom: 10px;

  @media (min-width: 1430px) {
    margin-bottom: 25px;
    display: flex;
    gap: 40px;
  }
}

.form-banner__form-field-tel--danger {
  outline: red;
}

.form-banner__form-field-tel,
.form-banner__form-field-btn {
  position: relative;
  width: 100%;
  height: 65px;
  border-radius: 6px;
  overflow: hidden;
}

.form-banner__form-field-tel {
  padding: 0 20px;
  background: var(--white);
  border: 1px solid var(--gray400);
  outline: var(--red);

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--blackMain);
}

.form-banner__form-field-btn {
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: var(--white);
  transition: color 0.4s linear;
  cursor: pointer;

  &:hover {
    color: var(--red);
  }
}

.form-banner__form-assent {
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: var(--gray);

  @media (min-width: 1430px) {
    font-size: 13px;
    line-height: 16px;
  }

  span {
    text-decoration: underline;
  }
}
</style>