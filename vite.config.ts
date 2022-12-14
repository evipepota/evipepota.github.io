import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    build: {
        outDir: 'docs'
    },
    plugins: [
        vue({ include: [/\.vue$/, /\.md$/] }),

        Pages({
            extensions: ['vue', 'md'],
            extendRoute: (route, parent) => {
                if (!process.env['VITE_SSG']) return route

                if (route.component.match(/\/index\.(vue|md|js)$/) && route.path !== '/') {
                    return {
                        ...route,
                        path: `${route.path}/index`
                    }
                }
                return route
            }
        }),

        // https://github.com/antfu/vite-plugin-md
        Markdown(),
    ],
    resolve: {
        alias: {
            '@/': `${path.resolve(__dirname, 'src')}/`,
        },
    }, 
    ssr: {
        noExternal: ["vuetify"],
    },
})
