import pkg from './package.json';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Expose-Headers': '*',
};

export default defineNuxtConfig({
    future: { compatibilityVersion: 4 },

    modules: [
        '@nuxtjs/turnstile',
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@vueuse/nuxt',
        '@unocss/nuxt',
        '@nuxt/icon',
        'vue-sonner/nuxt',
    ].concat((process.env.ENABLE_PWA || 'true') === 'true' ? ['@vite-pwa/nuxt'] : []),

    css: [
        '~/styles/main.css',
        '@unocss/reset/tailwind.css',
        '~/styles/apexcharts.css',
        '~/styles/sonner.css',
        'highlight.js/styles/tokyo-night-dark.css',
    ],

    fonts: {
        families: [
            {
                name: 'Quicksand',
                provider: 'google',
                weights: [300, 400, 500, 600, 700],
            },
        ],
    },

    devtools: {
        enabled: true,
    },

    experimental: {
        clientNodeCompat: true,
    },

    nitro: {
        experimental: {
            websocket: true,
        },
        esbuild: {
            options: {
                target: 'esnext',
            },
        },
    },

    routeRules: {
        '/api/**': { cors: true, headers: corsHeaders },
        '/u/:id': { cors: true, headers: corsHeaders },
    },

    runtimeConfig: {
        public: {
            fileChunkSize: 25,
            returnHttps: '',
            turnstile: {
                siteKey: '',
            },
        },
        turnstile: {
            secretKey: '',
        },
    },

    app: {
        buildAssetsDir: '/_fileship/',
        rootAttrs: {
            id: '__FileshipRoot',
        },
        head: {
            title: 'Fileship',
            htmlAttrs: {
                lang: 'en',
            },
            link: [
                {
                    rel: 'icon',
                    href: '/favicon.ico',
                },
                {
                    rel: 'apple-touch-icon',
                    href: '/apple-touch-icon.png',
                },
                {
                    rel: 'manifest',
                    href: '/manifest.json',
                },
            ],
        },
    },

    vite: {
        build: {
            rollupOptions: {
                output: {
                    banner: `/*
* Fileship v${pkg.version}
* https://github.com/hanzydev/Fileship
* (c) 2024-present Hànzy and Fileship contributors
* @license MIT
*/`,
                },
            },
        },
    },

    vue: {
        propsDestructure: true,
    },

    compatibilityDate: '2024-09-04',
});
