<template>
  <div>
    <div v-for="a in arr" :key="a">
      <!-- 此时的插槽，如果父组件有传入，则使用父组件传入的，如果没有传入，则使用slot内部默认的 -->
      <slot :a="a">
        <span>lsit</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array
    }
  }
};
</script>

<style>
</style>