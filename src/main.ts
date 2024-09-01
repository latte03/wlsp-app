import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import Vant from 'vant'
import VmForm3 from 'vform3-mobile-builds' // 引入VmForm库
import App from '@/App.vue'
import router from '@/router'
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

const app = createApp(App)
const head = createHead()

app.use(Vant)
app.use(VmForm3) // 全局注册VForm(同时注册了vm-form-designer和vm-form-render组件)

app.use(head)
app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')
