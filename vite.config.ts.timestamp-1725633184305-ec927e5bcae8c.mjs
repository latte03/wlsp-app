// vite.config.ts
import path2 from "node:path";
import process from "node:process";
import { loadEnv } from "file:///E:/dev/wlsp-app/node_modules/.pnpm/vite@5.4.1_@types+node@22.4.0_less@4.2.0_terser@5.31.6/node_modules/vite/dist/node/index.js";
import viewport from "file:///E:/dev/wlsp-app/node_modules/.pnpm/postcss-mobile-forever@4.1.5_postcss@8.4.41/node_modules/postcss-mobile-forever/index.js";
import autoprefixer from "file:///E:/dev/wlsp-app/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.4.41/node_modules/autoprefixer/lib/autoprefixer.js";

// build/vite/index.ts
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { unheadVueComposablesImports } from "file:///E:/dev/wlsp-app/node_modules/.pnpm/@unhead+vue@1.9.16_vue@3.4.38_typescript@5.5.4_/node_modules/@unhead/vue/dist/index.mjs";
import legacy from "file:///E:/dev/wlsp-app/node_modules/.pnpm/@vitejs+plugin-legacy@5.4.2_terser@5.31.6_vite@5.4.1_@types+node@22.4.0_less@4.2.0_terser@5.31.6_/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import vue from "file:///E:/dev/wlsp-app/node_modules/.pnpm/@vitejs+plugin-vue@5.1.2_vite@5.4.1_@types+node@22.4.0_less@4.2.0_terser@5.31.6__vue@3.4.38_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import UnoCSS from "file:///E:/dev/wlsp-app/node_modules/.pnpm/unocss@0.62.2_postcss@8.4.41_rollup@4.21.0_vite@5.4.1_@types+node@22.4.0_less@4.2.0_terser@5.31.6_/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///E:/dev/wlsp-app/node_modules/.pnpm/unplugin-auto-import@0.18.2_@vueuse+core@11.0.0_vue@3.4.38_typescript@5.5.4___rollup@4.21.0/node_modules/unplugin-auto-import/dist/vite.js";
import { VantResolver } from "file:///E:/dev/wlsp-app/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.3_rollup@4.21.0_vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/resolvers.js";
import Components from "file:///E:/dev/wlsp-app/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.3_rollup@4.21.0_vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/vite.js";
import { VueRouterAutoImports } from "file:///E:/dev/wlsp-app/node_modules/.pnpm/unplugin-vue-router@0.10.7_rollup@4.21.0_vue-router@4.4.3_vue@3.4.38_typescript@5.5.4___vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-router/dist/index.js";
import VueRouter from "file:///E:/dev/wlsp-app/node_modules/.pnpm/unplugin-vue-router@0.10.7_rollup@4.21.0_vue-router@4.4.3_vue@3.4.38_typescript@5.5.4___vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-router/dist/vite.js";
import mockDevServerPlugin from "file:///E:/dev/wlsp-app/node_modules/.pnpm/vite-plugin-mock-dev-server@1.7.1_esbuild@0.23.1_rollup@4.21.0_vite@5.4.1_@types+node@22.4.0_less@4.2.0_terser@5.31.6_/node_modules/vite-plugin-mock-dev-server/dist/index.js";
import { VitePWA } from "file:///E:/dev/wlsp-app/node_modules/.pnpm/vite-plugin-pwa@0.20.1_vite@5.4.1_@types+node@22.4.0_less@4.2.0_terser@5.31.6__workbox-build@7.1.1_workbox-window@7.1.0/node_modules/vite-plugin-pwa/dist/index.js";
import Sitemap from "file:///E:/dev/wlsp-app/node_modules/.pnpm/vite-plugin-sitemap@0.7.1/node_modules/vite-plugin-sitemap/dist/index.js";
import VueDevTools from "file:///E:/dev/wlsp-app/node_modules/.pnpm/vite-plugin-vue-devtools@7.3.8_rollup@4.21.0_vite@5.4.1_@types+node@22.4.0_less@4.2.0_terser@_spk7frxqzc2moa34z7q2deasc4/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import VueI18nPlugin from "file:///E:/dev/wlsp-app/node_modules/.pnpm/@intlify+unplugin-vue-i18n@4.0.0_rollup@4.21.0_vue-i18n@9.13.1_vue@3.4.38_typescript@5.5.4__/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import UnpluginSvgComponent from "file:///E:/dev/wlsp-app/node_modules/.pnpm/unplugin-svg-component@0.10.3/node_modules/unplugin-svg-component/dist/vite.js";
import MetaLayouts from "file:///E:/dev/wlsp-app/node_modules/.pnpm/vite-plugin-vue-meta-layouts@0.4.3_vite@5.4.1_@types+node@22.4.0_less@4.2.0_terser@5.31.6__vu_evhorthpvsi7sy62wlkg44wg3a/node_modules/vite-plugin-vue-meta-layouts/dist/index.mjs";

