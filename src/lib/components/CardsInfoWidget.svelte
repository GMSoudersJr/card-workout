<script lang="ts">
	import DeckInfoWidget from "./DeckInfoWidget.svelte";
	import RankInfoWidget from "./RankInfoWidget.svelte";
	import SuitInfoWidget from "./SuitInfoWidget.svelte";


  const infoChoices = [
    {
      id: "radio-deck",
      value: "deck",
      innerHtml: "Deck",
      widget: DeckInfoWidget,
    },
    {
      id: "radio-rank",
      value: "rank",
      innerHtml: "Rank",
      widget: RankInfoWidget,
    },
    {
      id: "radio-suit",
      value: "suit",
      innerHtml: "Suit",
    },
  ];


  $: group = 'deck';
</script>

<div class="deck-of-cards-info-widget-container">
    <legend>View info by:</legend>
    <div class="radio-buttons-container">
      {#each infoChoices as choice}
      <label for={choice.id}>
        {choice.innerHtml}
        <input
          bind:group={group}
          type="radio"
          id={choice.id}
          name="deck-of-cards-info"
          value={choice.value}
        >
      </label>
      {/each}
    </div>
      {#if group}
        <DeckInfoWidget />
        <RankInfoWidget />
      {/if}
</div>

<style>
  .deck-of-cards-info-widget-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    grid-template-rows: min-content;
    justify-items: center;
    border: 1px solid orange;
    gap: 1rem;
  }
  label {
    display: grid;
    grid-template-columns: min-content;
    align-items: center;
  }
  .radio-buttons-container {
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-template-rows: min-content;
    gap: 3rem;
  }
</style>
