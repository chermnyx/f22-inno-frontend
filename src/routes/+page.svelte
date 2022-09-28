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

<svelte:head>
	<title>Ｔｉｔｌｅ</title>
</svelte:head>

<div class="d-flex w-100 h-100 p-3 mx-auto flex-column">
	<header class="mb-auto">
		<div>
			<h3 class="float-start mb-0">Ｈｅａｄｅｒ　￣＼＿（ツ）＿／￣</h3>
		</div>
	</header>

	<main class="px-3 text-center cover-container mx-auto">
		<div class="container">
			<div class="row">
				{#await json}
					<div class="col-12 col-md-6 section">
						<p class="text-muted">...waiting</p>
					</div>
				{:then data}
					<a class="text-decoration-none text-reset col-12 col-md-6 section" href={data.quote.url}>
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
					<div class="col-12 col-md-6 section">
						<p class="text-danger">An error occurred!</p>
					</div>
				{/await}

				<div class="col-12 col-md-6 section">
					<h1>It's &lt;h1&gt;</h1>
					<p class="lead">Это какой-то бессмысленный кусок текста на странном языке.</p>
					<p style="word-break: keep-all">
						Ａｓ　ｙｏｕ　ｃａｎ　ｓｅｅ，　ｉｔ　ｉｓ　ｖｅｒｙ　「ａｅｓｔｈｅｔｉｃａｌｌｙ　ｐｌｅａｓｉｎｇ」！！！
					</p>
					<h2>
						<i class="mdi mdi-cat" aria-hidden="true" />＜ｈ２＞ですにゃぁぁ。<i
							class="mdi mdi-cat"
							aria-hidden="true"
						/>
					</h2>
					<h3>
						<i class="mdi mdi-cat" aria-hidden="true" />＜ｈ３＞ですにゃぁぁぁ。<i
							class="mdi mdi-cat"
							aria-hidden="true"
						/>
					</h3>
					<h4>
						<i class="mdi mdi-cat" aria-hidden="true" />＜ｈ４＞ですにゃぁぁぁぁ。<i
							class="mdi mdi-cat"
							aria-hidden="true"
						/>
					</h4>
					<h5>
						<i class="mdi mdi-cat" aria-hidden="true" />＜ｈ５＞ですにゃぁぁぁぁぁ。<i
							class="mdi mdi-cat"
							aria-hidden="true"
						/>
					</h5>
					<h6>
						<i class="mdi mdi-cat" aria-hidden="true" />＜ｈ６＞ですにゃぁぁぁぁぁぁ。<i
							class="mdi mdi-cat"
							aria-hidden="true"
						/>
					</h6>
				</div>
			</div>
		</div>
	</main>

	<footer class="mt-auto text-white-50 section">
		<div class="p-4">
			© 2022 Copyright:
			<span class="text-reset fw-bold" href="https://mdbootstrap.com/"> Dmitrii Chermnykh </span>
		</div>
		<ul class="text">
			<li>
				<a
					href="https://github.com/chermnyx/f22-inno-frontend"
					class="text-reset text-decoration-none"
				>
					<i class="mdi mdi-github" />
					<span class="text-decoration-underline">chermnyx/f22-inno-frontend</span>
				</a>
			</li>
			<li>
				<a class="text-reset text-decoration-none" href="mailto: d.chermnykh@innopolis.university">
					<i class="mdi mdi-email" />
					<span class="text-decoration-underline">d.chermnykh@innopolis.university</span>
				</a>
			</li>
		</ul>
	</footer>
</div>
