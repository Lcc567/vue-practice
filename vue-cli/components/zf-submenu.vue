<template>
  <li>
    <span @click="change">
      <slot name="title" ></slot>
    </span>
    <ul v-if="isShow">
      <slot name="default"></slot>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return { isShow: false };
  },
  methods: {
    change() {
      console.log(1);

      this.isShow = !this.isShow;
    }
  }
};
</script>

<style>
</style>