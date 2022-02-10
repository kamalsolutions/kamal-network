<template>
  <div id="wrapper">
    <div class="main-content">
    <navbar />
      <section >
        <About  class="my-4 " id="about-us"/>
        <div class="mt-10 grid lg:grid-cols-3 gap-4 p-12" id="about">
          <div class="p-4">
            <h4 class="text-2xl text-center font-semibold section__title--sub">Who we are</h4>
                                                <p class="my-4 ">
                                                    We are a Ghanaian startup with innovative technological ideas for all business sectors.
                                                </p>
          </div>
          <div class="p-4">
             <h4 class="text-2xl text-center font-semibold section__title--sub">Our Vision</h4>
                                                <p class="my-4 ">
                                                    Our VISION is to make every client’s ideas come to life.
                                                </p>
          </div>
          <div class="p-4">
            <h4 class="text-2xl text-center font-semibold section__title--sub">Our Mission</h4>
                                                <p class="my-4 ">
                                                    At Kamal Network, we believe in service with integrity, in this wise, we aim to create well -tailored applications for our clients while offering them the best customer service and support.
                                                </p>
          </div>
          
        </div>
        <Portfolio class="my-4 mt-40" id="portfolio"/>
        <Contact class="my-4 mt-40" id="contact" />
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
  .lead{
    color:  var(--blue-light);
}

.about{
  background: #f7c100;
}


</style>
