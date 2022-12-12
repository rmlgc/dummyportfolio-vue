import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'
import {quasar, transformAssetUrls} from '@quasar/vite-plugin'

const path = require("path");
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" ? "/" + path.basename(process.cwd()) + "/" : "/";

// https://vitejs.dev/config/
export default defineConfig({
    base,
    plugins: [
        vue({
            template: {transformAssetUrls}
        }),
        quasar({
            sassVariables: 'src/assets/quasar-variables.sass'
        }),
        mkcert(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        https: true,
        proxy: {
            '^/api': {
                target: 'https://dummy.restapiexample.com/',
                changeOrigin: true,
                ws: true,
                secure: true,configure: (proxy, _options) => {
                    proxy.on('error', (err, _req, _res) => {
                        console.log('proxy error', err);
                    });
                    proxy.on('proxyReq', (proxyReq, req, _res) => {
                        console.log('Sending Request to the Target:', req.method, req.url);
                    });
                    proxy.on('proxyRes', (proxyRes, req, _res) => {
                        console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
                    });
                },

            }
        },
    },
})
