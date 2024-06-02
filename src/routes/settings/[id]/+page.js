import { error } from '@sveltejs/kit';
import * as hitman from '$lib/hitman';

export const prerender = false;
export const csr = true;
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const mapId = Number(params.id);
	if (mapId > hitman.MAPS.length - 1) {
		error(404, 'bruh');
		return;
	}

	return { mapId };
}
