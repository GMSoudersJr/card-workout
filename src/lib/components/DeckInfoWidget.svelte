<script>
  import { deckOfCards } from "../../store";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<div class="deck-info-container">
  <p>Cards left:</p>
  <h3 >
    {$deckOfCards.length}
  </h3>
  <div class="card-lines">
    {#each $deckOfCards as card (card.name)}
      <div
        id="card-line"
        class="card-line"
        transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x'}}
      >
      </div>
    {/each}

  </div>
</div>

<style>
  .deck-info-container {
    width: 100px;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: repeat(2, min-content);
    align-items: baseline;
    justify-content: center;
    gap: 0.5rem;
  }
  .card-lines {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    display: grid;
    grid-template-rows: repeat(52, 1px);
    row-gap: 1px;
    height: 100px;

  }
  .card-line {
    width: 100px;
    height: 1px;
    background: #000000;
  }
</style>

