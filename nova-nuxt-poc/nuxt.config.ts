// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
      head: {
         script: [
             { type:"text/javascript",src:"http://localhost:8084/main.js"}
         ]
     }
    }
})
