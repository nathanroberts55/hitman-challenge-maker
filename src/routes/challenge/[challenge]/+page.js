import { error } from '@sveltejs/kit';
import * as hitman from '$lib/hitman';

export const prerender = false;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	let data = JSON.parse(atob(params.challenge));

	return { ...data };
}
