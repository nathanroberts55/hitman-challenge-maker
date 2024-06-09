import { redirect } from '@sveltejs/kit';

export const prerender = false;

/** @type {import('./$types').PageLoad} */
export function load({ url }) {
	let mapName = decodeURI(url.searchParams.get('map'));
	let weaponsVal = url.searchParams.has('weapons');
	let timeVal = url.searchParams.has('time');
	let traversalVal = url.searchParams.has('traversal');
	let killsVal = url.searchParams.has('kills');
	let disguiseVal = url.searchParams.has('disguise');
	let customVal = url.searchParams.has('custom');
	let seed = Date.now();

	let p = btoa(
		JSON.stringify({
			mapName,
			weaponsVal,
			timeVal,
			traversalVal,
			killsVal,
			disguiseVal,
			customVal,
			seed
		})
	);
	redirect(302, `/challenge/${p}`);
}
