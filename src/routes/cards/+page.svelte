<script lang="ts">
	import { send } from '$lib/transition';
	import { flip } from 'svelte/animate';
	import { discardedCards, theCurrentCard, suitExercises } from '../../store';
	import PlayingCardWidget from '$lib/components/cards/PlayingCardWidget.svelte';
	import StartButton from '$lib/components/cards/StartButton.svelte';
	import ShuffleButton from '$lib/components/cards/ShuffleButton.svelte';
	import {
		messageAboveTheStartButton,
		messageBelowTheStartButton,
		messageAboveTheShuffleButton,
		messageBelowTheShuffleButton
	} from '$lib/strings/forCardsPage';
	import PluckedTheSameCard from '$lib/components/cards/PluckedTheSameCard.svelte';
	import WorkoutCompleteButton from '$lib/components/cards/WorkoutCompleteButton.svelte';

	function handlePluckedTheSameCard(event: CustomEvent) {
		nopeNotNowMessage = event.detail.message;
		displayNopeNotNowMessage = true;
		setTimeout(() => {
			displayNopeNotNowMessage = false;
		}, 1_250);
	}

	$: displayNopeNotNowMessage = false;
	let nopeNotNowMessage: string;
</script>

<div class="page-container">
	<aside id="left-aside" class="left-aside"></aside>

	<section class="current-card-section" id="current-card-section">
		{#if $theCurrentCard.length == 0 && $discardedCards.length == 0}
			<div id="cards-intro" class="no-cards-showing">
				{#if !$suitExercises[0].exercise?.name}
					{#each messageAboveTheStartButton.forPlainCards as message (message)}
						<p class="oswald-header above-start-button">
							{@html message.toUpperCase()}
						</p>
					{/each}
				{:else}
					{#each messageAboveTheStartButton.forExerciseCards as message (message)}
						<p class="oswald-header above-start-button">
							{@html message.toUpperCase()}
						</p>
					{/each}
				{/if}
				<StartButton />
				{#if !$suitExercises[0].exercise?.name}
					{#each messageBelowTheStartButton.forPlainCards as message (message)}
						<p class="oswald-header below-start-button">
							{@html message}
						</p>
					{/each}
				{:else}
					{#each messageBelowTheStartButton.forExerciseCards as message (message)}
						<p class="oswald-header below-start-button">
							{@html message}
						</p>
					{/each}
				{/if}
			</div>
		{:else if $theCurrentCard.length > 0}
			{#each $theCurrentCard as currentCard (currentCard.name)}
				<div
					class="card-outer-container"
					out:send={{ key: currentCard.name }}
					in:send={{ key: currentCard.name }}
					animate:flip={{ duration: 200 }}
				>
					<PlayingCardWidget
						id={currentCard.name}
						rankSymbol={currentCard.rank}
						suitSymbol={currentCard.suit}
						exerciseName={currentCard.exerciseName}
						textColor={currentCard.textColor}
						reps={currentCard.value}
						disabled={currentCard.hasBeenDiscarded}
						on:pluckedTheSameCard={handlePluckedTheSameCard}
					/>
				</div>
			{/each}
		{:else if $discardedCards.length == 52 && $theCurrentCard.length == 0}
			<div id="cards-outro" class="no-cards-showing">
				{#if !$suitExercises[0].exercise?.name}
					{#each messageAboveTheShuffleButton.forPlainCards as message (message)}
						<p class="oswald-header above-shuffle-button">
							{@html message.toUpperCase()}
						</p>
					{/each}
				{:else}
					{#each messageAboveTheShuffleButton.forExerciseCards as message (message)}
						<p class="oswald-header above-shuffle-button">
							{@html message.toUpperCase()}
						</p>
					{/each}
				{/if}
				{#if !$suitExercises[0].exercise?.name}
					<ShuffleButton />
				{:else}
					<WorkoutCompleteButton />
				{/if}
				{#if !$suitExercises[0].exercise?.name}
					{#each messageBelowTheShuffleButton.forPlainCards as message (message)}
						<p class="oswald-header below-shuffle-button">
							{@html message.toUpperCase()}
						</p>
					{/each}
				{:else}
					{#each messageBelowTheShuffleButton.forExerciseCards as message (message)}
						<p class="oswald-header below-shuffle-button">
							{@html message.toUpperCase()}
						</p>
					{/each}
				{/if}
			</div>
		{/if}
	</section>

	<aside id="right-aside" class="right-aside">
		<div>
			{#if displayNopeNotNowMessage && $discardedCards.length <= 50}
				<PluckedTheSameCard {nopeNotNowMessage} />
			{/if}
		</div>
	</aside>
</div>

<style>
	.page-container {
		display: grid;
		grid-template-columns: 1fr 161.8px 1fr;
		grid-template-rows: 1fr;
		justify-items: center;
		align-items: center;
	}
	.current-card-section {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto-fill;
		justify-items: center;
		align-items: center;
	}
	.no-cards-showing {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(auto, 1fr);
		align-items: center;
	}
	.right-aside {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, 1fr);
		padding: 10px;
		justify-items: center;
	}
	.right-aside,
	.left-aside {
		height: 100%;
		width: 100%;
		text-align: center;
		align-content: center;
	}
	.above-start-button,
	.below-start-button,
	.above-shuffle-button,
	.below-shuffle-button {
		text-align: center;
		color: #000080;
	}
</style>
