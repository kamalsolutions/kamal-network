<template>
  <div id="wrapper">
    <div class="main-content">
    <navbar />
      <section>
        <About  class="my-4 " id="'#about-us'"/>
        <Portfolio class="my-4 mt-40" id="'#portfolio'"/>
        <Contact class="my-4 mt-40" id="'#contact'" />
      </section>
    </div>

    <main-footer class="footer py-4" />
  </div>

</template>

<script>

import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {About, Portfolio, Contact},

  
};
</script>

<style>
  @import './assets/css/main.css';
  @import './assets/css/custom.css';



</style>
