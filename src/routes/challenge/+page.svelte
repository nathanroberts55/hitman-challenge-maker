<script>
	import List from '../List.svelte';
	import * as hitman from '$lib/hitman';

	const MAX_CHALLENGES = 5;
	const { map, difficulty, challenges, weapons } = hitman.randomScenario({
		weapons: 3,
		challenges: Math.floor(Math.random() * MAX_CHALLENGES) + 1
	});
</script>

<svelte:head>
	<title>Challenge - King of the Kill</title>
	<meta name="description" content="King of the Kill" />
</svelte:head>

<div class="flex max-md:flex-col gap-4 my-auto mx-auto">
	<div
		class="max-w-sm rounded-xl overflow-hidden shadow-lg border-8 border-primary max-md:w-full max-md:h-[350px] lg:w-[395px] lg:h-[600px]"
	>
		<!-- Map Image -->
		<!-- Placeholder Image -->
		<img src="/maps/miami.jpg" alt="Temp" class="object-cover h-full" />
	</div>
	<div
		class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white max-md:w-full lg:w-[395px] lg:h-[600px] p-8"
	>
		<h1 class="text-5xl font-bold underline">{map.name}</h1>
		<div class="flex flex-col gap-3">
			<p class="font-bold">Difficulty: {difficulty}</p>
			<List name="Targets" items={map.targets} />
			<List name="Challenge" items={challenges} />
			<List name="Weapons" items={weapons} />
		</div>
	</div>
</div>
