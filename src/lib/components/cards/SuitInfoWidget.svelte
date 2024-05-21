<script lang="ts">
	import { theRemainingDeck } from '../../../store';
	import { ESuit } from '../../../enums/suit';
	import { ESuitSymbolUnicode } from '../../../enums/suitSymbolUnicode';
	import { ESuitColors } from '../../../enums/suitColors';
	import SuitInfoBox from './SuitInfoBox.svelte';

	let suitNames: string[] = Object.keys(ESuit);
	$: suits = suitNames.map((suitName) => {
		const arrayOfCards = $theRemainingDeck.filter((card) => {
			return card.suit == suitName;
		});
		return {
			name: suitName.toLowerCase(),
			color: ESuitColors[suitName as keyof typeof ESuitColors],
			icon: ESuitSymbolUnicode[suitName as keyof typeof ESuitSymbolUnicode],
			count: arrayOfCards.length
		};
	});
</script>

<div id="suit-info-widget" class="suit-info-widget">
	{#each suits as suit (suit.name)}
		<SuitInfoBox icon={suit.icon} color={suit.color} count={suit.count} />
	{/each}
</div>

<style>
	.suit-info-widget {
		padding: 0.5rem;
		display: grid;
		grid-template-columns: repeat(2, minmax(102px, 103.6px));
		grid-template-rows: repeat(2, min-content);
		justify-content: center;
		align-content: center;
		column-gap: 6.18%;
		row-gap: 15%;
	}
</style>
