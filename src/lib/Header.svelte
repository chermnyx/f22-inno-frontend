<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Icon from './Icon.svelte';

	$: relativePath = $page.url.pathname.replace(base, '').replace(/\/$/, '');
	console.log(relativePath)
</script>

<nav class="mb-auto navbar navbar-dark navbar-expand-lg">
	<div class="container-fluid">
		<a class="navbar-brand" href="{base}/">￣＼＿（ツ）＿／￣</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<Icon n="menu" />
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link" class:active={relativePath === ''} href={base}>Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" class:active={relativePath === '/joke'} href="{base}/joke">Joke</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
