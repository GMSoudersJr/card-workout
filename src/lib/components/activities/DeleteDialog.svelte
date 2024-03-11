<script lang="ts">
  import { clickOutside } from "$lib/utils";
	import { crossMarkEmoji } from "$lib/emojis";
	import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleClick(event: Event) {
    const target = event.target as HTMLButtonElement;
    const deleteDialog = document.getElementById('delete-dialog') as HTMLDialogElement;
    deleteDialog.close(target.value);
    dispatch('dialogClosed', {
      value: target.value
    });
  };

</script>

<dialog
  id="delete-dialog"
  class="delete-dialog"
  use:clickOutside
>
  <button
    class="close-dialog noto-emoji-text"
    value="close"
    on:click={handleClick}
  >
    {crossMarkEmoji}
  </button>
  <h1 class="title">Really?!</h1>
  <div class="buttons-container">
    <button
      class="action-button"
      id="delete-cancel"
      value="cancel"
      on:click={handleClick}
    >
      Cancel
    </button>
    <button
      class="action-button"
      id="delete-confirm"
      value="deleteIt"
      on:click={handleClick}
    >
      Delete
    </button>

  </div>
</dialog>

<style>
  .delete-dialog[open] {
    width: 61.8vw;
    position: absolute;
    margin-left: 19.1%;
    margin-top: 25%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
    justify-items: center;
    row-gap: 0.5rem;
  }
  .close-dialog {
    justify-self: end;
    color: #000000;
    padding: 3px;
  }
  .title {
    text-align: center;
  }
  .action-button {
    padding: 3px 5px;
  }
  .buttons-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  ::backdrop {
    backdrop-filter: blur(1px);
  }
</style>

