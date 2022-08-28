<template>
  <div class="navigation__item">
    <a :href="href" class="navigation-item">
      <div class="navigation-item__img">
        <img :src="require(`@/static/img/icons/${nav.img}`)" alt="">
      </div>
      <h3 class="navigation-item__title" v-scroll="handleScroll">{{ $t(nav.text) }}</h3>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
      required: true
    }
  },
  computed: {
    href() {
      return this.$i18n.locale === 'ru' ? this.nav.hrefRu : this.nav.hrefEn
    },
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  &__item {
    margin: 0 25px;
  }
  &-item {
    &__img {
      img {
        width: 50px;
        height: 50px;
      }
    }
    &__title {
      color: #4a4949;
      font-size: 18px;
      font-family: 'Lato',Arial,sans-serif;
      font-weight: 600;
      margin-top: 10px;
    }
  }
  @media (max-width: 768px) {
    &__item {
      margin: 0;
    }
    &-item {
      &__img {
        img {
          width: 40px;
          height: 40px;
        }
      }
      &__title {
        font-size: 16px;
      }
    }
  }
}
</style>