// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
        title: "My Awesome Website",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "This is my awesome website" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    }
  },

  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    '@nuxtjs/i18n',
    '@formkit/auto-animate/nuxt',
    '@pinia/nuxt'
  ],
  image: {
    quality: 80,
    format: ['webp']
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
  },

  i18n: {
    legacy: false,
    locales: [
      { code: 'en', name: 'English', iso: 'en-US' },
      { code: 'id', name: 'Indonesia', iso: 'id-ID' }
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts'
  },

  postcss: {
    plugins: {
      tailwindcss: {
        cssPath: "~/assets/css/input.css",
      },
      autoprefixer: {},
    },
  },

  typescript: {
    tsConfig: {
      extends: "tsconfig.json",
    }
  },

  // SITEMAP CONFIG
  // site: {
  //   url: "https://example.com",
  //   name: "My Awesome Website",
  // },

  compatibilityDate: "2024-08-13",
});