<script lang="ts">
	import Joke from '$lib/Joke.svelte';
	import StrangeHeaders from '$lib/StrangeHeaders.svelte';
</script>

<svelte:head>
	<title>Ｊｏｋｅ</title>
</svelte:head>

<div class="d-flex w-100 h-100 p-3 mx-auto flex-column">
	<main class="px-3 text-center cover-container mx-auto">
		<div class="container">
			<div class="row">
				<div class="col-12 section">
					<Joke />
				</div>
			</div>
		</div>
	</main>
</div>
