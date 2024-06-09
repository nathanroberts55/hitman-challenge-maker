<script>
	import MapNavigator from './MapNavigator.svelte';
	import Toggle from '../../Toggle.svelte';
	import * as hitman from '$lib/hitman';
	import { formatMapName } from '$lib/formatMapName';

	/** @type {import('./$types').PageData} */
	export let data;
	const mapId = data.mapId;
	const map = hitman.MAPS[mapId];
	const style = `background-image: url('/maps/${formatMapName(map.name)}.jpg');`;
</script>

<svelte:head>
	<title>Settings - King of the Kill</title>
	<meta name="description" content="King of the Kill" />
</svelte:head>

<div class="fixed top-0 left-0 h-screen w-screen flex max-md:flex-col">
	<div
		{style}
		class="max-md:w-full max-md:h-2/6 w-4/6 bg-no-repeat bg-cover bg-center flex justify-center"
	>
		<MapNavigator {mapId} />
	</div>
	<div
		class="max-md:w-full w-2/6 px-2 py-8 text-center bg-[#152430] relative flex flex-col max-md:h-full"
	>
		<p class="text-4xl text-white my-8">Challenge Settings</p>
		<form method="GET" action="/new" class="flex flex-col justify-between h-full">
			<div class="space-y-4 px-4">
				<Toggle label="Weapons Challenge" name="weapons" />
				<Toggle label="Time Challenge" name="time" />
				<!-- <Toggle label="Traversal Challenge" name="traversal" /> -->
				<Toggle label="Kill Challenge" name="kills" />
				<!-- <Toggle label="Disguise Challenge" name="disguise" /> -->
				<Toggle label="Custom Challenge" name="custom" />
				<input class="hidden" name="map" type="text" value={map.name} />
			</div>
			<div class="flex justify-center space-x-2">
				<a class="max-md:hidden btn py-2 px-4 rounded-lg bg-blue-400 text-white" href="/challenge">
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
				<button
					class="py-2 px-4 rounded-lg bg-blue-400 text-white max-md:text-2xl text-xl"
					type="submit"
					>Start Challenge
				</button>
			</div>
		</form>
	</div>
</div>
