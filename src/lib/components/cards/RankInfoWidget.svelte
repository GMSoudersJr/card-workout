<script lang="ts">
	import { theRemainingDeck } from '../../../store';
	import { ECardRankSymbol } from '../../../enums/cardRankSymbol';
	import RankInfoBox from './RankInfoBox.svelte';
	import { convertTypeValueToEnumValue } from '../../../functions/convertTypeToEnumValue';
	import type { TCardRankSymbol } from '../../../types/cardRankSymbol';

	let rankSymbols: TCardRankSymbol[] = Object.keys(ECardRankSymbol) as TCardRankSymbol[];
	$: ranks = rankSymbols.map((rankSymbol) => {
		const arrayOfCards = $theRemainingDeck.filter((card) => {
			return card.rank == rankSymbol;
		});
		return {
			symbol: convertTypeValueToEnumValue(rankSymbol, ECardRankSymbol),
			count: arrayOfCards.length
		};
	});
</script>

<ul class="rank-list">
	{#each ranks as rank}
		<li class={`rank-${rank.symbol} rank-listitem`}>
			<RankInfoBox rank={rank.symbol} count={rank.count} />
		</li>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		height: 100%;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(3, 1fr);
		justify-content: center;
		align-content: center;
		grid-template-areas:
			'TWO THREE  FOUR FIVE SIX'
			'. SEVEN EIGHT NINE .'
			'TEN JACK QUEEN KING ACE';
		padding: 0.15rem;
	}
	li {
		list-style: none;
		display: grid;
		justify-content: center;
		align-items: center;
	}
	.rank-2 {
		grid-area: TWO;
	}
	.rank-3 {
		grid-area: THREE;
	}
	.rank-4 {
		grid-area: FOUR;
	}
	.rank-5 {
		grid-area: FIVE;
	}
	.rank-6 {
		grid-area: SIX;
	}
	.rank-7 {
		grid-area: SEVEN;
	}
	.rank-8 {
		grid-area: EIGHT;
	}
	.rank-9 {
		grid-area: NINE;
	}
	.rank-10 {
		grid-area: TEN;
	}
	.rank-J {
		grid-area: JACK;
	}
	.rank-Q {
		grid-area: QUEEN;
	}
	.rank-K {
		grid-area: KING;
	}
	.rank-A {
		grid-area: ACE;
	}
</style>
