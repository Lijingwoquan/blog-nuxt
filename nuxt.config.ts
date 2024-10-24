import prismjs from "vite-plugin-prismjs";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  app: {
    // layoutTransition: { name: "layout", mode: "out-in" },
  },
  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      apiBase: "http://127.0.0.1:8080/api",
      imgBase: "http://127.0.0.1:8080/api/img",
    },
  },
  modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss", "@pinia/nuxt"],
  css: [
    "~/assets/css/tailwind.css",
    "~/assets/fonts/font.css",
    "~/assets/icon/icon.css",
  ],
  vite: {
    plugins: [
      prismjs({
        languages: [
          "go",
          "css",
          "bash",
          "shell",
          "sql",
          "dockerfile",
          "docker",
          "git",
          "json",
          "typescript",
          "javascript",
          "html",
        ],
      }),
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
