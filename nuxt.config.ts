// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //   buildModules: ["@nuxtjs/style-resources", "nuxt-vite"],
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    useStylesheet: true,
  },
  css: [
    "assets/style/main.scss",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
