<script>
	export let name;
	export let items;
</script>

<div>
	<p class="font-bold">{name}</p>
	<ul class="list-disc">
		{#each items as item}
			<li>{item}</li>
		{/each}
	</ul>
</div>
