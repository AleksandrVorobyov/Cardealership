<template lang="pug">
.header__nav-down
  .header__nav-down-dropdowns
    ul.header__nav-down-dropdowns-list
      li.header__nav-down-dropdowns-list-item(
        v-for="item in infoDown.dropdownList",
        :key="item"
      )
        router-link.header__nav-down-dropdowns-list-item-link(:to="item.link")
          span {{ item.text }}
          SvgIcon(v-if="item.icon", :name="infoDown.dropdownIcon")
  .header__nav-down-btns
    ul.header__nav-down-btns-list
      li.header__nav-down-btns-list-item(
        v-for="item in infoDown.btnsList",
        :key="item"
      )
        component(:is="item.type", :href="item.link")
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
.header__nav-down {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.header__nav-down-dropdowns {
  max-width: 1169px;
  width: 100%;

  @media (max-width: 1270px) {
    display: none;
  }
}

.header__nav-down-dropdowns-list {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.header__nav-down-dropdowns-list-item {
  display: flex;
}

.header__nav-down-dropdowns-list-item-link {
  position: relative;
  padding: 10px 0px;
  position: relative;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: var(--blackMains);

  & > span + svg {
    margin-left: 10px;
  }

  svg {
    fill: var(--gray);
    transition: fill 0.5s ease;
  }
}

.header__nav-down-dropdowns-list-item-link:hover {
  &::before {
    width: 80%;
  }
  &::after {
    width: 30%;
  }
  svg {
    fill: var(--red);
  }
}

.header__nav-down-dropdowns-list-item-link::before,
.header__nav-down-dropdowns-list-item-link::after {
  position: absolute;
  content: "";
  left: 0;
  height: 4px;
  transition: width 0.5s ease;
}

.header__nav-down-dropdowns-list-item-link::before {
  bottom: 0px;
  width: 0%;
  background: var(--red);
  background: linear-gradient(-135deg, transparent 4px, var(--red) 0);
}

.header__nav-down-dropdowns-list-item-link::after {
  bottom: 4px;
  width: 0%;
  background: var(--redWithWhite);
  background: linear-gradient(-135deg, transparent 4px, var(--redWithWhite) 0);
}

.header__nav-down-dropdowns-list-item-link > svg {
  width: 12px;
  height: 12px;
  object-fit: contain;
  object-position: center;
}

.header__nav-down-btns {
  display: flex;
  align-items: center;
}

.header__nav-down-btns-list {
  position: relative;
  display: flex;
  gap: 20px;

  @media (min-width: 414px) {
    gap: 40px;
  }
}

.header__nav-down-btns-list-item {
  & > button {
    position: relative;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  svg {
    fill: none;
    stroke: var(--gray);
    stroke-width: 2px;
    transition: stroke 0.3s ease;

    width: 20px;
    height: 20px;

    @media (min-width: 769px) {
      width: 24px;
      height: 24px;
    }
  }

  &:hover svg {
    stroke: var(--red);
  }
}
</style>