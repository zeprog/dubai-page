import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueI18n from 'vue-i18n'
import VueDragscroll from 'vue-dragscroll'
import './assets/style.scss'

Vue.config.productionTip = false
Vue.use(VueDragscroll)

Vue.use(VueI18n)


const i18n = new VueI18n({
  messages: {
    'ru': Object.assign(require("@/locales/ru.json")),
    'en': Object.assign(require("@/locales/en.json"))
  },
  locale: 'ru',
})


new Vue({
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
