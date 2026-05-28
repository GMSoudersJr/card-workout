<script lang="ts">
	interface Props {
		heading: string;
		unorderedList: string[];
	}

	let { heading, unorderedList }: Props = $props();
</script>

<section class="section-container">
	<h3 class="section-header oswald-header">
		{heading.toUpperCase()}
	</h3>
	<ul class="list">
		{#each unorderedList as listitem, i (i)}
			<li class="list-item source-sans-3-text">
				{listitem}
			</li>
		{/each}
	</ul>
</section>

<style>
	.section-header {
		color: #259259;
	}
	.list {
		list-style-position: inside;
		color: #000080;
	}
	.list-item {
		color: #000080;
	}
</style>
