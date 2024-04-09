<script lang="ts">
  export let name: string;
  export let hasBeenPlucked: boolean;
  export let hasBeenDiscarded: boolean;
  $: cardActivity = () => {
    if (hasBeenPlucked === false && hasBeenDiscarded === false) return 'in-deck';
    if (hasBeenPlucked === true && hasBeenDiscarded === false) return 'plucked';
    if (hasBeenPlucked === true && hasBeenDiscarded === true) return 'discarded';
  }
</script>

<div
  id={`mini-card-tick-${name}`}
  class={`mini-card-tick ${cardActivity()}`}
>
</div>

<style>
  .mini-card-tick {
    height: 100%;
    border: 1px solid #000080;
    background: #000080;
    border-radius: 2px;
  }
  .plucked {
    border: 1px solid #000080;
    background: #39FF14;
    border-radius: 2px;
    transition: ease-out 400ms;
    transform: translateY(-38.2%);
  }
  .in-deck {
    visibility: visible;
    transition: ease-out 400ms;
  }
  .discarded {
    visibility: hidden;
    border: none;
    background: none ;
    transition: ease-out 400ms;
    transform: translateY(-100%);
  }
</style>

