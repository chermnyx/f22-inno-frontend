import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		enableSourcemap: true
	},

	preprocess: preprocess({
		sourceMap: true
	}),

	kit: {
		paths: {
			base: '/f22-inno-frontend'
		},
		adapter: adapter({
			fallback: 'index.html'
		}),
		prerender: { entries: [] }
	}
};

export default config;