// build/vite/vconsole.ts
import path from "node:path";
import { viteVConsole } from "file:///E:/dev/wlsp-app/node_modules/.pnpm/vite-plugin-vconsole@2.1.1/node_modules/vite-plugin-vconsole/dist/main.mjs";
function createViteVConsole() {
  return viteVConsole({
    entry: [path.resolve("src/main.ts")],
    enabled: false,
    config: {
      maxLogNumber: 1e3,
      theme: "light"
    },
    // https://github.com/vadxq/vite-plugin-vconsole/issues/21
    dynamicConfig: {
      theme: `document.documentElement.classList.contains('dark') ? 'dark' : 'light'`
    },
    eventListener: `
      const targetElement = document.querySelector('html'); // \u62E9\u8981\u76D1\u542C\u7684\u5143\u7D20
      const observerOptions = {
        attributes: true, // \u76D1\u542C\u5C5E\u6027\u53D8\u5316
        attributeFilter: ['class'] // \u53EA\u76D1\u542Cclass\u5C5E\u6027\u53D8\u5316
      };

      // \u5B9A\u4E49\u56DE\u8C03\u51FD\u6570\u6765\u5904\u7406\u89C2\u5BDF\u5230\u7684\u53D8\u5316
      function handleAttributeChange(mutationsList) {
        for(let mutation of mutationsList) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (window && window.vConsole) {
              window.vConsole.dynamicChange.value = new Date().getTime();
            }
          }
        }
      }

      // \u521B\u5EFA\u89C2\u5BDF\u8005\u5B9E\u4F8B\u5E76\u4F20\u5165\u56DE\u8C03\u51FD\u6570
      const observer = new MutationObserver(handleAttributeChange);

      // \u5F00\u59CB\u89C2\u5BDF\u76EE\u6807\u5143\u7D20
      observer.observe(targetElement, observerOptions);

      // \u5F53\u4E0D\u518D\u9700\u8981\u89C2\u5BDF\u65F6\uFF0C\u505C\u6B62\u89C2\u5BDF
      // observer.disconnect();
    `
  });
}

