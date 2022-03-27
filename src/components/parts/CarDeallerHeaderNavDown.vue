<template lang="pug">
.header__nav-down
  .header__nav-down-dropdowns
    ul.header__nav-down-dropdowns-list
      li.header__nav-down-dropdowns-list-item(
        v-for="item in infoDown.dropdownList",
        :key="item"
      )
        router-link.header__nav-down-dropdowns-list-item-link(:to="item.link") {{ item.text }}
  .header__nav-down-btns
    ul.header__nav-down-btns-list
      li.header__nav-down-btns-list-item(
        v-for="item in infoDown.btnsList",
        :key="item"
      )
        component(:is="item.type")
          SvgIcon(:name="item.icon")
</template>
<script>
import SvgIcon from "../SvgIcon.vue";

export default {
  props: {
    infoDown: Object,
  },
  components: {
    SvgIcon,
  },
};
</script>
<style scoped lang="scss">
</style>