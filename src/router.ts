import {createWebHashHistory, createRouter} from 'vue-router'
import { h } from 'vue'
import Markdown from './components/Markdown.vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
const history = createWebHashHistory()
import Install from './markdown/install.md'
import Intro from './markdown/intro.md'
import GetStart from './markdown/get-started.md'
const md = (content: string) => h(Markdown as any, { content, key: content })
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc, children: [
        { path: '', redirect: '/doc/intro' },
        { path: 'intro', component: md(Intro)},
        { path: 'install', component: md(Install)},
        { path: 'get-start', component: md(GetStart)},
        { path: 'switch', component: SwitchDemo as any },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo }
      ]
    }
  ]
})