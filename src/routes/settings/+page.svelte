<script>
	import Toggle from '../Toggle.svelte';
	import * as hitman from '$lib/hitman';
	export const maps = hitman.MAPS;
</script>

<svelte:head>
	<title>Settings - King of the Kill</title>
	<meta name="description" content="King of the Kill" />
</svelte:head>

<div class="fixed top-0 left-0 h-screen w-screen flex max-md:flex-col">
	<div class="max-md:w-full max-md:h-2/6 w-4/6 h-full bg-[url(/maps/miami.jpg)] flex justify-center content-end gap-4 bg-no-repeat bg-cover">
		<p class="mb-4 my-auto py-2 px-4 h-12 rounded-lg bg-blue-400 text-white text-xl">{maps[0].name}</p>
		<button class="mb-4 my-auto py-2 px-4 h-12 rounded-lg bg-blue-400 text-white">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
			</svg>
		</button>
		<button class="mb-4 my-auto py-2 px-4 h-12 rounded-lg bg-blue-400 text-white">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
			  </svg>			  
		</button>
	</div>
	<div class="max-md:w-full max-md:h-4/6 w-2/6 h-full px-2 py-8 text-center bg-[#152430] relative">
		<p class="text-4xl text-white my-8">Challenge Settings</p>
		<div class="space-y-2">
			<Toggle label="Weapons Challenge" name="weapons" />
			<Toggle label="Time Challenge" name="time" />
			<Toggle label="Traversal Challenge" name="traversal" />
			<Toggle label="Kill Challenge" name="kills" />
			<Toggle label="Disguise Challenge" name="disguise" />
		</div>
		<div class="flex flex-row gap-4 absolute bottom-8 max-md:inset-x-10 inset-x-28 justify-items-center">
			<a class="max-md:invisible btn py-2 px-4 rounded-lg bg-blue-400 text-white" href="/challenge">
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
			<button class="py-2 px-4 rounded-lg bg-blue-400 text-white max-md:text-2xl text-xl">Start Challenge</button>
		</div>
	</div>
</div>
