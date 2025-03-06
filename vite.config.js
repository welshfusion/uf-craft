require("dotenv").config();
import legacy from "@vitejs/plugin-legacy";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import path from "path";
import mkcert from "vite-plugin-mkcert";
// import ViteRestart from 'vite-plugin-restart';

let localhost = process.env.VITE_USE_LOCALHOST == '1';
let port = process.env.VITE_PORT;

// https://vitejs.dev/config/
/**
* @type {import('vite').UserConfig}
*/
export default ({ command }) => ({
    base: command === "serve" ? "" : "/dist/",
    build: {
        emptyOutDir: true,
        manifest: true,
        sourcemap: true,
        outDir: path.resolve(__dirname, "web/dist/"),
        rollupOptions: {
            input: {
                app: path.resolve(__dirname, "src/js/app.js"),
                glightbox: path.resolve(__dirname, "src/js/glightbox.js"),
                swiper: path.resolve(__dirname, "src/js/swiper.js"),
                cookieConsent: path.resolve(__dirname, "src/js/cookie-consent.js"),
            },
        },
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
    plugins: [
        localhost ? mkcert() : [],

        legacy({
            targets: ["defaults", "not IE 11"],
        }),
        nodeResolve({
            moduleDirectories: [path.resolve("./node_modules")],
        }),
        // ViteRestart({
        //   reload: [
        //     './src/**/*',
        //   ],
        // }),
        // Static Asset Fixer, see: https://github.com/vitejs/vite/issues/2394
        {
            name: "static-asset-fixer",
            enforce: "post",
            apply: "serve",
            transform: (code, id) => {
                return {
                    code: code.replace(
                        /\/src\/(.*)\.(svg|jp?g|png|webp)/g,
                        "https://localhost:" + port + "/src/$1.$2"
                        ),
                    map: null,
                };
            },
        },
        ],
        publicDir: path.resolve(__dirname, "src/public"),
        resolve: {
        // preserveSymlinks: true,
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@scss": path.resolve(__dirname, "src/scss"),
            "@js": path.resolve(__dirname, "src/js"),
        },
    },
    server: {
        https: localhost ? true : false,
        host: "0.0.0.0",
        port: port,

        watch: {
            usePolling: false,
        },
    },
});
