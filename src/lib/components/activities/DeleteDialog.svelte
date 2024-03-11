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

  export let dialogMessage: string | undefined;

</script>

<dialog
  id="delete-dialog"
  class="delete-dialog"
  use:clickOutside
>
  <h1 class="title">Deletion</h1>
  <p class="message">{dialogMessage}</p>
    <button
      class="action-button cancel"
      id="delete-cancel"
      value="cancel"
      on:click={handleClick}
    >
      Cancel
    </button>
    <button
      class="action-button confirm"
      id="delete-confirm"
      value="deleteIt"
      on:click={handleClick}
    >
      Confirm
    </button>

</dialog>

<style>
  .delete-dialog[open] {
    width: 85%;
    position: absolute;
    margin-left: 7.5%;
    margin-top: 25%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
    "title title . ."
    "message message message message"
    ". . cancel confirm";
    row-gap: 0.5rem;
    padding: 0.5rem;
    justify-content: center;
    justify-items: center;
    align-items: center;
    column-gap: 0.5rem;
    border-color: #FF0000;
    border-width: 2px;
    border-radius: 8px;
  }
  .close-dialog {
    grid-area: close;
    color: #000000;
    place-self: end;
  }
  .message {
    grid-area: message;
    color: #000080;
  }
  .title {
    grid-area: title;
    text-align: center;
    color: #000080;
  }
  .cancel {
    grid-area: cancel;
  }
  .confirm {
    grid-area: confirm;
  }
  .action-button {
    padding: 5px 8px;
    border-radius: 8px;
    color: #000080;
  }
  ::backdrop {
    backdrop-filter: blur(1px);
  }
</style>

