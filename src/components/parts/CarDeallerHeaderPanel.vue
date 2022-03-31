<template lang="pug">
section.header__panel
  .container
    ul.header__panel-list
      li.header__panel-list-item(v-for="item in info.list", :key="item")
        a.header__panel-list-item-link(v-if="item.typeLink", :href="item.link")
          SvgIcon(:name="item.img")
          span(:class="item.plusClass") {{ item.text }}
        h4.header__panel-list-item-title(v-else)
          SvgIcon(:name="item.img")
          span {{ item.text }}
    .header__panel-phone
      a.header__panel-phone-link(:href="'tel:' + info.phone.numberLink") {{ info.phone.number }}
      button.header__panel-phone-button(type="button")
        SvgIcon(:name="info.phone.icon")
        span {{ info.phone.text }}
</template>
<script>
import SvgIcon from "../SvgIcon.vue";

export default {
  props: {
    info: Object,
  },
  components: {
    SvgIcon,
  },
};
</script>
<style scoped lang="scss">
.header__panel {
  position: relative;
  padding: 12px 0;
  overflow: hidden;
  z-index: 500;
  background: var(--gray400);
}

.header__panel-list {
  position: relative;
  display: none;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.header__panel-list-item-link,
.header__panel-list-item-title {
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    position: relative;
    margin-left: 8px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-transform: capitalize;
    color: var(--gray);
    transition: color 0.3s ease;
  }

  svg {
    position: relative;
    width: 18px;
    height: 18px;
    object-fit: contain;
    object-position: center;
    fill: var(--gray);
    transition: fill 0.3s ease;
  }
}

.header__panel-list-item-link--decor {
  text-decoration: underline;
}

.header__panel-list-item-link:hover {
  span {
    color: var(--red);
  }

  svg {
    fill: var(--red);
  }
}

.header__panel-phone {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 769px) {
    display: none;
  }
}

.header__panel-phone-link {
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  text-align: right;
  text-transform: uppercase;
  color: var(--blackMain);

  @media (min-width: 414px) {
    font-size: 16px;
    line-height: 16px;
  }
}

.header__panel-phone-button {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  text-align: right;
  color: var(--red);
  background: transparent;
  border: 0;
  cursor: pointer;

  @media (min-width: 414px) {
    font-size: 16px;
    line-height: 16px;
  }

  svg {
    width: 12px;
    height: 12px;

    @media (min-width: 414px) {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    }
  }
}
</style>