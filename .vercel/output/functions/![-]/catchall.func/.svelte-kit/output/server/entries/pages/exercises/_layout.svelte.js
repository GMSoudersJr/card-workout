import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as NavAndHeading } from "../../../chunks/NavAndHeading.js";
import { a as cardEmoji } from "../../../chunks/emojis.js";
const css = {
  code: "main.svelte-f2yh7l{height:100%;max-width:50rem;margin:auto;display:grid;grid-template-columns:1fr;grid-template-rows:min-content 1fr;justify-content:center;padding:0.5rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-f2yh7l">${validate_component(NavAndHeading, "NavAndHeading").$$render(
    $$result,
    {
      heading: "exercises",
      navEmoji: cardEmoji,
      altHref: "/cards"
    },
    {},
    {}
  )} ${slots.default ? slots.default({}) : ``} </main>`;
});
export {
  Layout as default
};
