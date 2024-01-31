<script>
  import { deckOfCards } from "../../store";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { flip } from "svelte/animate";
</script>

<div class="deck-info-container">
  <p class="cards-left-text">Cards left:</p>
  <h3 class="cards-left-number">
    {$deckOfCards.length}
  </h3>
  <div class="card-lines">
    {#each $deckOfCards as card (card.name)}
      <div
        id="card-line"
        class="card-line"
        transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'y'}}
        animate:flip
      >
      </div>
    {/each}

  </div>
</div>

<style>
  .deck-info-container {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: repeat(2, min-content);
    align-items: baseline;
    justify-content: center;
    justify-items: stretch;
    gap: 0.5rem;
  }
  .cards-left-text {
    place-self: end;
  }
  .card-lines {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: repeat(52, 1px);
    column-gap: 3px;
    align-self: center;
  }
  .card-line {
    width: 1px;
    height: 30px;
    background: #000000;
  }
</style>

