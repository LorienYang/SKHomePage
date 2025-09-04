import './assets/main.css'
import { webConfig } from './web.config.ts'
document.title = webConfig.SITE_NAME
document.documentElement.style.setProperty('--bg-url', `url(${webConfig.BG_URL})`)

import { createApp } from 'vue'
import App from "./App.vue"

createApp(App).mount('#app')
