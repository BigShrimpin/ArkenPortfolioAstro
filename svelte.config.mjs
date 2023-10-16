import adapter from "@astrojs/svelte";

/** @type {import('@astrojs/svelte/kit')} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config