// build/vite/index.ts
var __vite_injected_original_import_meta_url = "file:///E:/dev/wlsp-app/build/vite/index.ts";
function createVitePlugins() {
  return [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: [".vue"],
      routesFolder: "src/pages",
      dts: "src/typed-router.d.ts"
    }),
    vue(),
    // https://github.com/jbaubree/vite-plugin-sitemap
    Sitemap(),
    /**
     * 因为原来的 vite-plugin-vue-layouts 在 layout 组件中修改css 热更新不生效，故而换成这个
     * @link https://github.com/dishait/vite-plugin-vue-meta-layouts
     */
    MetaLayouts({
      // 打开修复 https://github.com/JohnCampionJr/vite-plugin-vue-layouts/issues/134，默认为 false 关闭
      skipTopLevelRouteLayout: true
    }),
    // https://github.com/pengzhanbo/vite-plugin-mock-dev-server
    mockDevServerPlugin(),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue"],
      resolvers: [VantResolver()],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/components.d.ts"
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/
      ],
      imports: [
        "vue",
        "vitest",
        "@vueuse/core",
        VueRouterAutoImports,
        {
          "vue-router/auto": ["useLink"],
          "@/utils/i18n": ["i18n", "locale"],
          "vue-i18n": ["useI18n"]
        },
        unheadVueComposablesImports
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/composables"
      ]
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18nPlugin({
      // locale messages resource pre-compile option
      include: resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "../../src/locales/**")
    }),
    legacy({
      targets: ["defaults", "not IE 11"]
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
    // https://github.com/vadxq/vite-plugin-vconsole
    createViteVConsole(),
    // https://github.com/vuejs/devtools-next
    VueDevTools(),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "vue3-vant-mobile",
        short_name: "vue3-vant-mobile",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    /**
     * svg组件自动导入
     */
    UnpluginSvgComponent({
      // 指定需要缓存的图标文件夹
      iconDir: "src/icons",
      dts: true,
      /**
       * 通常, 插件会把svg标签内的fill, stroke属性替换成currentColor,
       * 此属性会对每个svg路径进行正则匹配, 匹配成功的svg则不会替换currentColor, 而是保留原有的颜色.
       * preserveColor: getFilePath('icons/common'),
       */
      dtsDir: "src",
      svgSpriteDomId: "svg-id",
      /**
       * 给每个svg name加上前缀,使用时记得加上这个前缀
       */
      // prefix: 'icon',
      /**
       * 生成的组件名称
       */
      componentName: "SvgIcon",
      componentStyle: "width:1em;height:1em;fill: currentcolor;display: inline-block;",
      symbolIdFormatter: (svgName, prefix) => {
        const nameArr = svgName.split("/");
        if (prefix)
          nameArr.unshift(prefix);
        return nameArr.join("-").replace(/\.svg$/, "");
      },
      /**
       * svgo 的优化参数
       * @link https://github.com/svg/svgo
       */
      optimizeOptions: void 0,
      scanStrategy: "text",
      treeShaking: false
    })
  ];
}

// build/vite/optimize.ts
var include = [
  "axios",
  "store",
  "echarts",
  "lodash-es",
  "resize-detector",
  "store/plugins/expire",
  "vant/es/cell-group/style/index",
  "vant/es/popup/style/index",
  "vant/es/picker/style/index",
  "vant/es/cell/style/index",
  "vant/es/switch/style/index",
  "vant/es/space/style/index",
  "vant/es/button/style/index",
  "vant/es/empty/style/index",
  "vant/es/icon/style/index",
  "vant/es/stepper/style/index"
];
var exclude = [
  "@iconify-json/carbon"
];

