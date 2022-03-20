<template lang="pug">
section.header__panel
  .container
    ul.header__panel-list
      li.header__panel-list-item(v-for="item in info.list", :key="item")
        a.header__panel-list-item-link(v-if="item.typeLink", :href="item.link")
          img(:src="require('@/assets/img/' + item.img)")
          span {{ item.text }}
        h4.header__panel-list-item-title(v-else)
          img(:src="require('@/assets/img/' + item.img)")
          span {{ item.text }}
</template>
<script>
export default {
  props: {
    info: Object,
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

  img {
    position: relative;
    width: 18px;
    height: 18px;
    object-fit: contain;
    object-position: center;
    transition: fill 0.3s ease;
  }
}

.header__panel-list-item-link:hover {
  span {
    color: var(--red);
  }

  img {
    fill: var(--red);
  }
}
</style>