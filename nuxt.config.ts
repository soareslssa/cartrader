// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: "minimum-scale=1, initial-scale=1, width=device-width",
      title: "Cartrader"
    }
  },
  colorMode: {
    preference: 'light'
  },
  ui: {
    icons: ['material-symbols']
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],
})
