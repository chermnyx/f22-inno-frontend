<script lang="ts">
	import Joke from '$lib/Joke.svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import StrangeHeaders from '$lib/StrangeHeaders.svelte';
</script>

<svelte:head>
	<title>Ｔｉｔｌｅ</title>
</svelte:head>

<div class="d-flex w-100 h-100 p-3 mx-auto flex-column">
	<Header />

	<main class="px-3 text-center cover-container mx-auto">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-6 section">
					<Joke />
				</div>

				<div class="col-12 col-md-6 section">
					<StrangeHeaders />
				</div>
			</div>
		</div>
	</main>

	<Footer />
</div>
