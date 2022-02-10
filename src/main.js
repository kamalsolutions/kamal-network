import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import MainFooter from './components/MainFooter.vue'



const app = createApp(App)



app.component('navbar', NavBar)
app.component('main-footer',MainFooter)
app.mount('#app')
