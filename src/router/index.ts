import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import DocDemo from '../components/DocDemo.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import ButtonDemo1 from '../components/ButtonDemo1.vue'
import DialogDemo from '../components/DialogDemo.vue'
import TabsDemo from '../components/TabsDemo.vue'
// import Introduction from '../views/Introduction.vue'
// import Start from '../views/Start.vue'
// import Install from '../views/Install.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import { h } from 'vue'
import Markdown from '../components/Markdown.vue'
const history = createWebHashHistory()
const md= filename =>h(Markdown,{path: `../markdown/${filename}.md`, key: filename })
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc',
     component: Doc,
     children:[{
      path:'',
      component: DocDemo
    },{
      path:'/introduction',
      // component: Introduction
      component: md("intro")
    },{
      path:'/start',
      // component: Start
      component: md("get-started")
    },{
      path:'/install',
      // component: Install
      component: md("install")
    },{
      path:'/switch',
      component: SwitchDemo
    },{
      path:'/button1',
      component:ButtonDemo1
    },{       
      path:'/button',
      component: ButtonDemo
    },{
      path:'/dialog',
      component: DialogDemo
    },{
      path:'/tabs',
      component: TabsDemo
    }] }
  ]
});
// router.afterEach(()=>{
//   console.log('路由切换了');
// })
export default router