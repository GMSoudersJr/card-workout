<script lang="ts">
	import ParagraphWidget from '$lib/components/index/ParagraphWidget.svelte';
	import ListWidget from '$lib/components/index/ListWidget.svelte';
	import { EExerciseNames } from '../../../enums/exerciseNames';
	import { EExercisePositions } from '../../../enums/exercisePositions';
	import { EExerciseVariations } from '../../../enums/exerciseVariations';
	import {
		convertTypeValueToEnumValue,
		convertTypeValuesToEnumValues
	} from '../../../functions/convertTypeToEnumValue';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	const { exercise } = data;

	const { name, description, embeds, positions, variations } = exercise;

	const exerciseName = convertTypeValueToEnumValue(name!, EExerciseNames);

	const exercisePositions = convertTypeValuesToEnumValues(positions!, EExercisePositions);

	const exerciseVariations = convertTypeValuesToEnumValues(variations!, EExerciseVariations);
	const baseYouTubeEmbedUrl = 'https://www.youtube.com/embed/';
</script>

<div class="index-exercise-page-container">
	<h2 class="exercise-name oswald-header">
		{exerciseName.toUpperCase()}
	</h2>

	{#if embeds}
		<section class="demo-container">
			{#each embeds as embed, i (i)}
				<iframe
					id={`${exercise.name?.toLowerCase()}-embedded-video`}
					width="560"
					height="315"
					class="embedded-video"
					src={`${baseYouTubeEmbedUrl}${embed}`}
					title="YouTube  video player"
					frameborder="0"
					allowfullscreen
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
				>
				</iframe>
			{/each}
		</section>
	{/if}

	<div class="scroll-wrapper">
		<div class="scrollable-details">
			{#if description}
				<p class="exercise-description source-sans-3-text">{description}</p>
			{/if}

			<div class="information-container">
				<div class="split-row">
					<ListWidget heading="Positions" unorderedList={exercisePositions} />
					<ListWidget heading="Variations" unorderedList={exerciseVariations} />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.exercise-name {
		color: #000080;
	}
	.exercise-description {
		max-width: 560px;
		font-size: 0.8125rem;
		color: #555;
		text-align: center;
		padding: 0 0.5rem;
		line-height: 1.6;
	}
	.index-exercise-page-container {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: min-content min-content 1fr;
		row-gap: 1rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		justify-items: center;
		align-items: start;

		overflow: hidden;
	}
	.scroll-wrapper {
		position: relative;
		width: 100%;
		max-width: 560px;
		min-height: 0;
		align-self: stretch;
	}
	.scroll-wrapper::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 3rem;
		background: linear-gradient(to bottom, transparent, white);
		pointer-events: none;
	}
	.scrollable-details {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		overflow-y: auto;
		-ms-overflow-style: none;
		scrollbar-width: none;
		padding-bottom: 3rem;
	}
	.demo-container {
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: repeat(auto-fill, min-content);
		row-gap: 1rem;
	}
	.embedded-video {
		width: 100%;
		aspect-ratio: 16 / 9;
		place-self: center;
	}
	.information-container {
		max-width: 560px;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(auto-fill, min-content);
		row-gap: 1rem;
	}
	.split-row {
		display: flex;
		gap: 3rem;
		align-items: flex-start;
	}
</style>
