<template>
  <div id="wrapper">
    <div class="main-content">
    <navbar />
      <section>
        <About  class="my-4"/>
        <Portfolio class="my-4" />
      </section>
    </div>

    <main-footer class="footer py-4" />
  </div>

</template>

<script>

import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';

export default {
  name: 'App',
  components: {About, Portfolio},

  
};
</script>

<style>
  @import './assets/css/main.css';
  @import './assets/css/custom.css';

:root{
  --yellow: #FEC34F;
  --blue: #1078A6;
  --blue-light: #0F78A5;
}
  
#app {
  font-family: Inter,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#wrapper{
  display: flex;
    min-height: 100vh;

  flex-direction: column;
}

.section__title{
  color: #0F78A5;
}

.section__title--sub{
  color: #1078A6;
}


.section__title--yellow{
  color: #FEC34F;
}
.main-content{
  flex-grow: 1;
}

.footer{
  height: auto;
  background : var(--blue);
  color: white;

}

.card{
  background:  var(--yellow);
}


</style>
