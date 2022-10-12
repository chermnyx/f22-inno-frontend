<script lang="ts">
	import Joke from '$lib/Joke.svelte';
	import StrangeHeaders from '$lib/StrangeHeaders.svelte';
</script>

<svelte:head>
	<title>Ｍａｉｎ　ｐａｇｅ</title>
</svelte:head>

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
