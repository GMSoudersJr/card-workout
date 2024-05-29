<script lang="ts">
	import { lorem } from '$lib/strings/lorem';

	export let heading: string;
	export let listOfParagraphs: string[] = [lorem];
</script>

<section class="about-section">
	<h3 class="about-section-header oswald-header">
		{heading.toUpperCase()}
	</h3>
	{#each listOfParagraphs as paragraph, i (i)}
		<p class="paragraph source-sans-3-text">
			{paragraph}
		</p>
	{/each}
</section>

<style>
	.about-section-header {
		color: #259259;
	}
	p {
		color: #000080;
	}
	p:not(:last-child) {
		padding-bottom: 0.25rem;
	}
</style>
