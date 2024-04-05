// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    experimental: {appManifest: false},
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => ['custom-greeting', 'country-list-provider', 'country-provider', 'clients-provider'].includes(tag),
        },
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    tailwindcss: {
        cssPath: ['./assets/css/tailwind.css', { injectPosition: 0 }],
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: {},
        viewer: true,
    },
    colorMode: {
        classSuffix: ''
    },
    app: {
        head: {
            script: [
                { type: "text/javascript", src: "http://localhost:8082/js/main.f269f504.js" },
                { type: "text/javascript", src: "http://localhost:8081/main.js" },
            ]
        }
    },
})
