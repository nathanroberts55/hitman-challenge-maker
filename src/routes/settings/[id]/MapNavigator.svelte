<script>
	import * as hitman from '$lib/hitman';

	export let mapId;
	const map = hitman.MAPS[mapId];
	const nextMap =
		mapId + 2 > hitman.MAPS.length ? undefined : `/settings/${hitman.MAPS[mapId + 1].name}`;
	const prevMap = mapId - 1 < 0 ? undefined : `/settings/${hitman.MAPS[mapId - 1].name}`;
	const active = 'mb-8 my-auto py-3 px-4 h-12 rounded-lg bg-blue-400 text-white';
	const disabled = 'hidden';
</script>

<div class="mt-auto flex space-x-2">
	<p class="mb-8 my-auto py-2 px-4 h-12 rounded-lg bg-blue-400 text-white text-xl">{map.name}</p>
	<a data-sveltekit-reload href={prevMap} class={prevMap ? active : disabled}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
			/>
		</svg>
	</a>
	<a data-sveltekit-reload href={nextMap} class={nextMap ? active : disabled}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
			/>
		</svg>
	</a>
</div>
