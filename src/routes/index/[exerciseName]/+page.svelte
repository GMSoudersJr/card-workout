<script lang="ts">
	import { EExerciseNames } from '../../../enums/exerciseNames';
	import { EExercisePositions } from '../../../enums/exercisePositions';
	import { EExerciseVariations } from '../../../enums/exerciseVariations';
	import {
		convertTypeValueToEnumValue,
		convertTypeValuesToEnumValues
	} from '../../../functions/convertTypeToEnumValue';
	import type { PageData } from './$types';

	export let data: PageData;
	const { exercise } = data;

	console.log(exercise);
	const { name, embeds, positions, variations, ...others } = exercise;

	const exerciseName = convertTypeValueToEnumValue(name!, EExerciseNames);

	const exercisePositions = convertTypeValuesToEnumValues(positions!, EExercisePositions);

	const exerciseVariations = convertTypeValuesToEnumValues(variations!, EExerciseVariations);
</script>

<div class="index-exercise-page-container">
	<h2 class="exercise-name oswald-header">
		{exerciseName.toUpperCase()}
	</h2>

	{#if embeds}
		<section class="demo-container">
			{#each embeds as embed, i (i)}
				<iframe
					width="560"
					height="315"
					class="demo"
					src={`https://www.youtube.com/embed/${embed}`}
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

	<div class="information">
		<section>
			<h3>Positions</h3>
			<ul>
				{#if exercisePositions}
					{#each exercisePositions as position}
						<li>{position}</li>
					{/each}
				{/if}
			</ul>
		</section>
		<section>
			<h3>Variations</h3>
			<ul>
				{#if exerciseVariations}
					{#each exerciseVariations as variation}
						<li>{variation}</li>
					{/each}
				{/if}
			</ul>
		</section>
		<section>
			<h3>Description</h3>
		</section>
	</div>
</div>

<style>
	.index-exercise-page-container {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, min-content);
		row-gap: 2rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		justify-items: center;
		align-items: center;

		overflow-x: hidden;
		overflow-y: auto;
		-ms-overflow-style: none;
		scrollbar-width: none;
		border: 1px solid green;
	}
	.demo-container {
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: repeat(auto-fill, min-content);
		row-gap: 1rem;
	}
	.demo {
		width: 100%;
		aspect-ratio: 16 / 9;
		place-self: center;
	}
</style>
