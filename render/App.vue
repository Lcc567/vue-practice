<template>
  <div>
    <!-- <Level type="1">hello!!!</Level>
    <Level type="2">hello!!!</Level>
    <Level type="3">hello!!!</Level>
    <Level type="4">hello!!!</Level>
    <Level type="5">hello!!!</Level>-->

    <List :arr="arr">
      <!-- <slot  v-slot="a">{{a}}</slot> -->
      <!-- <template slot-scope="{a}">{{a}}</template> -->
      <template v-slot="{a}">{{a}}</template>
      <!-- <slot  slot-scope="{a}">{{a}}</slot> -->
    </List>
  </div>
</template>

<script>
import Level from "./Level";
import List from "./List";
export default {
  data() {
    return { arr: [1, 2, 3] };
  },
  components: {
    Level,
    List
  }
};
</script>

<style>
</style>