// vite.config.ts
var __vite_injected_original_dirname = "E:\\dev\\wlsp-app";
var vite_config_default = ({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return {
    base: env.VITE_APP_PUBLIC_PATH,
    plugins: createVitePlugins(),
    server: {
      host: true,
      port: 3e3,
      proxy: {
        "/api": {
          target: "https://www.txwlsq.com/wlsq-api",
          ws: false,
          changeOrigin: true
        }
      }
    },
    resolve: {
      alias: {
        "~@": path2.join(__vite_injected_original_dirname, "./src"),
        "@": path2.join(__vite_injected_original_dirname, "./src"),
        "~": path2.join(__vite_injected_original_dirname, "./src/assets")
      }
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          // https://github.com/wswmsword/postcss-mobile-forever
          viewport({
            appSelector: "#app",
            viewportWidth: 375,
            maxDisplayWidth: 600,
            rootContainingBlockSelectorList: [
              "van-tabbar",
              "van-popup"
            ]
          })
        ]
      }
    },
    build: {
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2048
    },
    optimizeDeps: { include, exclude }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvdml0ZS9pbmRleC50cyIsICJidWlsZC92aXRlL3Zjb25zb2xlLnRzIiwgImJ1aWxkL3ZpdGUvb3B0aW1pemUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxkZXZcXFxcd2xzcC1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGRldlxcXFx3bHNwLWFwcFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovZGV2L3dsc3AtYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJ1xuaW1wb3J0IHsgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdHlwZSB7IENvbmZpZ0VudiwgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdmlld3BvcnQgZnJvbSAncG9zdGNzcy1tb2JpbGUtZm9yZXZlcidcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xuaW1wb3J0IHsgY3JlYXRlVml0ZVBsdWdpbnMgfSBmcm9tICcuL2J1aWxkL3ZpdGUnXG5pbXBvcnQgeyBleGNsdWRlLCBpbmNsdWRlIH0gZnJvbSAnLi9idWlsZC92aXRlL29wdGltaXplJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBtb2RlIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWcgPT4ge1xuICBjb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKVxuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHJvb3QpXG5cbiAgcmV0dXJuIHtcbiAgICBiYXNlOiBlbnYuVklURV9BUFBfUFVCTElDX1BBVEgsXG4gICAgcGx1Z2luczogY3JlYXRlVml0ZVBsdWdpbnMoKSxcblxuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogdHJ1ZSxcbiAgICAgIHBvcnQ6IDMwMDAsXG4gICAgICBwcm94eToge1xuICAgICAgICAnL2FwaSc6IHtcbiAgICAgICAgICB0YXJnZXQ6ICdodHRwczovL3d3dy50eHdsc3EuY29tL3dsc3EtYXBpJyxcbiAgICAgICAgICB3czogZmFsc2UsXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ35AJzogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICAgICdAJzogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICAgICd+JzogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc3JjL2Fzc2V0cycpLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgY3NzOiB7XG4gICAgICBwb3N0Y3NzOiB7XG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICBhdXRvcHJlZml4ZXIoKSxcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vd3N3bXN3b3JkL3Bvc3Rjc3MtbW9iaWxlLWZvcmV2ZXJcbiAgICAgICAgICB2aWV3cG9ydCh7XG4gICAgICAgICAgICBhcHBTZWxlY3RvcjogJyNhcHAnLFxuICAgICAgICAgICAgdmlld3BvcnRXaWR0aDogMzc1LFxuICAgICAgICAgICAgbWF4RGlzcGxheVdpZHRoOiA2MDAsXG4gICAgICAgICAgICByb290Q29udGFpbmluZ0Jsb2NrU2VsZWN0b3JMaXN0OiBbXG4gICAgICAgICAgICAgICd2YW4tdGFiYmFyJyxcbiAgICAgICAgICAgICAgJ3Zhbi1wb3B1cCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgYnVpbGQ6IHtcbiAgICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsXG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwNDgsXG4gICAgfSxcblxuICAgIG9wdGltaXplRGVwczogeyBpbmNsdWRlLCBleGNsdWRlIH0sXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcZGV2XFxcXHdsc3AtYXBwXFxcXGJ1aWxkXFxcXHZpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGRldlxcXFx3bHNwLWFwcFxcXFxidWlsZFxcXFx2aXRlXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9kZXYvd2xzcC1hcHAvYnVpbGQvdml0ZS9pbmRleC50c1wiO2ltcG9ydCB7IGRpcm5hbWUsIHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyB1bmhlYWRWdWVDb21wb3NhYmxlc0ltcG9ydHMgfSBmcm9tICdAdW5oZWFkL3Z1ZSdcbmltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5J1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcbmltcG9ydCBtb2NrRGV2U2VydmVyUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2stZGV2LXNlcnZlcidcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5pbXBvcnQgU2l0ZW1hcCBmcm9tICd2aXRlLXBsdWdpbi1zaXRlbWFwJ1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcbmltcG9ydCBWdWVJMThuUGx1Z2luIGZyb20gJ0BpbnRsaWZ5L3VucGx1Z2luLXZ1ZS1pMThuL3ZpdGUnXG5pbXBvcnQgVW5wbHVnaW5TdmdDb21wb25lbnQgZnJvbSAndW5wbHVnaW4tc3ZnLWNvbXBvbmVudC92aXRlJ1xuaW1wb3J0IE1ldGFMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1tZXRhLWxheW91dHMnXG5pbXBvcnQgeyBjcmVhdGVWaXRlVkNvbnNvbGUgfSBmcm9tICcuL3Zjb25zb2xlJ1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVml0ZVBsdWdpbnMoKSB7XG4gIHJldHVybiBbXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bvc3ZhL3VucGx1Z2luLXZ1ZS1yb3V0ZXJcbiAgICBWdWVSb3V0ZXIoe1xuICAgICAgZXh0ZW5zaW9uczogWycudnVlJ10sXG4gICAgICByb3V0ZXNGb2xkZXI6ICdzcmMvcGFnZXMnLFxuICAgICAgZHRzOiAnc3JjL3R5cGVkLXJvdXRlci5kLnRzJyxcbiAgICB9KSxcblxuICAgIHZ1ZSgpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2piYXVicmVlL3ZpdGUtcGx1Z2luLXNpdGVtYXBcbiAgICBTaXRlbWFwKCksXG4gICAgLyoqXG4gICAgICogXHU1NkUwXHU0RTNBXHU1MzlGXHU2NzY1XHU3Njg0IHZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzIFx1NTcyOCBsYXlvdXQgXHU3RUM0XHU0RUY2XHU0RTJEXHU0RkVFXHU2NTM5Y3NzIFx1NzBFRFx1NjZGNFx1NjVCMFx1NEUwRFx1NzUxRlx1NjU0OFx1RkYwQ1x1NjU0NVx1ODAwQ1x1NjM2Mlx1NjIxMFx1OEZEOVx1NEUyQVxuICAgICAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9kaXNoYWl0L3ZpdGUtcGx1Z2luLXZ1ZS1tZXRhLWxheW91dHNcbiAgICAgKi9cbiAgICBNZXRhTGF5b3V0cyh7XG4gICAgICAvLyBcdTYyNTNcdTVGMDBcdTRGRUVcdTU5MEQgaHR0cHM6Ly9naXRodWIuY29tL0pvaG5DYW1waW9uSnIvdml0ZS1wbHVnaW4tdnVlLWxheW91dHMvaXNzdWVzLzEzNFx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQSBmYWxzZSBcdTUxNzNcdTk1RURcbiAgICAgIHNraXBUb3BMZXZlbFJvdXRlTGF5b3V0OiB0cnVlLFxuICAgIH0pLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZW5nemhhbmJvL3ZpdGUtcGx1Z2luLW1vY2stZGV2LXNlcnZlclxuICAgIG1vY2tEZXZTZXJ2ZXJQbHVnaW4oKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xuICAgIENvbXBvbmVudHMoe1xuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnXSxcbiAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXSxcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvXSxcbiAgICAgIGR0czogJ3NyYy9jb21wb25lbnRzLmQudHMnLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgIC9cXC5bdGpdc3g/JC8sXG4gICAgICAgIC9cXC52dWUkLyxcbiAgICAgICAgL1xcLnZ1ZVxcP3Z1ZS8sXG4gICAgICBdLFxuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3ZpdGVzdCcsXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgICBWdWVSb3V0ZXJBdXRvSW1wb3J0cyxcbiAgICAgICAge1xuICAgICAgICAgICd2dWUtcm91dGVyL2F1dG8nOiBbJ3VzZUxpbmsnXSxcbiAgICAgICAgICAnQC91dGlscy9pMThuJzogWydpMThuJywgJ2xvY2FsZSddLFxuICAgICAgICAgICd2dWUtaTE4bic6IFsndXNlSTE4biddLFxuICAgICAgICB9LFxuICAgICAgICB1bmhlYWRWdWVDb21wb3NhYmxlc0ltcG9ydHMsXG4gICAgICBdLFxuICAgICAgZHRzOiAnc3JjL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICAgIGRpcnM6IFtcbiAgICAgICAgJ3NyYy9jb21wb3NhYmxlcycsXG4gICAgICBdLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy91bnBsdWdpbi12dWUtaTE4blxuICAgIFZ1ZUkxOG5QbHVnaW4oe1xuICAgICAgLy8gbG9jYWxlIG1lc3NhZ2VzIHJlc291cmNlIHByZS1jb21waWxlIG9wdGlvblxuICAgICAgaW5jbHVkZTogcmVzb2x2ZShkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICcuLi8uLi9zcmMvbG9jYWxlcy8qKicpLFxuICAgIH0pLFxuXG4gICAgbGVnYWN5KHtcbiAgICAgIHRhcmdldHM6IFsnZGVmYXVsdHMnLCAnbm90IElFIDExJ10sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5vY3NzXG4gICAgLy8gc2VlIHVuby5jb25maWcudHMgZm9yIGNvbmZpZ1xuICAgIFVub0NTUygpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZhZHhxL3ZpdGUtcGx1Z2luLXZjb25zb2xlXG4gICAgY3JlYXRlVml0ZVZDb25zb2xlKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvZGV2dG9vbHMtbmV4dFxuICAgIFZ1ZURldlRvb2xzKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4tcHdhXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5zdmcnLCAnc2FmYXJpLXBpbm5lZC10YWIuc3ZnJ10sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAndnVlMy12YW50LW1vYmlsZScsXG4gICAgICAgIHNob3J0X25hbWU6ICd2dWUzLXZhbnQtbW9iaWxlJyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTE5MngxOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55IG1hc2thYmxlJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIHN2Z1x1N0VDNFx1NEVGNlx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVxuICAgICAqL1xuICAgIFVucGx1Z2luU3ZnQ29tcG9uZW50KHtcbiAgICAgIC8vIFx1NjMwN1x1NUI5QVx1OTcwMFx1ODk4MVx1N0YxM1x1NUI1OFx1NzY4NFx1NTZGRVx1NjgwN1x1NjU4N1x1NEVGNlx1NTkzOVxuICAgICAgaWNvbkRpcjogJ3NyYy9pY29ucycsXG4gICAgICBkdHM6IHRydWUsXG5cbiAgICAgIC8qKlxuICAgICAgICogXHU5MDFBXHU1RTM4LCBcdTYzRDJcdTRFRjZcdTRGMUFcdTYyOEFzdmdcdTY4MDdcdTdCN0VcdTUxODVcdTc2ODRmaWxsLCBzdHJva2VcdTVDNUVcdTYwMjdcdTY2RkZcdTYzNjJcdTYyMTBjdXJyZW50Q29sb3IsXG4gICAgICAgKiBcdTZCNjRcdTVDNUVcdTYwMjdcdTRGMUFcdTVCRjlcdTZCQ0ZcdTRFMkFzdmdcdThERUZcdTVGODRcdThGREJcdTg4NENcdTZCNjNcdTUyMTlcdTUzMzlcdTkxNEQsIFx1NTMzOVx1OTE0RFx1NjIxMFx1NTI5Rlx1NzY4NHN2Z1x1NTIxOVx1NEUwRFx1NEYxQVx1NjZGRlx1NjM2MmN1cnJlbnRDb2xvciwgXHU4MDBDXHU2NjJGXHU0RkREXHU3NTU5XHU1MzlGXHU2NzA5XHU3Njg0XHU5ODlDXHU4MjcyLlxuICAgICAgICogcHJlc2VydmVDb2xvcjogZ2V0RmlsZVBhdGgoJ2ljb25zL2NvbW1vbicpLFxuICAgICAgICovXG4gICAgICBkdHNEaXI6ICdzcmMnLFxuICAgICAgc3ZnU3ByaXRlRG9tSWQ6ICdzdmctaWQnLFxuXG4gICAgICAvKipcbiAgICAgICAqIFx1N0VEOVx1NkJDRlx1NEUyQXN2ZyBuYW1lXHU1MkEwXHU0RTBBXHU1MjREXHU3RjAwLFx1NEY3Rlx1NzUyOFx1NjVGNlx1OEJCMFx1NUY5N1x1NTJBMFx1NEUwQVx1OEZEOVx1NEUyQVx1NTI0RFx1N0YwMFxuICAgICAgICovXG4gICAgICAvLyBwcmVmaXg6ICdpY29uJyxcblxuICAgICAgLyoqXG4gICAgICAgKiBcdTc1MUZcdTYyMTBcdTc2ODRcdTdFQzRcdTRFRjZcdTU0MERcdTc5RjBcbiAgICAgICAqL1xuICAgICAgY29tcG9uZW50TmFtZTogJ1N2Z0ljb24nLFxuICAgICAgY29tcG9uZW50U3R5bGU6ICd3aWR0aDoxZW07aGVpZ2h0OjFlbTtmaWxsOiBjdXJyZW50Y29sb3I7ZGlzcGxheTogaW5saW5lLWJsb2NrOycsXG4gICAgICBzeW1ib2xJZEZvcm1hdHRlcjogKHN2Z05hbWU6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgICBjb25zdCBuYW1lQXJyID0gc3ZnTmFtZS5zcGxpdCgnLycpXG4gICAgICAgIGlmIChwcmVmaXgpXG4gICAgICAgICAgbmFtZUFyci51bnNoaWZ0KHByZWZpeClcbiAgICAgICAgcmV0dXJuIG5hbWVBcnIuam9pbignLScpLnJlcGxhY2UoL1xcLnN2ZyQvLCAnJylcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogc3ZnbyBcdTc2ODRcdTRGMThcdTUzMTZcdTUzQzJcdTY1NzBcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmcvc3Znb1xuICAgICAgICovXG4gICAgICBvcHRpbWl6ZU9wdGlvbnM6IHVuZGVmaW5lZCxcbiAgICAgIHNjYW5TdHJhdGVneTogJ3RleHQnLFxuICAgICAgdHJlZVNoYWtpbmc6IGZhbHNlLFxuICAgIH0pLFxuICBdXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXGRldlxcXFx3bHNwLWFwcFxcXFxidWlsZFxcXFx2aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxkZXZcXFxcd2xzcC1hcHBcXFxcYnVpbGRcXFxcdml0ZVxcXFx2Y29uc29sZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovZGV2L3dsc3AtYXBwL2J1aWxkL3ZpdGUvdmNvbnNvbGUudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB7IHZpdGVWQ29uc29sZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXZjb25zb2xlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpdGVWQ29uc29sZSgpIHtcclxuICByZXR1cm4gdml0ZVZDb25zb2xlKHtcclxuICAgIGVudHJ5OiBbcGF0aC5yZXNvbHZlKCdzcmMvbWFpbi50cycpXSxcclxuICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgY29uZmlnOiB7XHJcbiAgICAgIG1heExvZ051bWJlcjogMTAwMCxcclxuICAgICAgdGhlbWU6ICdsaWdodCcsXHJcbiAgICB9LFxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZhZHhxL3ZpdGUtcGx1Z2luLXZjb25zb2xlL2lzc3Vlcy8yMVxyXG4gICAgZHluYW1pY0NvbmZpZzoge1xyXG4gICAgICB0aGVtZTogYGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmsnKSA/ICdkYXJrJyA6ICdsaWdodCdgLFxyXG4gICAgfSxcclxuICAgIGV2ZW50TGlzdGVuZXI6IGBcclxuICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTsgLy8gXHU2MkU5XHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1MTQzXHU3RDIwXHJcbiAgICAgIGNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHtcclxuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLCAvLyBcdTc2RDFcdTU0MkNcdTVDNUVcdTYwMjdcdTUzRDhcdTUzMTZcclxuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXSAvLyBcdTUzRUFcdTc2RDFcdTU0MkNjbGFzc1x1NUM1RVx1NjAyN1x1NTNEOFx1NTMxNlxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gXHU1QjlBXHU0RTQ5XHU1NkRFXHU4QzAzXHU1MUZEXHU2NTcwXHU2NzY1XHU1OTA0XHU3NDA2XHU4OUMyXHU1QkRGXHU1MjMwXHU3Njg0XHU1M0Q4XHU1MzE2XHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUF0dHJpYnV0ZUNoYW5nZShtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgICAgZm9yKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cudkNvbnNvbGUpIHtcclxuICAgICAgICAgICAgICB3aW5kb3cudkNvbnNvbGUuZHluYW1pY0NoYW5nZS52YWx1ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBcdTUyMUJcdTVFRkFcdTg5QzJcdTVCREZcdTgwMDVcdTVCOUVcdTRGOEJcdTVFNzZcdTRGMjBcdTUxNjVcdTU2REVcdThDMDNcdTUxRkRcdTY1NzBcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihoYW5kbGVBdHRyaWJ1dGVDaGFuZ2UpO1xyXG5cclxuICAgICAgLy8gXHU1RjAwXHU1OUNCXHU4OUMyXHU1QkRGXHU3NkVFXHU2ODA3XHU1MTQzXHU3RDIwXHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0RWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcclxuXHJcbiAgICAgIC8vIFx1NUY1M1x1NEUwRFx1NTE4RFx1OTcwMFx1ODk4MVx1ODlDMlx1NUJERlx1NjVGNlx1RkYwQ1x1NTA1Q1x1NkI2Mlx1ODlDMlx1NUJERlxyXG4gICAgICAvLyBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICBgLFxyXG4gIH0pXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxkZXZcXFxcd2xzcC1hcHBcXFxcYnVpbGRcXFxcdml0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcZGV2XFxcXHdsc3AtYXBwXFxcXGJ1aWxkXFxcXHZpdGVcXFxcb3B0aW1pemUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2Rldi93bHNwLWFwcC9idWlsZC92aXRlL29wdGltaXplLnRzXCI7Y29uc3QgaW5jbHVkZSA9IFtcbiAgJ2F4aW9zJyxcbiAgJ3N0b3JlJyxcbiAgJ2VjaGFydHMnLFxuICAnbG9kYXNoLWVzJyxcbiAgJ3Jlc2l6ZS1kZXRlY3RvcicsXG4gICdzdG9yZS9wbHVnaW5zL2V4cGlyZScsXG4gICd2YW50L2VzL2NlbGwtZ3JvdXAvc3R5bGUvaW5kZXgnLFxuICAndmFudC9lcy9wb3B1cC9zdHlsZS9pbmRleCcsXG4gICd2YW50L2VzL3BpY2tlci9zdHlsZS9pbmRleCcsXG4gICd2YW50L2VzL2NlbGwvc3R5bGUvaW5kZXgnLFxuICAndmFudC9lcy9zd2l0Y2gvc3R5bGUvaW5kZXgnLFxuICAndmFudC9lcy9zcGFjZS9zdHlsZS9pbmRleCcsXG4gICd2YW50L2VzL2J1dHRvbi9zdHlsZS9pbmRleCcsXG4gICd2YW50L2VzL2VtcHR5L3N0eWxlL2luZGV4JyxcbiAgJ3ZhbnQvZXMvaWNvbi9zdHlsZS9pbmRleCcsXG4gICd2YW50L2VzL3N0ZXBwZXIvc3R5bGUvaW5kZXgnLFxuXVxuXG5jb25zdCBleGNsdWRlID0gW1xuICAnQGljb25pZnktanNvbi9jYXJib24nLFxuXVxuXG5leHBvcnQgeyBpbmNsdWRlLCBleGNsdWRlIH1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcU8sT0FBT0EsV0FBVTtBQUN0UCxPQUFPLGFBQWE7QUFDcEIsU0FBUyxlQUFlO0FBRXhCLE9BQU8sY0FBYztBQUNyQixPQUFPLGtCQUFrQjs7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
