export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      title: "Sketchware Pro - The best Android IDE for Android Development",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Sketchware Pro is a mod of Sketchware with a bunch of cutting-edge features and improvements.",
        },
      ],
    },
  },
});
