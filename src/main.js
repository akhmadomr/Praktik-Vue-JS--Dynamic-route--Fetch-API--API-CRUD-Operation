import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Navbar from './components/Navbar.vue'
import CardProduct from './components/CardProduct.vue'
import Footer from './components/Footer.vue'
import router from './router/index.js'

createApp(App)
    .component('Navbar', Navbar)
    .component('CardProduct', CardProduct)
    .component('Footer', Footer)
    .use(router)
    .mount('#app')

