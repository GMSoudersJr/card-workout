<script lang="ts">
  import { ESuitSymbolUnicode } from "../../../enums/suitSymbolUnicode";

  const listOfConsiderations = [
    `Full body Vs. Isolated group`,
    `Available space and positioning`,
    `WARM-UP & KISS! Keep It Simple, Seriously`,
    `${ESuitSymbolUnicode.CLUBS} - 'C' for Core (Ab exercise)`,
    `${ESuitSymbolUnicode.DIAMONDS} - 'D' for Dynamic / 4 limbs move`,
    `${ESuitSymbolUnicode.HEARTS} - 'H' for HIIT / An exercise you love`,
    `${ESuitSymbolUnicode.SPADES} - 'S' for Squats (Leg exercise)`,
    `Each suit is 100 reps, so 400 in total!`,
    `Make it yours and have fun!`,
  ];

</script>

<section
  class="considerations-container"
  data-testid="considerations-container"
  id="considerations-container"
>
  <h4 class="oswald-header">CONSIDERATIONS:</h4>
  <ul
    class="exercise-hint-list source-sans-3-text"
    data-testid="exercise-consideration-list"
    id="exercise-consideration-list"
  >
     {#each listOfConsiderations as aConsideration (aConsideration)}
       <li
         class="exercise-consideration-listitem"
         data-testid="exercise-consideration-listitem"
         id="exercise-consideration-listitem"
       >
         <p>
           {@html aConsideration}
         </p>
       </li>
     {/each}
  </ul>
</section>

<style>
  .considerations-container {
    justify-self: center;
    display: grid;
    grid-template-rows: repeat(2, min-content);
    row-gap: 4px;
  }
  ul {
    list-style-position: inside;
    padding-left: 1.4rem;
  }
  li {
    list-style: '*';
  }
  li:nth-child(4),
  li:nth-child(7) {
    & p::first-letter {
      color: #000000;
    }
  }
  li:nth-child(5),
  li:nth-child(6) {
    & p::first-letter {
      color: #FF0000;
    }
  }
  li:not(:last-child) {
    margin-bottom: 3px;
  }
  p {
    padding-left: 0.5rem;
  }
</style>

