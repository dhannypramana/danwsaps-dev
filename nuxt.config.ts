import TailwindCSS from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',

    modules: [
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/i18n',
    ],

    vite: {
        plugins: [
            // https://github.com/tailwindlabs/tailwindcss
            TailwindCSS(),
        ],
    },

    imports: {
        dirs: [
            'types',
            'constants',
        ],
    },

    devtools: {
        enabled: true,
    },

    typescript: {
        typeCheck: true,
        strict: true,
    },

    devServer: {
        port: Number(process.env.NUXT_DEV_PORT) ?? 3000,
    },

    css: [
        './app/styles/index.css',
    ],

    piniaPluginPersistedstate: {
        key: 'persist__%id_postfix',
    },

    i18n: {
        defaultLocale: 'en',
        locales: [
            {
                code: 'en',
                language: 'en-US',
                file: 'en.yaml',
            },
        ],
    },

});
