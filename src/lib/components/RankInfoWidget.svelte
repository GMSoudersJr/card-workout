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
    <li>
      {rank.symbol}s: {rank.count}
    </li>
  {/each}
  </ul>
</div>

<style>
  li {
    list-style: none;
  }
</style>

