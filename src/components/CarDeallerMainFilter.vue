<template lang="pug">
section.main-filter
  .container
    .main-filter-wrap
      CarDeallerMainFilterList(:info="mainFilter")
      CarDeallerMainFilterForm(:info="mainFilter.form")
</template>
<script>
import { mapGetters } from "vuex";
import CarDeallerMainFilterList from "./parts/CarDeallerMainFilterList.vue";
import CarDeallerMainFilterForm from "./parts/CarDeallerMainFilterForm.vue";

export default {
  computed: {
    ...mapGetters(["mainFilter"]),
  },
  components: {
    CarDeallerMainFilterList,
    CarDeallerMainFilterForm,
  },
};
</script>
<style scoped lang="scss">
.main-filter {
  position: relative;
  overflow: hidden;
  z-index: 300;
  margin: 20px 0 30px;
}

.main-filter-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 1430px) {
    padding: 30px;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    gap: 0;
    background: var(--gray400);
    border-radius: 11px;
  }
}
</style>
