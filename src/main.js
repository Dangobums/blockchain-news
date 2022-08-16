import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import './index.css'
import antdv from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from '../src/router'

const pinia = createPinia()

createApp(App).use(antdv).use(router).use(pinia).mount('#app')
