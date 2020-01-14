<template>
  <div>
    <Swiper v-model="selected" autoplay>
      <SwiperItem name="box1">
        <div class="content content1">content1</div>
      </SwiperItem>
      <SwiperItem name="box2">
        <div class="content content2">content2</div>
      </SwiperItem>
      <SwiperItem name="box3">
        <div class="content content3">content3</div>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import Swiper from "./components/Swiper";
import SwiperItem from "./components/SwiperItem";
export default {
  data() {
    return { selected: "box1" };
  },
  components: {
    Swiper,
    SwiperItem
  },
  mounted() {
    // setTimeout(() => {
    //   this.selected = "box3";
    // }, 3000);
  }
};
</script>

<style>
.content {
  width: 300px;
  height: 150px;
}
.content1 {
  background: red;
}
.content2 {
  background: blue;
}
.content3 {
  background: yellow;
}
</style>