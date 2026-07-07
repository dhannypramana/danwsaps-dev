// https://nuxt.com/docs/api/configuration/nuxt-config
import TailwindCSS from '@tailwindcss/vite';

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',

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

    vite: {
        plugins: [
            // https://github.com/tailwindlabs/tailwindcss
            TailwindCSS(),
        ],
    },

});
