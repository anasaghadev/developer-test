// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/public/bootstrap/bootstrap.min.css", "~/assets/css/main.css"],
  // pages: true,
  app: {
    head: {
      // link: [
      //   {
      //     rel: "stylesheet",
      //     // href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css",
      //     href: "~/assets/bootstrap/bootstrap.min.css",
      //     // integrity:
      //     //   "sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7",
      //     // crossorigin: "anonymous",
      //   },
      // ],
      link: [
        {
          rel: "preload",
          href: "/fonts/Dubai-Regular.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/Dubai-Bold.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  plugins: [{ src: "~/plugins/bootstrap.client.js", mode: "client" }],
  modules: ["@pinia/nuxt", "pinia-plugin-persistedstate/nuxt", "nuxt-swiper"],
});