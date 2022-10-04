<script lang="ts">
	interface ApiResult {
		quote: {
			body: string;
			author: string;
			url: string;
		};
	}

	const qreq = fetch('https://favqs.com/api/qotd');
	const json: Promise<ApiResult> = (async () => await (await qreq).json())();
</script>

{#await json}
	<p class="text-muted h-100 w-100 d-inline-block">...waiting</p>
{:then data}
	<a class="text-decoration-none text-reset h-100 w-100 d-inline-block" href={data.quote.url}>
		<h1>Quote API</h1>
		<p id="quote" class="anime">
			{data.quote.body}
		</p>
		<p class="text-white-50">
			by
			<span class="text-decoration-underline" id="author">
				{data.quote.author}
			</span>
		</p>
	</a>
{:catch}
	<p class="text-danger h-100 w-100 d-inline-block">An error occurred!</p>
{/await}
