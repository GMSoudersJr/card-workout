<script lang="ts">
  import { deckOfCards, discardedCards, currentCard } from '../../store';
  import { ESuitSymbolUnicode } from "../../enums/suitSymbolUnicode";
  import { ECardRankSymbol } from "../../enums/cardRankSymbol";
	import type { TCardRank } from '../../types/cardRank';
	import type { TSuit } from '../../types/suit';

  function handleClick() {
    if ( $deckOfCards.length > 0 ) {
      let widthOfUnderCard = 25;
      discardedCards.add($currentCard[0]);
      let numberOfDiscardedCards = $discardedCards.length;
      let clientWidth = document.getElementById('discarded-cards-only')?.clientWidth;
      //@ts-ignore
      if ( clientWidth / 51 > 25 ) {
        //@ts-ignore
        widthOfUnderCard = clientWidth / 51;
      }
      let widthOfCards = 100 + ((numberOfDiscardedCards - 1) * widthOfUnderCard);
      //@ts-ignore
      if ( widthOfCards >= clientWidth ) {
        //@ts-ignore
        let lengthToScroll = Math.ceil(widthOfCards - clientWidth);
        //@ts-ignore
        // document.getElementById('discarded-cards-only').scrollLeft = lengthToScroll;
        document.getElementById('discarded-cards-only')?.scrollTo({
          top: 0,
          left: lengthToScroll,
          behavior: 'smooth'
        });
      }
      const randomCardIndex = Math.floor(Math.random() * $deckOfCards.length);
      const randomCard = $deckOfCards.at(randomCardIndex)
      deckOfCards.pluck(randomCardIndex);
      randomCard && currentCard.data(randomCard);
    } else if ( $deckOfCards.length == 0 ) {
      discardedCards.add($currentCard[0]);
      currentCard.reset();
    }
  }

  export let rankSymbol: TCardRank;
  export let suitSymbol: TSuit;
  export let id: string;
  export let textColor: string;
  $: rank = ECardRankSymbol[rankSymbol as keyof typeof ECardRankSymbol]
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
      <h3 class="suit" style:color={textColor}>
        {@html suit || ''}
      </h3>
    </slot>

  </section>

  <section class="rank-and-suit rank-and-suit-rotate">

    <slot name="suit-vertical-flip">
      <h3 class="suit suit-vertical-flip" style:color={textColor}>
        {@html suit || ''}
      </h3>
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
    aspect-ratio: 1 / 1.618;
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
    background: #FFF;
  }
  .rank, .suit {
    line-height: 0.6em;
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
