<script lang="ts">
  export let name: string;
  export let hasBeenPlucked: boolean;
</script>

<div
  id={`mini-card-tick-${name}`}
  class={`mini-card-tick ${hasBeenPlucked ? 'plucked' : 'in-deck'}`}
>
</div>

<style>
  .mini-card-tick {
    height: 100%;
    border: 1px solid #000080;
    background: #39FF14;
    border-radius: 2px;
  }
  .plucked {
    visibility: hidden;
  }
  .in-deck {
    visibility: visible;
  }
</style>

