import {createRouter, createWebHistory} from 'vue-router';

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Portfolio from './pages/Portfolio.vue'
import Quote from './pages/Quote.vue'




const router = createRouter({
	history: createWebHistory(),

	routes: [
		{ path: '/',name: "Home", component: Home },
		{ path: '/About',name: "About", component: About },
		{ path: '/Portfolio',name: "Portfolio", component: Portfolio },
		{ path: '/Quote',name: "Quote", component: Quote },

	],
	linkActiveClass: 'active',
})


export default  router;