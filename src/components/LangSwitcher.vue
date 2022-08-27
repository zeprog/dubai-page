<template>
  <div class="switcher">
    <img src="@/static/img/icons/globe.svg" alt="">
    <div class="switcher__dropdown">
      <li v-for="(lang, i) of langs" :key="i" @click="changeLang(lang.locale)">{{ lang.name }}</li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      langs: [
        {
          name: 'Русский',
          locale: 'ru'
        }, 
        {
          name: 'English',
          locale: 'en'
        }
      ]
    }
  },
  methods: {
    // openDropdown() {
    //   this.isOpen = true
    // },
    // closeDropdown() {
    //   this.isOpen = false
    // },
    changeLang(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style lang="scss">
.switcher {
  position: relative;
  transition: .3s;
  &__dropdown {
    background-color: #ffffff;
    text-align: left;
    max-width: 100px;
    border-radius: 5px;
    box-shadow: 0px 0px 7px 0px rgb(0, 0, 0, 0.2);
    padding: 0;
    padding: 18px 20px;
    position: absolute;
    z-index: 100;
    transition: .3s;
    top: 50px;
    right: -35px;
    opacity: 0;
    &:hover {
      opacity: 1;
      height: auto;
      width: 100px;
    }
    li {
      list-style: none;
      padding: 0;
      cursor: pointer;
      font-family: 'Arial', sans-serif;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 12px;
      &:last-child {
        margin: 0;
      }
    }
    &::before {
      content: "";
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      left: 20px;
      top: -25px;
      border: 15px solid transparent;
      border-bottom: 15px solid #fff;
      z-index: 10;
    }
  }
  img {
    cursor: pointer;
    width: 31px;
    position: relative;
    transition: .3s;
    &:hover {
      & + .switcher__dropdown {
        opacity: 1;
        padding: 18px 20px;
        height: auto;
        width: 100px;
      }
  }
  // &:hover {
  //   margin: 0 auto;
  //   width: 100px;
  //   transition: .3s;
  //   & .switcher__dropdown {
  //     visibility: visible;
  //     opacity: 1;
  //     padding: 18px 20px;
  //     height: auto;
  //     width: 100px;
  //     // transition: .3s;
  //   }
  }
}
</style>