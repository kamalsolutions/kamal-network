<template>
	<nav class="w-full flex justify-between shadow-sm">
		<figure>
			<img src="@/assets/img/logo.svg" alt="Kamal Network Logo">
		</figure>

		<div class="flex items-center">
			<router-link to="/" class="px-2">Home</router-link>
			<router-link to="/About"  class="px-2">About Us</router-link>
			<router-link to="/Portfolio"  class="px-2">Portfolio</router-link>
			<router-link to="/Quote"  class="px-2">Get A Quote</router-link>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'NavBar',

	};
</script>