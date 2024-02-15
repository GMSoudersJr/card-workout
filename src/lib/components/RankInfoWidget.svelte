<script lang="ts">
  import { theRemainingDeck } from "../../store";
  import { ECardRankSymbol } from "../../enums/cardRankSymbol";
	import RankInfoBox from "./RankInfoBox.svelte";

  let rankSymbols: string[] = Object.keys(ECardRankSymbol);
  $: ranks = rankSymbols.map((rankSymbol) => {
    const arrayOfCards = $theRemainingDeck.filter((card) => {
      return card.rank == rankSymbol;
    });
    return {
      symbol: ECardRankSymbol[rankSymbol as keyof typeof ECardRankSymbol],
      count: arrayOfCards.length
    }
  });

</script>

<div class="rank-info-widget">
  <ul data-testid="card rank list">
  {#each ranks as rank}
    <li class={`rank-${rank.symbol} rank-listitem`} >
      <RankInfoBox rank={rank.symbol} count={rank.count} />
    </li>
  {/each}
  </ul>
</div>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(5, max-content);
    grid-template-rows: repeat(3, min-content);
    column-gap: 1rem;
    row-gap: 0.5rem;
    justify-items: center;
    align-items: baseline;
    grid-template-areas: 
    "TWO THREE  FOUR FIVE SIX"
    ". SEVEN EIGHT NINE ."
    "TEN JACK QUEEN KING ACE";
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
  li {
    list-style: none;
  }
</style>

