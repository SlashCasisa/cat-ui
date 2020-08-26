import Frank from '../components/Frank.vue'
import Frank2 from '../components/Frank2.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Frank },
    { path: '/Frank2', component: Frank2 }
  ]
})
export default router