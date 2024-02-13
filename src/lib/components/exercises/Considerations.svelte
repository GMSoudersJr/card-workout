<script lang="ts">
  import { ESuitSymbolUnicode } from "../../../enums/suitSymbolUnicode";

  const listOfConsiderations = [
    `100 reps per suit = 400 total reps`,
    `Full body Vs. Isolated group`,
    `KISS! Keep It Simple, Seriously`,
    `${ESuitSymbolUnicode.CLUBS} - 'C' for Core (Ab exercise)`,
    `${ESuitSymbolUnicode.DIAMONDS} - Four corners, 4 body parts move`,
    `${ESuitSymbolUnicode.HEARTS} - An exercise you love`,
    `${ESuitSymbolUnicode.SPADES} - 'S' for Squats (Leg exercise)`,
    `Available space and positioning`,
    `Make it yours and have fun!`,
  ];

</script>

<section
  class="considerations-container"
  data-testid="considerations-container"
  id="considerations-container"
>
  <h4>Considerations:</h4>
  <ul
    class="exercise-hint-list"
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
    width: 100%;
  }
  ul {
    list-style-position: inside;
    padding-left: 1.4rem;
  }
  li {
    list-style: '*';
  }
  p {
    padding-left: 0.5rem;
  }
</style>

