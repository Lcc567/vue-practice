<template>
  <zf-menu>
    <template v-for="menu in data">
      <Resub :data="menu" v-if="menu.children" :key="menu.id"></Resub>
      <zf-menu-item v-else :key="menu.id">{{menu.name}}</zf-menu-item>
    </template>
  </zf-menu>
</template>

<script>

export default {
  props: {
    data: {
      type: Array,
      default: () => [1, 2, 3]
    }
  }
};
</script>

<style>
</style>