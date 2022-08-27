<template>
  <div id="app">
    <Loader v-if="loading" />
    <div class="content " v-else>
      <Header class="content__header startAnimate" />
      <div class="lang-switcher startAnimate">
        <LangSwitcher />
      </div>
      <Slider class="slider-block" />
      <Navigation class="nav startAnimateNav" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import LangSwitcher from '@/components/LangSwitcher.vue';
import Slider from '@/components/Slider.vue';
import Navigation from '@/components/Navigation.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'App',
  components: {
    Header,
    LangSwitcher,
    Slider,
    Navigation,
    Loader
},
  data() {
    return {
      loading: true,

    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url('@/static/img/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  // position: absolute;
  @media (max-width: 768px) {
    overflow-x: hidden;
    position: absolute;
  }
}
.content {
  &__header {
    &.startAnimate {
      animation-name: startAnimate;
      animation-duration: 1s;
    }
  }
}
.lang-switcher {
  position: absolute;
  right: 70px;
  top: 15px;
  &.startAnimate {
    animation-name: startAnimate;
    animation-duration: 1s;
  }
  @media (max-width: 768px) {
    right: 35px;
  }
}
.nav {
  position: relative;
  z-index: 2;
  margin-top: 10px;
  &.startAnimateNav {
    animation-name: startAnimateNav;
    animation-duration: 1s;
  }
  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
}
@keyframes startAnimate {
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes startAnimateNav {
  0% {
    opacity: 0;
    transform: translateY(200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
