<script lang="ts">
  import { deckOfCards } from "../../store";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { flip } from "svelte/animate";
</script>

<div class="deck-info-container">
  <div class="info-wrapper">
    <p class="cards-left-text">Remaining:</p>
    <h3 class="cards-left-number">
      {$deckOfCards.length}
    </h3>
  </div>
  <div class="card-lines-container">
    {#each $deckOfCards as card (card.name)}
      <div
        id="card-line"
        class="card-line"
        transition:slide={{ delay: 200, duration: 500, easing: quintOut, axis: 'y'}}
        animate:flip={{ delay: 200, duration: 500 }}
      >
      </div>
    {/each}

  </div>
</div>

<style>
  .deck-info-container {
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: repeat(2, 40px);
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
  }
  .cards-left-number {
    color: #000080;
  }
  .card-lines-container {
    display: grid;
    grid-template-columns: repeat(52, 1px);
    column-gap: 4px;
    align-self: center;
  }
  .card-line {
    width: 3px;
    height: 30px;
    border: 1px solid #000080;
    background: #39FF14;
  }
</style>
