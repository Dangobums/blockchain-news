import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import antdv from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from '../src/router'

createApp(App).use(antdv).use(router).mount('#app')
