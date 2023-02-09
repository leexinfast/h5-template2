import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from "pinia"
/**
 * Vant个别组件以函数的形式提供 插件无法自动引入对应样式 因此需要手动引入
 */
// Toast
import { showToast } from 'vant';
import 'vant/es/toast/style';

// Dialog
import { showDialog } from 'vant';
import 'vant/es/dialog/style';

// Notify
import { showNotify } from 'vant';
import 'vant/es/notify/style';

// ImagePreview
import { showImagePreview } from 'vant';
import 'vant/es/image-preview/style';

const pina = createPinia()
const app = createApp(App)

// 挂载
app.use(pina)
app.use(router)
app.mount('#app')
