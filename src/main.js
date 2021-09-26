import { createApp } from 'vue'
import App from './App.vue'
import Navbar from './components/NavBar.vue'
import MainFooter from './components/MainFooter.vue'
import router from './router.js'

const app = createApp(App)

app.component('navbar',Navbar)
app.component('main-footer',MainFooter)
app.use(router)
app.mount('#app')

