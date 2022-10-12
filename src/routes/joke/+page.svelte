<script lang="ts">
	import Joke from '$lib/Joke.svelte';
</script>

<svelte:head>
	<title>Ｊｏｋｅ</title>
</svelte:head>

<main class="px-3 text-center cover-container mx-auto">
	<div class="container">
		<div class="row">
			<div class="col-12 section">
				<Joke />
			</div>
		</div>
	</div>
</main>
