
import 'beercss'
import 'lib-opal/lib/util.css'
/* color scheme: 瑾瑜 #1E2732 */
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
