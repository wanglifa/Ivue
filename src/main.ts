import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Lifa from './components/Lifa.vue'
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Lifa }
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
