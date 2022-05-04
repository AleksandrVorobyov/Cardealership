<template lang="pug">
section.card-stock
  .container
    .card-stock-wrap
      h2.card-stock__title {{ cardStock.title }}
      .card-stock__cards
        CarDeallerCard(
          v-for="item in cardStock.activeCards",
          :key="item",
          :info="item"
        )
      Splide(:options="cardStock.sliderOptions")
        SplideSlide(v-for="item in cardStock.cards")
          CarDeallerCard(:info="item")
      button.card-stock__btn.btn-shiny-anim.btn-main-red(
        type="button",
        @click="moreCards()"
      ) 
        span {{ cardStock.btn }}
</template>
<script>
import { mapGetters } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import CarDeallerCard from "./parts/CarCard.vue";
export default {
  computed: {
    ...mapGetters(["cardStock", "cardStockOutput"]),
  },
  components: {
    CarDeallerCard,
    Splide,
    SplideSlide,
  },
  methods: {
    moreCards() {
      this.$store.dispatch("moreCards");
    },
    activeCards() {
      this.$store.commit("activeCards");
    },
  },
  mounted() {
    this.activeCards();
  },
};
</script>
<style scoped lang="scss">
.card-stock {
  position: relative;
  margin: 20px 0;
  overflow: hidden;
  z-index: 500;
  background: white;
}

.container {
  padding: 0;
  max-width: 100%;

  @media (min-width: 1430px) {
    max-width: 1430px;
    padding: 0 15px;
  }
}

.card-stock .splide {
  @media (min-width: 1430px) {
    display: none;
  }

  @media (min-width: 769px) {
    .card {
      margin: 20px 0;
    }
  }

  .card {
    margin: 10px 0;
  }
}

.card-stock-wrap {
  position: relative;
}

.card-stock__title {
  padding: 0px 10px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: var(--blackMain);

  @media (min-width: 769px) {
    font-size: 40px;
    line-height: 47px;
    text-align: center;
    padding: 0;
  }

  @media (min-width: 1430px) {
    margin-bottom: 65px;
  }
}

.card-stock__cards {
  display: none;
  @media (min-width: 1430px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    margin-bottom: 30px;
  }
}

.card-stock__btn {
  display: none;

  @media (min-width: 1430px) {
    position: relative;
    width: 100%;
    max-width: 320px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    height: 65px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: white;
    background: var(--gray);
    cursor: pointer;
    border: none;
    border-radius: 6px;
  }
}
</style>