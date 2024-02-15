<script lang="ts">
  export let name: string;
  export let hasBeenPlucked: boolean;
</script>

<div
  id={`mini-card-tick-${name}`}
  class={`mini-card-tick ${hasBeenPlucked ? 'plucked' : ''}`}
>
</div>

<style>
  .mini-card-tick {
    width: 3px;
    height: 30px;
    border: 1px solid #000080;
    background: #39FF14;
  }
  .plucked {
    visibility: hidden;
  }
</style>

