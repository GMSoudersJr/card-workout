<script lang="ts">
	import { remainingCardsString} from "$lib/strings/forCardsPage";

  import {
    theDeckOfCards,
    theRemainingDeck,
  } from "../../../store";
	import MiniCardTicks from "./MiniCardTicks.svelte";

</script>

<div class="deck-info-container">
  <div
    class="info-wrapper"
    data-testid="cards remaining"
  >
    <p class="cards-left-text source-sans-3-text">
      {remainingCardsString}
    </p>
    <h3 class="cards-left-number oswald-header">
      {$theRemainingDeck.length}
    </h3>
  </div>
  <div
    class="card-lines-container"
    id="card-tick-container"
  >
    {#each $theDeckOfCards as card (card.deckIndex)}
      <MiniCardTicks name={card.name} hasBeenPlucked={card.hasBeenPlucked}/>
    {/each}
  </div>
</div>

<style>
  .deck-info-container {
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    row-gap: 0.5rem;
  }
  .info-wrapper {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: min-content;
    column-gap: 0.5rem;
  }
  .cards-left-text {
    place-self: end;
    color: #000080;
    font-size: large;
  }
  .cards-left-number {
    color: #000080;
    font-size: large;
  }
  .card-lines-container {
    display: grid;
    grid-template-columns: repeat(52, 1px);
    column-gap: 4px;
    align-self: center;
  }
</style>
