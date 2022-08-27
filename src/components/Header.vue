<template>
  <header class="header">
    <img v-if="$i18n.locale === 'ru'" src="@/static/img/logoru.png" alt="">
    <img v-else src="@/static/img/logoen.png" alt="">
  </header>
</template>

<style lang="scss" scoped>
.header {
  margin: auto;
  position: relative;
  top: 0;
  width: 100%;
  padding: 12px 0 3px;
  img {
    width: 145px;
  }
}
</style>