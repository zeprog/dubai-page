<template>
  <div class="slider"
    ref="el"
    :style="{
      cursor: isDragging ? 'grabbing' : 'grab',
      scrollSnapType: isDragging ? '' : '',
    }"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <div v-for="(card, i) of cards" :key="i" class="slider__slide startAnimate">
      <Card :card="card" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Card from '@/components/Card.vue'
export default {
  components: {
    Card
  },
  data() {
    return {
      isDragging: false,
      cursorPos: [0, 0],
      el: null,
    }
  },
  computed: {
    ...mapState(['cards'])
  },
  methods: {
    onMouseDown(e) {
      this.cursorPos = [e.pageX, e.pageY];
      this.isDragging = true;

      window.addEventListener("mousemove", this.onMouseHold);
    },

    onMouseUp() {
      window.removeEventListener("mousemove", this.onMouseHold);
      this.isDragging = false;
    },

    onMouseHold(ev) {
      ev.preventDefault();

      requestAnimationFrame(() => {
        const delta = [
          ev.pageX - this.cursorPos[0],
          ev.pageY - this.cursorPos[1],
        ];

        this.cursorPos = [ev.pageX, ev.pageY];

        if (!this.$refs.el) return;
        this.$refs.el.scrollBy({
          left: -delta[0],
          top: -delta[1],
        });
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.slider {
  display: flex;
  overflow-x: auto;
  position: relative;
  &__slide {
    padding: 40px 0 35px;
    position: relative;
    margin: 0 12.5px;
    &.startAnimate {
      animation-name: startAnimate;
      animation-duration: 2s;
    }
    &:first-child {
      margin-left: 580px;
      @media (max-width: 768px) {
        margin-left: 12.5px;
      }
    }
    &:last-child {
      margin-right: 60px;
    }
  }
}
@keyframes startAnimate {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  75% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>