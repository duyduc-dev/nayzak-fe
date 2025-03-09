// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)), // Alias for src/
  },

  css: ["@/assets/styles/main.css"],
  pages: true,
  ssr: true,

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@nuxt/icon",
    "@formkit/auto-animate/nuxt",
    "@vueuse/nuxt",
    "vue3-carousel-nuxt",
  ],
  googleFonts: {
    families: {
      Roboto: true,
      Poppins: true,
      Inter: true,
      SpaceGrotesk: true,
    },
  },
  i18n: {
    locales: [{ code: "en", iso: "en-US", file: "en.json" }],
    defaultLocale: "en",
    vueI18n: "i18n.config.ts",
    langDir: fileURLToPath(new URL("./locales", import.meta.url)), // Alias for src/
  },
});
