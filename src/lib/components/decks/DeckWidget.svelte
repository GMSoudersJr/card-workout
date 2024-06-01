<script lang="ts">
	import type { TSuit } from '../../../types/suit';
	import type { TSuitExercise } from '../../../types/suitExercise';
	import { EExerciseNames } from '../../../enums/exerciseNames';
	import { convertTypeValueToEnumValue } from '../../../functions/convertTypeToEnumValue';
	import {
		discardedCards,
		suitExercises,
		theCurrentCard,
		theDeckOfCards,
		workoutName
	} from '../../../store';
	import { goto } from '$app/navigation';

	export let deckName: string = 'Full Body I';
	export let description: string;
	export let workoutSuitExercises: TSuitExercise<TSuit>[];
	const exerciseData = workoutSuitExercises.map((exercise) => {
		if (exercise.exercise?.embeds !== undefined && exercise.exercise.name !== undefined) {
			return {
				name: convertTypeValueToEnumValue(exercise.exercise.name, EExerciseNames),
				href: `index/${exercise.exercise.name.toLowerCase()}`,
				hasEmbed: exercise.exercise.embeds[0] !== ''
			};
		}
	});

	async function handleClick() {
		workoutSuitExercises.forEach((entry) => {
			const { suit, exercise } = entry;
			if (exercise != undefined) {
				suitExercises.updateExercise(suit, exercise.name);
			}
		});
		theDeckOfCards.setExercises($suitExercises);
		workoutName.rename(deckName);
		discardedCards.reset();
		theCurrentCard.reset();
		await goto('/cards');
	}
</script>

<section class="full-deck">
	<button class="deck" on:click={handleClick}>
		<h4 class="deck-name oswald-header">
			{deckName}
		</h4>
	</button>

	<div class="deck-workout-info">
		<h3 class="oswald-header deck-header">
			{deckName}
		</h3>
		{#if exerciseData}
			<ul>
				{#each exerciseData as exercise, i (i)}
					<li class="exercise-name list-item oswald-header">
						{#if exercise?.hasEmbed}
							<a href={exercise?.href} class="exercise-name-demo-link">
								{exercise?.name.toUpperCase()}
							</a>
						{:else}
							<a href={exercise?.href} class="exercise-name-no-demo-link">
								{exercise?.name.toUpperCase()}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
		<p class="description source-sans-3-text">{description}</p>
	</div>
</section>

<style>
	.full-deck {
		display: grid;
		grid-template-columns: min-content 1fr;
		grid-template-rows: 1fr;
		column-gap: 1rem;
		align-items: center;
	}
	.deck {
		width: 100px;
		height: 161.8px;
		border-radius: 8px;
		background-color: #000080;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		justify-content: center;
		align-items: center;
	}
	.deck-workout-info {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: min-content 1fr min-content;
	}
	.deck-name,
	.exercise-name {
		color: #ffffff;
	}
	.exercise-name {
		list-style: inside;
		color: #000080;
	}
	.deck-header {
		color: #259259;
	}
	.exercise-name-demo-link {
		color: #000080;
	}
	.exercise-name-no-demo-link {
		color: #000080;
		text-decoration: none;
		pointer-events: none;
	}
</style>
