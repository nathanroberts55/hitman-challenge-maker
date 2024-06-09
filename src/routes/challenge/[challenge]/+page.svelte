<script>
	import List from '../../List.svelte';
	import * as hitman from '$lib/hitman';

	/** @type {import('./$types').PageData} */
	export let data;

	const MAX_CHALLENGES = 5;
	const map = hitman.MAPS.find((map) => data.mapName == map.name);
	const { difficulty, challenges, weapons } = hitman.randomScenario({
		weapons: 3,
		challenges: Math.floor(Math.random() * MAX_CHALLENGES) + 1
	});
	const prompt = hitman.customScenario(
		map,
		data.weaponsVal,
		data.timeVal,
		data.killsVal,
		data.customVal,
		data.seed
	);
</script>

<svelte:head>
	<title>Challenge - King of the Kill</title>
	<meta name="description" content="King of the Kill" />
</svelte:head>

<div class="fixed top-0 left-0 h-screen w-screen flex max-md:flex-col">
	<div
		class="max-md:w-full max-md:h-2/6 w-2/6 bg-no-repeat bg-hitman-image bg-cover bg-center"
	></div>
	<div
		class="max-md:w-full max-md:h-4/6 w-4/6 px-2 py-8 text-center bg-[#0B0B0B] relative flex flex-col items-center"
	>
		<p class="text-4xl text-white my-8">Challenge Started</p>
		<div class="max-w-sm rounded-2xl px-2 py-2 overflow-hidden shadow-lg bg-[#151515] mx-4">
			<div class="flex flex-col space-y-2 text-white">
				<p class="text-white text-4xl">{prompt}</p>
			</div>
		</div>

		<div class="mt-auto">
			<a class="bg-[#7E7E7E] text-white py-2 px-4 rounded-md text-xl" href="/">Finish Challenge</a>
		</div>
	</div>
</div>
