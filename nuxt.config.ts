import TailwindCSS from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',

    modules: [
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/i18n',
        '@nuxt/icon',
    ],

    vite: {
        plugins: [
            // https://github.com/tailwindlabs/tailwindcss
            TailwindCSS(),
        ],
    },

    imports: {
        presets: [
            {
                from: 'clsx',
                imports: [
                    'clsx',
                    {
                        name: 'ClassValue',
                        type: true,
                    },
                ],
            },
            {
                from: 'tailwind-merge',
                imports: ['twMerge'],
            },
            {
                from: 'class-variance-authority',
                imports: [
                    'cva',
                    {
                        name: 'VariantProps',
                        type: true,
                    },
                ],
            },
        ],
        dirs: [
            'types',
            'constants',
            'utils',
        ],
    },

    components: [
        {
            path: 'components',
            pathPrefix: false,
            extensions: ['vue'],
        },
    ],

    icon: {
        provider: 'server',
        componentName: 'VIcon',
        serverBundle: {
            collections: ['lucide'],
        },
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
