<script>
	export let name;
	export let items;
</script>

<div class="mx-6">
	<p class="font-bold text-left">{name}</p>
	<ul class="list-disc text-left px-4">
		{#each items as item}
			<li>{item}</li>
		{/each}
	</ul>
</div>
