import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: 1,
        type: 'card',
        topEn: 100,
        topRu: 50,
        title: 'card.title[0]',
        text: 'card.text[0]',
        imgRu: ['minimap1-ru.png'],
        imgEn: ['minimap1-en.png'],
        button: 'card.button',
        hrefEn: 'https://realiste.io/search?utm_anim=1en',
        hrefRu: 'https://realiste.io/search?utm_anim=2'
      },
      {
        id: 2,
        type: 'card',
        topEn: 50,
        topRu: 100,
        title: 'card.title[1]',
        text: 'card.text[1]',
        imgRu: ['minimap2-ru.png'],
        imgEn: ['minimap2-en.png'],
        button: 'card.button',
        hrefEn: 'https://realiste.io/search?utm_anim=2en',
        hrefRu: 'https://realiste.io/search?utm_anim=1'
      },
      {
        id: 3,
        type: 'card',
        top: 30,
        title: 'card.title[2]',
        text: 'card.text[2]',
        img: ['city.png', 'sea.png', 'sky.png', 'desert.png'],
        button: 'card.button',
        hrefRu: 'https://realiste.io/search?utm_anim=3',
        hrefEn: 'https://realiste.io/search?utm_anim=3en'
      },
      {
        id: 4,
        type: 'menu',
        title: 'card.title[3]',
        text: 'card.text[3]',
        img: ['apartments.png'],
        background: 'apartmentsBG.png',
        button: 'card.button',
        hrefEn: 'https://ae.realiste.io/?cenLat=25.07704324&cenLng=55.133523&zoom=12&selectedCity=Dubai&discountFromPriceMarketMin=0.03&discountFromPriceMarketMax=0.4&priceMax=1000000',
        hrefRu: 'https://ru-ae.realiste.io/?cenLat=25.07704324&cenLng=55.133523&zoom=12&discountFromPriceMarketMin=0.03&discountFromPriceMarketMax=0.4&priceMin&priceMax&selectedCity=Dubai&payExtraGetCash=both'
      },
      {
        id: 5,
        type: 'menu',
        title: 'card.title[4]',
        text: 'card.text[4]',
        img: ['deals.png'],
        background: 'dealsBG.png',
        button: 'card.button',
        hrefEn: 'https://ae.realiste.io/?cenLat=25.07704324&cenLng=55.133523&zoom=12&selectedCity=Dubai&discountFromPriceMarketMin=0.03&discountFromPriceMarketMax=0.4&priceMax=1000000',
        hrefRu: 'https://ru-ae.realiste.io/?cenLat=25.07704324&cenLng=55.133523&zoom=12&discountFromPriceMarketMin=0.03&discountFromPriceMarketMax=0.4&priceMin&priceMax&selectedCity=Dubai&payExtraGetCash=both'
      },
      {
        id: 6,
        type: 'menu',
        title: 'card.title[5]',
        text: 'card.text[5]',
        img: ['trade.png'],
        background: 'tradeUpBG.png',
        button: 'card.button',
        hrefEn: 'https://ae.realiste.io/trade-up',
        hrefRu: 'https://ru-ae.realiste.io/trade-up'
      },
      {
        id: 7,
        type: 'menu',
        title: 'card.title[6]',
        text: 'card.text[6]',
        img: ['estimation.png'],
        background: 'estimationBG.png',
        button: 'card.button',
        hrefEn: 'https://ae.realiste.io/object-evaluation',
        hrefRu: 'https://ru-ae.realiste.io/object-evaluation'
      },
      {
        id: 8,
        type: 'menu',
        title: 'card.title[7]',
        text: 'card.text[7]',
        img: ['price-index.png'],
        background: 'indexBG.png',
        button: 'card.button',
        hrefEn: 'https://ae.realiste.io/map-analytics?activeLayer=color_index_median_price-1',
        hrefRu: 'https://ru-ae.realiste.io/map-analytics?activeLayer=color_index_median_price-1'
      }
    ],
    navigation: [
      {
        img: 'apartments.svg',
        text: 'nav[0]',
        hrefRu: 'https://ru-ae.realiste.io/?selectedCity=Dubai&cenLat=25.07704324&cenLng=55.133523&zoom=12&discountFromPriceMarketMin=0.03&discountFromPriceMarketMax=0.4',
        hrefEn: 'https://ae.realiste.io/?selectedCity=Dubai&cenLat=25.07704324&cenLng=55.133523&zoom=12&discountFromPriceMarketMin=0.03&discountFromPriceMarketMax=0.4&priceMax=1000000'
      },
      {
        img: 'deals.svg',
        text: 'nav[1]',
        hrefRu: 'https://ru-ae.realiste.io/?selectedCity=Dubai&cenLat=25.07704324&cenLng=55.133523&zoom=12&discountFromPriceMarketMin=0.03&discountFromPriceMarketMax=0.4',
        hrefEn: 'https://ae.realiste.io/?selectedCity=Dubai&cenLat=25.047498410668588&cenLng=55.17254886368043&zoom=12&discountFromPriceMarketMin=0.03&discountFromPriceMarketMax=0.4&priceMax=1000000'
      },
      {
        img: 'estimation.svg',
        text: 'nav[2]',
        hrefRu: 'https://ru-ae.realiste.io/object-evaluation',
        hrefEn: 'https://ae.realiste.io/object-evaluation'
      },
      {
        img: 'tradeUp.svg',
        text: 'nav[3]',
        hrefRu: 'https://ru-ae.realiste.io/trade-up',
        hrefEn: 'https://ae.realiste.io/trade-up'
      },
      {
        img: 'index.svg',
        text: 'nav[4]',
        hrefRu: 'https://ru-ae.realiste.io/map-analytics?activeLayer=color_index_median_price-1',
        hrefEn: 'https://ae.realiste.io/map-analytics?activeLayer=color_index_median_price-1'
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
