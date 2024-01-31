<script lang="ts">
	import type {ComponentType} from "svelte";

	import DeckInfoWidget from "./DeckInfoWidget.svelte";
	import RankInfoWidget from "./RankInfoWidget.svelte";
	import SuitInfoWidget from "./SuitInfoWidget.svelte";

  interface InfoWidgets {
    [key: string]: ComponentType
  }

  const infoWidgets: InfoWidgets = {
    deck: DeckInfoWidget,
    rank: RankInfoWidget,
    suit: SuitInfoWidget,
  };

  interface InfoChoice {
    id: string;
    value: string;
    innerHtml: string;
    widget: ComponentType
  }

  const infoChoices: InfoChoice[] = [
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
      widget: SuitInfoWidget,
    },
  ];

  $: group = '';
</script>

<div class="deck-of-cards-info-widget-container">
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
    <svelte:component this={infoWidgets[group]} />
</div>

<style>
  .deck-of-cards-info-widget-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    grid-template-rows: min-content;
    justify-items: center;
    align-items: center;
    padding-top: 1rem;
    gap: 1.5rem;
  }
  input {
    margin-top: 0.5rem;
  }
  label {
    display: grid;
    grid-template-columns: min-content;
    align-items: center;
    font-size: large;
  }
  .radio-buttons-container {
    justify-content: center;
    background: #F1F2F2;
    padding: 8px 15px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-template-rows: min-content;
    gap: 3rem;
  }
</style>
