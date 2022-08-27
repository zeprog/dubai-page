<template>
  <nav class="navigation">
    <NavigationItem v-for="(navItem, i) of navigation" :key="i" :nav="navItem" />
  </nav>
</template>

<script>
import { mapState } from 'vuex';
import NavigationItem from '@/components/NavigationItem.vue';
export default {
  components: {
    NavigationItem
  },
  computed: {
    ...mapState(['navigation'])
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: center;
  &-item {
    margin: 0 25px;
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
    }
  }
  @media (max-width: 768px) {
    justify-content: space-between;
    &__item {
      &__img {
        img {
          width: 70px;
          height: 70px;
        }
      }
    }
  }
}
</style>