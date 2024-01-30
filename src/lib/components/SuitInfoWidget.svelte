<script lang="ts">
  import { deckOfCards } from "../../store";
  import { ESuit } from "../../enums/suit";
	import {ESuitSymbolUnicode} from "../../enums/suitSymbolUnicode";
  import { ESuitColors } from "../../enums/suitColors";

  let suitNames: string[] = Object.keys(ESuit);
  $: suits = suitNames.map((suitName) => {
    const arrayOfCards = $deckOfCards.filter((card) => {
      return card.suit == suitName;
    });
    return {
      name: suitName.toLowerCase(),
      color: ESuitColors[suitName as keyof typeof ESuitColors],
      icon: ESuitSymbolUnicode[suitName as keyof typeof ESuitSymbolUnicode],
      count: arrayOfCards.length,
    }
  });
</script>

<div id="suit-info-widget" class="suit-info-widget">
  <ul>
    {#each suits as suit (suit.name)}
      <li style:color={suit.color} class={suit.name}>
        {#if suit.count == 0}
          <s class="strike-through">
            {@html suit.icon}: {suit.count}
          </s>
        {:else}
          {@html suit.icon}: {suit.count}
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
  ul {
    display: grid;
    grid-template-rows: repeat(4, min-content);
    justify-content: center;
    justify-items: baseline;
  }
  .strike-through {
    color: #A2A2A2;
  }
  li {
    list-style: none;
    font-size: 1.1rem;
  }
</style>
