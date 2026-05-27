import { c as create_ssr_component, i as subscribe, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { t as thinkingEmoji } from "../../chunks/emojis.js";
const css = {
  code: ".page-container.svelte-1yi468w{display:grid;height:100%;grid-template-columns:100%;grid-template-rows:repeat(auto-fill, min-content);row-gap:2rem;justify-items:center;align-content:center;background-color:#000080}h1.svelte-1yi468w,a.svelte-1yi468w{color:white}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log("index", $page);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="page-container svelte-1yi468w"><h1 class="noto-emoji-font svelte-1yi468w">${escape(thinkingEmoji)}</h1> <h1 class="oswald-header svelte-1yi468w">${escape($page.status)}: ${escape($page.error?.message.toUpperCase())}</h1> <h2 data-svelte-h="svelte-5dn52n"><a href="/" class="oswald-header svelte-1yi468w">Go Home</a></h2> </div>`;
});
export {
  Error as default
};
