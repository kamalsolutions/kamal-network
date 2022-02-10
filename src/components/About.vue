<template>
    <section id="about-us">
        <banner class="-mt-4 lg:flex lg:justify-end">

            <div class="lg:p-20  lg:w-1/2">
                <h1 class="text-5xl font-bold  leading-relaxed" style="color#1078A6">A Ghanaian startup supporting small and large businesses<span class="text-6xl">.</span></h1>
            </div>
        </banner>
        <div class="w-full lg:w-4/5 lg:mx-auto my-10">
            <div class="lg:flex lg:pt-10">
                <div class="w-full lg:w-1/2 lg:py-10">
                    <h3 class="text-4xl font-bold text-center  my-4 section__title">About Us</h3>
                    <p class="text-2xl">
                        We are a Ghanaian startup with innovative technological ideas for all business sectors.
                    </p>
                    <a type="role" href="#about" class="mt-10 w-2/5 flex mx-auto items-center self-center text-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white  md:text-lg ring-0 " style="background:#1078A6">More About</a >
                   
                </div>
                <div class="w-full lg:w-1/2">
                    <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" class="img-responsive rounded rounded-lg">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Banner from './Banner.vue';

export default {
    name: 'About',
    components: { Banner },
    data() {
        return {
            moreabout: false,
        }
    },
    methods: {
        popupAbout() {
            this.moreabout = true;
        },

        closePopAbout() {
            this.moreabout = false;
        }
    },
};
</script>

<style scoped>

.lead{
    color:  var(--blue-light);
}
    
</style>