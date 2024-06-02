<script>
    export let name;
</script>

<div class="flex flex-row gap-4 items-center my-auto">
    <input type="checkbox" class="h-7 w-12 cursor-pointer appearance-none rounded-full border border-black bg-black shadow-[-1.25rem_0_0_2px_white_inset,0_0_0_2px_white_inset] checked:bg-white checked:shadow-[1.25rem_0_0_2px_black_inset,0_0_0_2px_black_inset] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-in-out" />
    <div class="text-white text-2xl">{name}</div>
</div>