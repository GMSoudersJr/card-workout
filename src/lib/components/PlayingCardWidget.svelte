<script lang="ts">
  import { deckOfCards, discardedCards, currentCard } from '../../store';
  import { ESuitSymbolUnicode } from "../../enums/suitSymbolUnicode";
  import { ECardSymbol } from "../../enums/cardSymbol";
	import type { TCardRank } from '../../types/cardRank';
	import type { TSuit } from '../../types/suit';

  function handleClick() {
    if ( $deckOfCards.length > 0 ) {
      discardedCards.add($currentCard[0]);
      let numberOfDiscardedCards = $discardedCards.length;
      //@ts-ignore
      let scrollWidth = document.getElementById('discarded-cards-only')?.scrollWidth;
      if (numberOfDiscardedCards > 9 && numberOfDiscardedCards < 50) {
        //@ts-ignore
        document.getElementById('discarded-cards-only').scrollLeft += 25;
      }
      const randomCardIndex = Math.floor(Math.random() * $deckOfCards.length);
      const randomCard = $deckOfCards.at(randomCardIndex)
      deckOfCards.pluck(randomCardIndex);
      randomCard && currentCard.data(randomCard);
    } else {
      alert("All Done");
    }
  }

  export let rankSymbol: TCardRank;
  export let suitSymbol: TSuit;
  export let id: string;
  export let textColor: string;
  $: rank = ECardSymbol[rankSymbol as keyof typeof ECardSymbol]
  $: suit = ESuitSymbolUnicode[suitSymbol as keyof typeof ESuitSymbolUnicode]
  export let disabled: boolean;
</script>

<button
  id={id}
  class="playing-card"
  on:click={handleClick}
  aria-disabled={disabled}
  disabled={disabled}
>
  <section class="rank-and-suit">

    <slot name="rank">
      <h3 class="rank" style:color={textColor}>
        {rank || ''}
      </h3>
    </slot>

    <slot name="suit">
      <h2 class="suit" style:color={textColor}>
        {@html suit || ''}
      </h2>
    </slot>

  </section>

  <section class="rank-and-suit rank-and-suit-rotate">

    <slot name="suit-vertical-flip">
      <h2 class="suit suit-vertical-flip" style:color={textColor}>
        {@html suit || ''}
      </h2>
    </slot>

    <slot name="rank-vertical-horizontal-flip">
      <h3 class="rank rank-vertical-horizontal-flip" style:color={textColor}>
        {rank ?? ''}
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
    background: #D9D9D9;
  }
  .rank, .suit {
    line-height: 0.5em;
  }
  .rank-and-suit {
    grid-area: rank-and-suit;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    row-gap: 8px;
    justify-content: center;
    align-items: center;
  }
  .rank-and-suit-rotate {
    grid-area: rank-and-suit-rotate;
  }
  .suit-vertical-flip, .rank-vertical-horizontal-flip  {
    transform: rotate(180deg);
  }
  button:disabled,
  button[disabled] {
    background: #FFFFFF;
    filter: brightness(80%);
  }
</style>
