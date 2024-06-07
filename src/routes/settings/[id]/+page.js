import { error } from '@sveltejs/kit';
import * as hitman from '$lib/hitman';

export const prerender = false;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	let mapId = decodeURI(params.id);

	mapId = hitman.MAPS.findIndex((map) => mapId == map.name);
	if (mapId == -1) {
		error(404, 'bruh');
		return;
	}

	return { mapId };
}
