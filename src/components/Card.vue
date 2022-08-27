<template>
  <div class="card" :class="{'align-items': card.type === 'menu'}">
    <div class="card__background"></div>
    <a :href="href">
      <div class="card__content" v-if="card.type === 'card'">
        <div class="card__top">
          <img src="@/static/img/icons/bolt.svg" alt="">
          <p>TOP {{ top }}</p>
        </div>
        <div class="card__text-block">
          <h2 class="card__text-title" :class="{'card__text-title-min': card.id === 3}">{{ $t(card.title) }}</h2>
          <p :class="{'text': card.id === 3}">{{ $t(card.text) }}</p>
          <a class="card__text-button" :href="href">{{ $t(card.button) }}</a>
        </div>
        <div class="card__images">
          <div v-for="(img, i) of image" :key="i" class="card__image" :class="{'card__image-block': card.img}">
            <img :class="{'card-img': card.img}" :src="require(`@/static/img/${img}`)" alt="" />
          </div>
        </div>
      </div>
      <div class="card__content" v-else>
        <div class="card__text-block text-center">
          <img :src="require(`@/static/img/${card.background}`)" alt="" class="card__text-background">
          <div v-for="(img, i) of image" :key="i">
            <img :src="require(`@/static/img/icons/${img}`)" alt="" class="card__text-img" />
          </div>
          <h2 class="card__text-title">{{ $t(card.title) }}</h2>
          <p :class="{'text': card.id === 3}">{{ $t(card.text) }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object
    }
  },
  computed: {
    top() {
      if(this.card.top) {
        return this.card.top
      }
      return this.$i18n.locale === 'ru' ? this.card.topRu : this.card.topEn
    },
    href() {
      if(this.card.href) {
        return this.card.href
      }
      return this.$i18n.locale === 'ru' ? this.card.hrefRu : this.card.hrefEn
    },
    image() {
      if(this.card.img) {
        return this.card.img
      }
      return this.$i18n.locale === 'ru' ? this.card.imgRu : this.card.imgEn
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 20px;
  background-position: center center;
  width: 380px;
  position: relative;
  box-shadow: 2px 6px 20px 4px rgb(0, 0, 0, 0.2);
  padding: 30px 10px 10px;
  height: 530px;
  display: flex;
  justify-content: center;
  &.align-items {
    align-items: center;
  }
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background-color: #ffffff;
    border-radius: 20px;
  }
  &__content {
    position: relative;
    z-index: 1;
  }
  &__top {
    margin: 0 0 30px 10px;
    background-image: url('@/static/img/top.gif');
    width: 90px;
    border-radius: 50px;
    display: flex;
    padding: 5px;
    justify-content: center;
    p {
      color: #ffffff;
      font-size: 14px;
      font-weight: 700;
      margin: 0 0 0 5px;
    }
  }
  &__text {
    &-block {
      margin-left: 10px;
      margin-bottom: 30px;
      text-align: start;
      &.text-center {
        text-align: center;
      }
      p {
        color: #202124;
        font-size: 24px;
        font-family: 'Lato',Arial,sans-serif;
        line-height: 1.2;
        font-weight: 500;
        margin-bottom: 15px;
      }
      .text {
        margin-top: -30px;
      }
    }
    &-title {
      color: #202124;
      font-size: 35px;
      font-family: 'Lato',Arial,sans-serif;
      line-height: 1.1;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 15px;
    }
    &-img {
      width: 65px;
      height: 65px;
      position: relative;
      z-index: 2;
    }
    &-button {
      color: #202124;
      font-size: 20px;
      font-family: 'Lato',Arial,sans-serif;
      line-height: 1.55;
      font-weight: 700;
      border-radius: 30px;
      background-color: #ffffff;
      text-decoration: none;
      padding: 10px 15px;
      text-align: center;
      margin-bottom: 30px;
    }
    &-background {
      position: absolute !important;
      width: 360px !important;
      height: auto !important;
      bottom: -25%;
      left: 0%;
    }
  }
  &__images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    img {
      width: 100%;
      border-radius: 20px;
      box-shadow: 0px 2px 4px 2px rgb(0, 0, 0, 0.1);
      &.card__image {
        width: 100% !important;
      }
    }
  }
  &__image-block {
    width: 48% !important;
    height: 100px;
  }
  @media (max-width: 768px) {
    height: 420px;
    width: 300px;
    &__image {
      width: 100%;
      img {
        height: 125px;
      }
    }
    &__text {
      &-title {
        font-size: 28px;
      }
      &-block {
        p {
          font-size: 18px;
        }
      }
      
    }
    &__image-block {
      height: 67px !important;
      img {
        height: 90%;
      }
    }
  }
}
</style>