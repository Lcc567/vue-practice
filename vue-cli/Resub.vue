<template>
  <zf-submenu v-if="data.children" :key="data.id">
    <template slot="title">{{data.name}}</template>
    <template v-for="menu in data.children">
      <Sub :data="menu" :key="menu.id" v-if="menu.children"></Sub>
      <zf-menu-item :key="menu.id" v-else>{{menu.name}}</zf-menu-item>
    </template>
  </zf-submenu>
</template>

<script>
// import zfMenu from "./components/zf-menu";
// import zfMenuItem from "./components/zf-menu-item";
// import zfSubmenu from "./components/zf-submenu";
export default {
  // 递归组件,可以在当前组件中使用注册的名字,使用自己
  name: "Sub",
  //   components: {
  //     zfMenu,
  //     zfMenuItem,
  //     zfSubmenu
  //   },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style>
</style>