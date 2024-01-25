<script lang="ts">
  import { deckOfCards, discardedCards, currentCard } from '../../store';
  import { ESuitSymbolUnicode } from "../../enums/suitSymbolUnicode";
  import { ECardSymbol } from "../../enums/cardSymbol";

  function handleClick() {
    if ( $deckOfCards.length > 0 ) {
      discardedCards.add($currentCard[0]);
      const randomCardIndex = Math.floor(Math.random() * $deckOfCards.length);
      const randomCard = $deckOfCards.at(randomCardIndex)
      deckOfCards.pluck(randomCardIndex);
      randomCard && currentCard.data(randomCard);
    } else {
      alert("All Done");
    }
  }

  $: rankSymbol =  ECardSymbol[$currentCard[0]?.rank as keyof typeof ECardSymbol];
  $: suitSymbol =  ESuitSymbolUnicode[$currentCard[0]?.suit as keyof typeof ESuitSymbolUnicode];
</script>

<button
  class="playing-card"
  on:click={handleClick}
>
  <section class="rank-and-suit">

    <slot name="rank">
      <h3 class="rank">
        {rankSymbol || ''}
      </h3>
    </slot>

    <slot name="suit">
      <h2 class="suit">
        {@html suitSymbol || ''}
      </h2>
    </slot>

  </section>

  <section class="rank-and-suit rank-and-suit-rotate">

    <slot name="suit-vertical-flip">
      <h2 class="suit suit-vertical-flip">
        {@html suitSymbol || ''}
      </h2>
    </slot>

    <slot name="rank-vertical-horizontal-flip">
      <h3 class="rank rank-vertical-horizontal-flip">
        {rankSymbol ?? ''}
      </h3>
    </slot>

  </section>

</button>

<style>
  .playing-card {
    width: 100px;
    height: 161.8px;
    border-radius: 8px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 25% 1fr 25%;
    grid-template-rows: 30% 1fr 30%;
    grid-template-areas:
    "rank-and-suit . ."
    ". . ."
    ". . rank-and-suit-rotate";
  }
  .rank, .suit {
    line-height: 0.9em;
  }
  .rank-and-suit {
    grid-area: rank-and-suit;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    justify-content: center;
    align-items: center;
  }
  .rank-and-suit-rotate {
    grid-area: rank-and-suit-rotate;
  }
  .suit-vertical-flip, .rank-vertical-horizontal-flip  {
    transform: rotate(180deg);
  }
</style>
