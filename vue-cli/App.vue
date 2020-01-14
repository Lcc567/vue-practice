<template>
  <div>
    <Menu :data="data"></Menu>
  </div>
</template>

<script>
import Menu from "./menu";
export default {
  components: {
    Menu
  },
  data() {
    return {
      data: [
        {
          name: "导航一",
          id: 1,
          children: [
            {
              name: "导航二",
              id: 2,
              children: [{
                name: '导航6',
                id: 6
              }]
            }
          ]
        },
        {
          name: "导航三",
          id: 3,
          children: [
            {
              name: "导航五",
              id: 5
            }
          ]
        },
        {
          name: "导航四",
          id: 4
        }
      ]
    };
  }
};
</script>

<style>
</style>