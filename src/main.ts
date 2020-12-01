import './lib/gulu.scss'//重置样式
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'//重置样式
import './assets/svg.js'
// import './assets/index.css'
import router from './router/index'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component("Markdown",Markdown)