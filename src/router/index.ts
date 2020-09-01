import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc }
  ]
})
export default router