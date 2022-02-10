<template>
	<div class="banner" id="banner">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name: 'Banner',
	};
</script>


<style scoped>
	
.banner{
	background: url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fG9mZmljZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
	background-size: cover;
	height: 400px;
}
</style>