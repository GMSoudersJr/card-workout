<script>
  import { deckOfCards } from "../../store";
</script>

<div class="deck-info-container">
  <p>Cards remaining:</p>
  <h3 >
    {$deckOfCards.length}
  </h3>
</div>

<style>
  .deck-info-container {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: min-content;
    align-items: baseline;
    gap: 0.5rem;
  }
</style>

