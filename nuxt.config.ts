// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icon",
        '@nuxtjs/supabase',
    ],
    app: {
        pageTransition: { name: "page", mode: "out-in" },
    },
    supabase: {
        redirect: false
    },
    runtimeConfig: {
        public: {
            SUPABASE_URL: '',
            SUPABASE_KEY: '',
        }
    }
});
