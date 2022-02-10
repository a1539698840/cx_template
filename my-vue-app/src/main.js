import { createApp } from 'vue'
import router from './route'
import App from './App.vue'
import store from './store'
import '@/assets/style/base.scss'

createApp(App).use(router).use(store).mount('#app')
