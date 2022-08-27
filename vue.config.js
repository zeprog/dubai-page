const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    i18n: {
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          name: 'EN',
          file: 'en.json',
        },
        {
          code: 'ru',
          iso: 'ru-RU',
          name: 'RU',
          file: 'ru.json',
        },
      ],
      lazy: true,
      langDir: 'locales/',
      defaultLocale: 'ru',
      detectBrowserLanguage: {
        alwaysRedirect: false,
        fallbackLocale: 'en',
        onlyOnRoot: true,
      },
    }
  }
})
