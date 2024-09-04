import { createApp } from 'vue'

import Vant from 'vant'
import VmForm3 from 'vform3-mobile-builds' // 引入VmForm库
import { setupModules } from './modules'
import App from '@/App.vue'
import { setupRouter } from '@/router'
import pinia from '@/stores'
import 'virtual:uno.css'
import '@/styles/app.less'
import { i18n } from '@/utils/i18n'
// Vant 桌面端适配
import '@vant/touch-emulator'
import 'vant/lib/index.css'
/* --------------------------------
Vant 中有个别组件是以函数的形式提供的，
包括 Toast，Dialog，Notify 和 ImagePreview 组件。
在使用函数组件时，unplugin-vue-components
无法自动引入对应的样式，因此需要手动引入样式。
------------------------------------- */
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'
import 'vform3-mobile-builds/dist/render.style.css' // 引入VmForm样式
import '@unocss/reset/tailwind-compat.css'

const app = createApp(App)

app.use(Vant)
app.use(VmForm3) // 全局注册VForm(同时注册了vm-form-designer和vm-form-render组件)

app.use(pinia)
app.use(i18n)
setupRouter(app)
setupModules(app)
app.mount('#app')
