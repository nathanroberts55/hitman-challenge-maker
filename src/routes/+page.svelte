<script>
	import List from './List.svelte';
	import * as hitman from '$lib/hitman';

	const MAX_CHALLENGES = 5;
	const { map, difficulty, challenges, weapons } = hitman.randomScenario({
		weapons: 3,
		challenges: Math.floor(Math.random() * MAX_CHALLENGES) + 1
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<h1 class="text-5xl font-bold">{map.name}</h1>
	<div class="flex flex-col gap-3">
		<p class="font-bold">Difficulty: {difficulty}</p>
		<List name="Targets" items={map.targets} />
		<List name="Challenge" items={challenges} />
		<List name="Weapons" items={weapons} />
	</div>
</main>
