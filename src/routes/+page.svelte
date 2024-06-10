<script>
	import * as hitman from '$lib/hitman';
	import { formatMapName } from '$lib/formatMapName';
	export const maps = hitman.MAPS;

	let selectedMap = maps[0].name; // default selection
	let mapThumbnail = `/maps/${formatMapName(selectedMap)}.jpg`;

	function updateThumbnail(mapName) {
		mapThumbnail = `/maps/${formatMapName(mapName)}.jpg`;
	}
</script>

<svelte:head>
	<title>King of the Kill</title>
	<meta name="description" content="King of the Kill" />
</svelte:head>

<div class="flex flex-col items-center my-auto">
	<div
		class="max-w-sm rounded-2xl overflow-hidden shadow-lg border-8 border-primary my-4 max-md:w-full max-md:h-[350px] lg:w-[395px] lg:h-[500px]"
	>
		<img id="mapThumbnail" src={mapThumbnail} alt="Temp" class="object-cover h-full" />
	</div>
	<select
		name="MapSelect"
		id="mapSelect"
		placeholder="Select Map"
		class="rounded-md bg-gray-500 text-white text-center px-12 py-1"
		on:change={(e) => updateThumbnail(e.target.value)}
	>
		<option value="" disabled selected>Select Map</option>
		{#each maps as map}
			<option value={map.name}>{map.name}</option>
		{/each}
	</select>
</div>
