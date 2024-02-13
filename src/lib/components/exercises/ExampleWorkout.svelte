<script>
  import { ESuitSymbolUnicode } from "../../../enums/suitSymbolUnicode";
  import { EExercises } from "../../../enums/exercises";

  const anExampleWorkoutList = [
    `${ESuitSymbolUnicode.CLUBS} ${EExercises.CRUNCHES}`,
    `${ESuitSymbolUnicode.DIAMONDS} ${EExercises.BEAR_CRAWLS}`,
    `${ESuitSymbolUnicode.HEARTS} ${EExercises.PUSH_UPS}`,
    `${ESuitSymbolUnicode.SPADES} ${EExercises.ATG_SPLIT_SQUATS}`,
  ];
</script>

<section
  class="example-workout-section"
  data-testid="example-workout-section"
  id="example-workout-section"
>
  <h4>Example:</h4>
  <ul
    class="example-workout-list"
    data-testid="example-workout-list"
    id="example-workout-list"
  >
     {#each anExampleWorkoutList as anExample (anExample)}
       <li 
         class="example-workout-listitem"
         data-testid="example-workout-listitem"
         id="example-workout-listitem"
       >
         <p>
           {@html anExample}
         </p>
       </li>
     {/each}
  </ul>
</section>


<style>
  .example-workout-section {
    justify-self: center;
    width: 100%;
  }
  ul {
    list-style-position: inside;
    padding-left: 0.5rem;
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
  li {
    list-style: none;
  }
</style>

