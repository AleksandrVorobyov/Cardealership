<template lang="pug">
section.contact-main
  .container
    .contact-main-wrap
      #contact-main-map.contact-main__map.contact-main__map--hidden
        iframe(
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Af8641ce504ba1374246601d92afdda1678907358d9bb35a8751435bc4b9c5d6a&amp;source=constructor",
          width="100%",
          height="100%",
          frameborder="0"
        )
      .contact-main__desc(v-if="contactMain.mapHidden")
        .contact-main__desc-list(v-for="item in contactMain.desc")
          .contact-main__desc-list-icon
            SvgIcon(:name="item.icon")
          .contact-main__desc-list-text
            p(v-for="text in item.text") {{ text }}
        button.contact-main__desc-btn.btn-shiny-anim.btn-main-red(
          type="button",
          @click="contactMainMapPopup()"
        ) 
          span {{ contactMain.descBtn.btnText }}
      #contact-main-desc-exit.contact-main__desc(v-else)
        button.contact-main__desc-btn.btn-shiny-anim.btn-main-red(
          type="button",
          @click="contactMainMapPopup()"
        ) 
          span {{ contactMain.descBtn.btnExit }}
</template>
<script>
import { mapGetters } from "vuex";
import SvgIcon from "./SvgIcon.vue";
export default {
  computed: {
    ...mapGetters(["contactMain"]),
  },
  components: {
    SvgIcon,
  },
  methods: {
    contactMainMapPopup() {
      this.$store.dispatch("contactMainMapPopup");
    },
  },
};
</script>
<style scoped lang="scss">
.contact-main {
  position: relative;
  margin: 20px 0;
  overflow: hidden;
  z-index: 500;
  background: white;

  @media (min-width: 540px) {
    margin: 40px 0;
  }
}

.contact-main-wrap {
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 540px) {
    height: 400px;
  }

  @media (min-width: 1430px) {
    max-width: 100%;
    height: 570px;
    margin: 0;
  }
}

.contact-main__map {
  position: relative;
  border-radius: 25px;
  width: 100%;
  height: 400px;
  overflow: hidden;
  z-index: 300;
  background: var(--gray);

  @media (min-width: 540px) {
    height: 100%;
  }
}

.contact-main__map--hidden {
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 400;
    content: "";
  }
}

.contact-main__map--popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--white);
  border-radius: 0;

  & > * {
    animation: contactMainPopup 1s linear 0s;
  }
}

@keyframes contactMainPopup {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.contact-main__desc {
  position: relative;
  display: grid;
  padding: 20px;
  box-shadow: 0px 0px 30px rgba(133, 147, 159, 0.3);
  border-radius: 15px;
  background: var(--white);
  z-index: 400;
  transform: translateY(-20px);

  @media (min-width: 540px) {
    position: absolute;
    top: 45px;
    right: 64px;
    transform: translateY(0px);
  }

  @media (min-width: 1430px) {
    padding: 30px 50px 30px 30px;
    top: 100px;
    right: 230px;
  }
}

#contact-main-desc-exit.contact-main__desc {
  top: 0px;
  right: 0px;
}

.contact-main__desc-list {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;

  @media (min-width: 769px) {
    margin-bottom: 20px;
    gap: 15px;
  }
}

.contact-main__desc-list-icon {
  background: var(--red);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 12px;
    height: 12px;
  }

  @media (min-width: 769px) {
    width: 28px;
    height: 28px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
}

.contact-main__desc-btn {
  position: relative;
  margin-top: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  height: 50px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: var(--white);
  border-radius: 6px;
  border: none;
  background: var(--gray);
  cursor: pointer;
}

.contact-main__desc-list-text {
  display: grid;
  gap: 5px;
}

.contact-main__desc-list-text p {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--blackMain);

  @media (min-width: 769px) {
    font-size: 16px;
    line-height: 19px;
  }
}
</style>