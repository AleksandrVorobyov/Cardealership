import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/fonts.css'
import '@splidejs/splide/dist/css/splide.min.css';


createApp(App).use(store).use(router).mount('#app')
