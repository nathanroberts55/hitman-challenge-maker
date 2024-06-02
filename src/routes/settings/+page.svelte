<script>
    import Toggle from '../Toggle.svelte';
    import * as hitman from '$lib/hitman';
    export const maps = hitman.MAPS
</script>

<svelte:head>
	<title>Settings - King of the Kill</title>
	<meta name="description" content="King of the Kill" />
</svelte:head>

<div class="fixed top-0 left-0 h-screen w-screen flex flex-row">
    <div class="w-4/6 h-full bg-[#152430]">
        <img class="object-cover h-full w-full" src="https://cdna.artstation.com/p/assets/images/images/014/447/884/large/alex-jareno-elite3d-hitman2-miami-06.jpg?1544010665" alt="Temp">
    </div>
    <div class="w-2/6 h-full px-2 py-8 text-center bg-[#152430] relative">
        <p class="text-4xl text-white my-8">Challenge Settings</p>
        <div class="space-y-2">
            <Toggle label="Weapons Challenge" name="weapons"/>
            <Toggle label="Time Challenge" name="time"/>
            <Toggle label="Traversal Challenge" name="traversal"/>
            <Toggle label="Kill Challenge" name="kills"/>
            <Toggle label="Disguise Challenge" name="disguise"/>
        </div>
        <div class="flex flex-row gap-4 absolute bottom-8 inset-x-28 justify-items-center">
            <button class="py-2 px-4 rounded-lg bg-blue-400 text-white text-xl">Start Challenge</button>
            <a class="btn py-2 px-4 rounded-lg bg-blue-400 text-white" href="/challenge">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </a>     
        </div>
    </div>
</div>