import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
  presetUno,
} from 'unocss'

import presetRemToPx from '@unocss/preset-rem-to-px'

// 刚使用unocss的朋友，可以借助这个工具： https://to-unocss.netlify.app

export default defineConfig({
  presets: [
    presetUno,
    presetAttributify,
    presetIcons(),
    // 为什么要用到这个插件？
    // 模板使用 viewport 作为移动端适配方案，unocss 默认单位为 rem
    // 所以需要转成 px，然后由 postcss 把 px 转成 vw/vh，完成适配
    presetRemToPx({
      // 这里为什么要设置基础字体大小？看下面这篇文章
      // https://juejin.cn/post/7262975395620618298
      baseFontSize: 4,
    }),
    presetMini(),
  ],
  shortcuts: [
    // shortcuts to multiple utilities
    ['btn', 'px-6 py-3 rounded-3 border-none inline-block bg-green-400 text-white cursor-pointer !outline-none hover:bg-green-600 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['wh-full', 'w-full h-full'],
    ['flex-center', 'flex justify-center items-center'],
    ['flex-x-center', 'flex justify-center'], // flex布局：主轴居中
    ['flex-y-center', 'flex items-center'], // flex布局：交叉轴居中
    ['flex-col', 'flex flex-col'],
    ['flex-col-center', 'flex flex-col justify-center items-center'],
    ['vertical-center', 'flex flex-col justify-center'],
    ['text-ellipsis', 'truncate'],
    [
      'icon-btn',
      'text-16 inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary !outline-none',
    ],
    ['text-overflow', 'overflow-hidden whitespace-nowrap text-ellipsis'],
    ['text-break', 'whitespace-normal break-all break-words'],
  ],
  rules: [
    [/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })],
    [
      'card-shadow',
      {
        'box-shadow': '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017',
      },
    ],

    ['text-sm-1', { 'font-size': '13px' }],
  ],
})
