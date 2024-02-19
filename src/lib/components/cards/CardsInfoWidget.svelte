<script lang="ts">
	import type {ComponentType} from "svelte";

  import { suitExercises } from "../../../store";

	import DeckInfoWidget from "./DeckInfoWidget.svelte";
	import RankInfoWidget from "./RankInfoWidget.svelte";
	import SuitInfoWidget from "./SuitInfoWidget.svelte";
  import RepsInfoWidget from "./RepsInfoWidget.svelte";
  import type {TSuitExercise} from "../../../types/suitExercise";
  import type {TSuit} from "../../../types/suit";

  interface InfoWidgets {
    [key: string]: ComponentType
  }

  const infoWidgets: InfoWidgets = {
    deck: DeckInfoWidget,
    rank: RankInfoWidget,
    suit: SuitInfoWidget,
    reps: RepsInfoWidget,
  };

  interface InfoChoice {
    id: string;
    value: string;
    innerHtml: string;
    widget: ComponentType
  }

  let infoChoices: InfoChoice[] = [
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
    {
      id: "radio-reps",
      value: "reps",
      innerHtml: "Reps",
      widget: RepsInfoWidget,
    },
  ];

  const exercisesHaveNotBeenChosen = (entry: TSuitExercise<TSuit>) => {
    return entry.exerciseName === undefined;
  }

  $: radioButtons = () => {
    if ( $suitExercises.some(exercisesHaveNotBeenChosen) ) {
    return infoChoices.slice(0, -1);
    } else {
      return infoChoices;
    }
  };

  $: group = '';
</script>

<div class="cards-info-widget-container">
    <div class="radio-buttons-container">
      {#each radioButtons() as choice}
        <label
          for={choice.id}
          class="listitem-label source-sans-3-text"
        >
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
    <div class="widget-container">
      <svelte:component this={infoWidgets[group]} />
    </div>
</div>

<style>
  .cards-info-widget-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    justify-items: center;
  }
  .radio-buttons-container {
    width: 300px;
    background: #F1F2F2;
    padding: 0.7rem 0;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .listitem-label {
    display: grid;
    grid-template-columns: min-content;
    justify-content: center;
    align-items: center;
    font-size: medium;
    color: #000080;
  }
  .widget-container {
    place-self: center;
  }
  input {
    margin-top: 0.5rem;
    display: grid;
    place-content: center;
  }
  input[type='radio'] {
    appearance: none;
    background-color: #FFFFFF;
    margin: 0;
    font: inherit;
    color: #000080;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid #000080;
    border-radius: 50%;
    justify-self: center;
  }
  input[type='radio']::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 220ms transform ease-in-out;
    box-shadow: inset 1em 1em #39FF14;
  }
  input[type='radio']:checked::before {
    transform: scale(1);
  }
</style>
