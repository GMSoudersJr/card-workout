import { c as create_ssr_component, l as createEventDispatcher, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/store.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
const css$1 = {
  code: ".delete-dialog[open].svelte-1kwcg5f{width:85%;position:absolute;margin-left:7.5%;margin-top:25%;display:grid;grid-template-columns:repeat(4, 1fr);grid-template-rows:repeat(3, 1fr);grid-template-areas:'title title . .'\n			'message message message message'\n			'. . cancel confirm';row-gap:0.5rem;padding:0.5rem;justify-content:center;justify-items:center;align-items:center;column-gap:0.5rem;border-color:#ff0000;border-width:2px;border-radius:8px}.message.svelte-1kwcg5f{grid-area:message;color:#000080}.title.svelte-1kwcg5f{grid-area:title;text-align:center;color:#000080}.cancel.svelte-1kwcg5f{grid-area:cancel}.confirm.svelte-1kwcg5f{grid-area:confirm}.action-button.svelte-1kwcg5f{padding:5px 8px;border-radius:8px;color:#000080}.svelte-1kwcg5f::backdrop{backdrop-filter:blur(1px)}",
  map: null
};
const DeleteDialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { dialogMessage } = $$props;
  if ($$props.dialogMessage === void 0 && $$bindings.dialogMessage && dialogMessage !== void 0)
    $$bindings.dialogMessage(dialogMessage);
  $$result.css.add(css$1);
  return `<dialog id="delete-dialog" class="delete-dialog svelte-1kwcg5f"><h1 class="title svelte-1kwcg5f" data-svelte-h="svelte-i30jo7">Deletion</h1> <p class="message svelte-1kwcg5f">${escape(dialogMessage)}</p> <button class="action-button cancel svelte-1kwcg5f" id="delete-cancel" value="cancel" data-svelte-h="svelte-1pzepbz">Cancel</button> <button class="action-button confirm svelte-1kwcg5f" id="delete-confirm" value="deleteIt" data-svelte-h="svelte-17vumhj">Confirm</button> </dialog>`;
});
const css = {
  code: ".activities-page-container.svelte-l5273g{height:100%;overflow-x:hidden;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none}.workout-cards-grid.svelte-l5273g{display:grid;grid-template-columns:1fr;row-gap:1rem}.activities-page-container.svelte-l5273g::-webkit-scrollbar{display:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dialogMessage;
  $$result.css.add(css);
  return `${validate_component(DeleteDialog, "DeleteDialog").$$render($$result, { dialogMessage }, {}, {})} <div class="activities-page-container svelte-l5273g"><section class="workout-cards-grid svelte-l5273g">${``}</section> </div>`;
});
export {
  Page as default
};
