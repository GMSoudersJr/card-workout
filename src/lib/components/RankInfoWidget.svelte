<script lang="ts">
  import { deckOfCards } from "../../store";
  import { ECardRankSymbol } from "../../enums/cardRankSymbol";

  let rankSymbols: string[] = Object.keys(ECardRankSymbol);
  $: ranks = rankSymbols.map((rankSymbol) => {
    const arrayOfCards = $deckOfCards.filter((card) => {
      return card.rank == rankSymbol;
    });
    return {
      symbol: ECardRankSymbol[rankSymbol as keyof typeof ECardRankSymbol],
      count: arrayOfCards.length
    }
  });

</script>

<div class="rank-info-widget">
  <ul>
  {#each ranks as rank}
    <li class={`rank-${rank.symbol}`}>
    {#if rank.count == 0}
      <s class="strike-through">
      {rank.symbol}s: {rank.count}
      </s>
    {:else}
      {rank.symbol}s: {rank.count}
    {/if}
    </li>
  {/each}
  </ul>
</div>

<style>
  .strike-through {
    color: #D9D9D9;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-template-rows: repeat(5, min-content);
    column-gap: 1rem;
    row-gap: 0.5rem;
    justify-content: stretch;
    justify-items: center;
    grid-template-areas: 
    "TWO SIX JACK"
    "THREE SEVEN QUEEN"
    "FOUR EIGHT KING"
    "FIVE NINE ACE"
    ". TEN . ";
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

