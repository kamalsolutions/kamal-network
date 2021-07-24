<template>
	<div class="w-full portfolio py-10 lg:py-20">
		<h3 class="font-bold text-4xl text-center section__title" style="color: white">Portfolio</h3>

		<section class="grid lg:grid-cols-3 gap-10 p-4 px-6 mt-5">

			<section class="p-2 border border-gray-100 rounded-lg bg-gray-100">
				<h3 class="text-center font-bold text-2xl my-2"><span class="section__title">Kamal</span> <span class="section__title--yellow">Solutions</span></h3>
				<p class="my-2">
					At Kamal Solutions, we build and maintain bespoke web and mobile applications as well as offer SEO, CRM, Digital Marketing services among others.
				</p>
			</section>

			<section class="p-2 border border-gray-100 rounded-lg bg-gray-100">
				<h3 class="text-center font-bold text-2xl my-2"><span class="section__title">Kamal</span> <span class="section__title--yellow">Consult</span></h3>
				<p class="my-2">
					Kamal Consult partners with various organizations abroad to assist volunteers in Ghana from abroad as well as Ghanaians living abroad. 
				</p>
			</section>

			<section class="p-2 border border-gray-100 rounded-lg bg-gray-100">
				<h3 class="text-center font-bold text-2xl my-2"><span class="section__title">Kamal</span> <span class="section__title--yellow">Foundation</span></h3>
				<p class="my-2">
					Kamal Foundation aims to  contribute to community building by focusing its energies on the development of the capacity of the youth in the Ghanaian communities.
				</p>
			</section>
			
		</section>
	</div>
</template>


<script>
	
	export default{
		name: 'Portfolio',
	};
</script>

<style scoped>
.portfolio{
	background:  var(--blue-light);
}

	
</style>

