<template>
  <div id="app">
    <Header />
    <div class="lang-switcher">
      <LangSwitcher />
    </div>
    <Slider class="slider-block" />
    <Navigation class="nav" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import LangSwitcher from '@/components/LangSwitcher.vue';
import Slider from '@/components/Slider.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Header,
    LangSwitcher,
    Slider,
    Navigation
  },
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
  @media (max-width: 768px) {
    overflow-x: hidden;
  }
}
.lang-switcher {
  position: absolute;
  right: 70px;
  top: 15px;
  @media (max-width: 768px) {
    right: 30px;
  }
}
.nav {
  position: relative;
  z-index: 2;
  margin-top: 10px;
  @media (max-width: 768px) {
    position: relative;
  }
}
</style>
