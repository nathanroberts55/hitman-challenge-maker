<script>
    import * as hitman from '$lib/hitman';
    export const maps = hitman.MAPS
</script>

<svelte:head>
	<title>King of the Kill</title>
	<meta name="description" content="King of the Kill" />
</svelte:head>

<div class="flex flex-col gap-4 my-auto mx-auto">
    <div class="max-w-sm rounded-xl overflow-hidden shadow-lg border-8 border-primary my-4 max-md:w-full max-md:h-[350px] lg:w-[395px] lg:h-[500px]">
        <img src="https://cdna.artstation.com/p/assets/images/images/014/447/884/large/alex-jareno-elite3d-hitman2-miami-06.jpg?1544010665" alt="Temp" class="object-cover h-full">
    </div>
    <select name="MapSelect" id="mapSelect" placeholder="Select Map" class="rounded-md bg-gray-500 text-white text-center h-8 w-3/4 mx-auto my-auto">
        <option value="" disabled selected>Select Map</option>
        {#each maps as map}
			<option value="{map.name}">{map.name}</option>
		{/each}
    </select>
</div>