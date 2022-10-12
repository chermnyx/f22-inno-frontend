<script lang="ts">
	import '../app.css';
	export const prerender = false;
	export const ssr = false;
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
</script>

<svelte:head>
	<title>Ｔｉｔｌｅ</title>
</svelte:head>

<div class="d-flex w-100 h-100 p-3 mx-auto flex-column">
	<Header />

	<slot />

	<Footer />
</div>
