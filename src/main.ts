import './lib/gulu.scss'//重置样式
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'//重置样式
import './assets/svg.js'
// import './assets/index.css'
import router from './router/index'
const app = createApp(App)
app.use(router)
app.mount('#app')
