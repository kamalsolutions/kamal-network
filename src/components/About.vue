<template>
    <section>
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
                    <button type="role" href="#" class="mt-10 w-2/5 flex mx-auto items-center self-center text-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white  md:text-lg ring-0 " @click.prevent="popupAbout" style="background:#1078A6">More About</button >
                   
                </div>
                <div class="w-full lg:w-1/2">
                    <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" class="img-responsive rounded rounded-lg">
                </div>
            </div>
        </div>
         <modal v-if="moreabout">
                        <div style="background-color: rgba(0,0,0,0.5);" class="fixed top-0 left-0 w-full lg:h-full flex items-center shadow-lg overflow-y-auto" x-show="isOpen">
                            <div class="container mx-auto lg:px-32 rounded-lg overflow-y-hidden">
                                <div class="bg-gray-100 rounded">
                                    <div class="flex justify-end pr-4 pt-2">
                                        <button class="text-3xl leading-none hover:text-gray-300 close-modal" @click='closePopAbout'>&times;</button>
                                    </div>
                                    <div class="modal-body px-8 py-8">
                                        <section class="grid lg:grid-cols-3 gap-2">
                                            <section class="my-4">
                                                <h4 class="text-2xl text-center font-semibold section__title--sub">Who we are</h4>
                                                <p class="my-4 ">
                                                    We are a Ghanaian startup with innovative technological ideas for all business sectors.
                                                </p>
                                            </section>
                                            <section class="my-4">
                                                <h4 class="text-2xl text-center font-semibold section__title--sub">Our Vision</h4>
                                                <p class="my-4 ">
                                                    Our VISION is to make every client’s ideas come to life.
                                                </p>
                                            </section>
                                            <section class="my-4">
                                                <h4 class="text-2xl text-center font-semibold section__title--sub">Our Mission</h4>
                                                <p class="my-4 ">
                                                    At Kamal Network, we believe in service with integrity, in this wise, we aim to create well -tailored applications for our clients while offering them the best customer service and support.
                                                </p>
                                            </section>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </modal>
    </section>
</template>
<script>
import Modal from './Modal.vue';
import Banner from './Banner.vue';

export default {
    name: 'About',
    components: { Modal, Banner },
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