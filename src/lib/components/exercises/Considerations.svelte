<script lang="ts">
  import { ESuitSymbolUnicode } from "../../../enums/suitSymbolUnicode";

  const listOfConsiderations = [
    `${ESuitSymbolUnicode.CLUBS} - 'C' for Core (Ab exercises) / 'C' for Cardio`,
    `${ESuitSymbolUnicode.DIAMONDS} - 'D' for Dynamic / 4 Limbs Move / 4 Points of Contact`,
    `${ESuitSymbolUnicode.HEARTS} - 'H' for HIIT / An exercise you love / 'Heart' pumper`,
    `${ESuitSymbolUnicode.SPADES} - 'S' for Squats (Leg exercises) / 'S' for Side... Single...`,
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
  li:nth-child(1),
  li:nth-child(4) {
    & p::first-letter {
      color: #000000;
    }
  }
  li:nth-child(2),
  li:nth-child(3) {
    & p::first-letter {
      color: #FF0000;
    }
  }
  li:not(:last-child) {
    margin-bottom: 2px;
  }
  p {
    padding-left: 0.5rem;
  }
</style>

