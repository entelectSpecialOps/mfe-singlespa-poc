// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            script: [
                { type: "text/javascript", src: "http://localhost:8081/main.js" },
                { type: "text/javascript", src: "http://localhost:8082/js/main.94c60dfc.js" }
            ]
        }
    }
})
