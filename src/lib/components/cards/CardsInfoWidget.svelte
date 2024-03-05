<script lang="ts">
	import type {ComponentType} from "svelte";
  import { radioButtonLabelNames } from '$lib/strings/forCardsPage';

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

  type Group = 'deck' | 'suit' | 'rank' | 'reps' | string;

  const infoWidgets: InfoWidgets = {
    deck: DeckInfoWidget,
    rank: RankInfoWidget,
    suit: SuitInfoWidget,
    reps: RepsInfoWidget,
  };

  interface InfoChoice {
    id: string;
    value: string;
    labelName: string;
    widget: ComponentType
  }

  let infoChoices: InfoChoice[] = [
    {
      id: "radio-deck",
      value: "deck",
      labelName: radioButtonLabelNames.deck,
      widget: DeckInfoWidget,
    },
    {
      id: "radio-rank",
      value: "rank",
      labelName: radioButtonLabelNames.rank,
      widget: RankInfoWidget,
    },
    {
      id: "radio-suit",
      value: "suit",
      labelName: radioButtonLabelNames.suit,
      widget: SuitInfoWidget,
    },
    {
      id: "radio-reps",
      value: "reps",
      labelName: radioButtonLabelNames.reps,
      widget: RepsInfoWidget,
    },
  ];

  const exercisesHaveNotBeenChosen = (entry: TSuitExercise<TSuit>) => {
    return entry.exercise?.name === undefined;
  }

  $: radioButtons = () => {
    if ( $suitExercises.some(exercisesHaveNotBeenChosen) ) {
    return infoChoices.slice(0, -1);
    } else {
      return infoChoices;
    }
  };

  function transition(action: () => void) {
    // @ts-ignore
    if (!document.startViewTransition) {
      return action
    } else {
      // @ts-ignore
      document.startViewTransition(action);
    }
  }


  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    // @ts-ignore
    if ( !document.startViewTransition ) {
      group = target.value;
      showThisWidget = group;
    } else {
      transition(() => showThisWidget = group);
    }
  }
  function handleClick(event: Event) {
    const target = event.target as HTMLInputElement;
    if ( group === target.value ) {
      group = '';
    }
  }

  let group: Group = '';
  let showThisWidget = group;
</script>

<div class="cards-info-widget-container">
    <div class="radio-buttons-container">
      {#each radioButtons() as choice}
        <label
          for={choice.id}
          class="listitem-label source-sans-3-text"
        >
        {choice.labelName}
        <input
          bind:group={group}
          type="radio"
          id={choice.id}
          name="deck-of-cards-info"
          value={choice.value}
          on:change={handleChange}
          on:click={handleClick}
        >
      </label>
      {/each}
    </div>
    <div class="widget-container">
      {#if group !== ''}
      <svelte:component this={infoWidgets[showThisWidget]} />
      {/if}
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
    width: 100%;
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
    display: grid;
    justify-items: stretch;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
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
