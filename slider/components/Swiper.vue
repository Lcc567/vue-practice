<template>
  <div
    class="swiper"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
  >
    <div class="viewport">
      <slot></slot>
    </div>
    <div class="dots">
      <span
        v-for="(dot, index) in len"
        :key="index"
        :class="{active: active === index}"
        @click="select(index)"
      >{{index}}</span>
    </div>
    <div class="arrow">
      <button @click="select(active - 1)">左边</button>
      <button @click="select(active + 1)">右边</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    active() {
      return this.names.indexOf(this.currentSelected);
    }
  },
  data() {
    return { currentSelected: "", len: 0 };
  },
  methods: {
    touchstart(e) {
      console.log(e.touches[0]);

      this.startX = e.touches[0].clientX;
    },
    touchsmove() {},
    touchend() {},
    select(newIndex) {
      this.prePosition = this.active;

      if (newIndex === this.names.length) newIndex = 0;
      if (newIndex == -1) newIndex = this.names.length - 1;
      this.$emit("input", this.names[newIndex]);
    },
    showChild() {
      this.currentSelected = this.value || this.$children[0].name;
      this.$children.forEach(vm => {
        this.$nextTick(() => {
          vm.selected = this.currentSelected;
        });
        let reverse = this.prePosition > this.active ? true : false;
        vm.reverse = reverse;
        // 判断临界值
        if (this.prePosition === this.len - 1 && this.active === 0) {
          vm.reverse = false;
        }
        if (this.prePosition === 0 && this.active === this.len - 1) {
          vm.reverse = true;
        }
      });
    },
    run() {
      if (this.autoplay) {
        this.timer = setInterval(() => {
          const index = this.active;
          let newIndex = index - 1;
          this.select(newIndex);
        }, 3000);
      }
    },
    mouseenter() {
      clearInterval(this.timer);
      this.timer = null;
    },
    mouseleave() {
      if (!this.timer) {
        this.run();
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  watch: {
    value() {
      this.showChild();
    }
  },
  mounted() {
    this.names = this.$children.map(child => child.name);
    this.len = this.names.length;
    this.showChild();
    // 自动轮播
    this.run();
    // 控制动画的方向
    this.prePosition = this.active;
  }
};
</script>

<style>
.swiper {
  width: 100%;
  border: 10px solid green;
  margin: 0 auto;
}
.viewport {
  position: relative;
  height: 150px;
  overflow: hidden;
}
.dots {
  display: flex;
  justify-content: center;
}
.dots span {
  text-align: center;
  line-height: 30px;
  height: 30px;
  width: 30px;
  margin: 0 10px;
  border-radius: 50%;
  border: 1px solid #123df1;
}
.active {
  background: red;
}
</style>