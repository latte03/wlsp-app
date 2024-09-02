import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { unheadVueComposablesImports } from '@unhead/vue'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
import { VitePWA } from 'vite-plugin-pwa'
import Sitemap from 'vite-plugin-sitemap'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import UnpluginSvgComponent from 'unplugin-svg-component/vite'
import { createViteVConsole } from './vconsole'

export function createVitePlugins() {
  return [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: ['.vue'],
      routesFolder: 'src/pages',
      dts: 'src/typed-router.d.ts',
    }),

    vue(),

    // https://github.com/jbaubree/vite-plugin-sitemap
    Sitemap(),

    // https://github.com/pengzhanbo/vite-plugin-mock-dev-server
    mockDevServerPlugin(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue'],
      resolvers: [VantResolver()],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
      imports: [
        'vue',
        'vitest',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          'vue-router/auto': ['useLink'],
          '@/utils/i18n': ['i18n', 'locale'],
          'vue-i18n': ['useI18n'],
        },
        unheadVueComposablesImports,
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
      ],
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18nPlugin({
      // locale messages resource pre-compile option
      include: resolve(dirname(fileURLToPath(import.meta.url)), '../../src/locales/**'),
    }),

    legacy({
      targets: ['defaults', 'not IE 11'],
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
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'vue3-vant-mobile',
        short_name: 'vue3-vant-mobile',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    /**
     * svg组件自动导入
     */
    UnpluginSvgComponent({
      // 指定需要缓存的图标文件夹
      iconDir: 'src/icons',
      dts: true,

      /**
       * 通常, 插件会把svg标签内的fill, stroke属性替换成currentColor,
       * 此属性会对每个svg路径进行正则匹配, 匹配成功的svg则不会替换currentColor, 而是保留原有的颜色.
       * preserveColor: getFilePath('icons/common'),
       */
      dtsDir: 'src',
      svgSpriteDomId: 'svg-id',

      /**
       * 给每个svg name加上前缀,使用时记得加上这个前缀
       */
      // prefix: 'icon',

      /**
       * 生成的组件名称
       */
      componentName: 'SvgIcon',
      componentStyle: 'width:1em;height:1em;fill: currentcolor;display: inline-block;',
      symbolIdFormatter: (svgName: string, prefix: string): string => {
        const nameArr = svgName.split('/')
        if (prefix)
          nameArr.unshift(prefix)
        return nameArr.join('-').replace(/\.svg$/, '')
      },

      /**
       * svgo 的优化参数
       * @link https://github.com/svg/svgo
       */
      optimizeOptions: undefined,
      scanStrategy: 'text',
      treeShaking: false,
    }),
  ]
}
