<template>
  <div id="wrapper">
    <navbar />
    <div class="main-content">
      <section>
       <router-view></router-view>
      </section>
    </div>

    <main-footer class="footer py-4" />
  </div>

</template>

<script>



export default {
  name: 'App',
};
</script>

<style>
  @import './assets/css/main.css';
  @import './assets/css/custom.css';



</style>
