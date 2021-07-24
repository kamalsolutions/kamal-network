import { createApp } from 'vue'
import App from './App.vue'
import Navbar from './components/Navbar.vue'
import MainFooter from './components/MainFooter.vue'



const app = createApp(App)



app.component('navbar',Navbar)
app.component('main-footer',MainFooter)
app.mount('#app')
