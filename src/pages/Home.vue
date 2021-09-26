<template>
      <section>
        <About  class="my-4 " id="'#about-us'"/>
        <Portfolio class="my-4 mt-40" id="'#portfolio'"/>
        <Contact class="my-4 mt-40" id="'#contact'" />
      </section>
</template>

<script>

import About from '@/components/About.vue';
import Portfolio from '@/components/Portfolio.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: 'Home',
  components: {About, Portfolio, Contact},
};
</script>
