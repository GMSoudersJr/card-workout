<script lang="ts">
	import { EExerciseNames } from '../../../enums/exerciseNames';
	import { convertTypeValueToEnumValue } from '../../../functions/convertTypeToEnumValue';
	import type { TExercise } from '../../../types/exercise';
	import type { TExerciseName } from '../../../types/exerciseName';

	export let exercise: TExercise<TExerciseName>;
	const exerciseName = convertTypeValueToEnumValue(exercise.name!, EExerciseNames).toUpperCase();
	const hrefExerciseName = exercise.name?.toLowerCase();
</script>

<div class="index-card">
	<div class="exercise-name-demo-link">
		{#if exercise.embeds}
			{#each exercise.embeds as embed (embed)}
				{#if embed === ''}
					<h1 class="oswald-header header">
						{exerciseName}
					</h1>
				{:else}
					<a href={`/index/${hrefExerciseName}`}>
						<h1 class="oswald-header header">
							{exerciseName}
						</h1>
					</a>
				{/if}
			{/each}
		{/if}
	</div>
	{#if exercise.emojis}
		<section class="emoji-section">
			{#each exercise.emojis as emoji (emoji)}
				<p class="noto-emoji-font emoji">{emoji}</p>
			{/each}
		</section>
	{/if}
</div>

<style>
	.header {
		color: #000080;
		font-size: x-large;
	}
	.index-card {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, min-content);
		background: linear-gradient(90deg, #f1f1f1, #ffffff);
		row-gap: 0.5rem;
		border-radius: 5px;
		border-left: 5px solid #000080;
		padding-left: 12px;
		padding-top: 6px;
		padding-bottom: 6px;
	}
	.emoji-section {
		display: flex;
		flex-direction: row;
	}
	.emoji {
		font-size: 1rem;
		color: #000080;
	}
</style>
