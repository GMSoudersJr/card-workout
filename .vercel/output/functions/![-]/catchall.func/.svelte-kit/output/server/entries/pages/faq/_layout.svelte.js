import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as NavAndHeading } from "../../../chunks/NavAndHeading.js";
import { e as exerciseEmoji } from "../../../chunks/emojis.js";
const css = {
  code: "main.svelte-hwvrhx{height:100%;max-width:50rem;margin:auto;display:grid;grid-template-columns:1fr;grid-template-rows:min-content 1fr;padding:0.5rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-hwvrhx">${validate_component(NavAndHeading, "NavAndHeading").$$render(
    $$result,
    {
      heading: "faq",
      navEmoji: exerciseEmoji,
      altHref: "/exercises"
    },
    {},
    {}
  )} ${slots.default ? slots.default({}) : ``} </main>`;
});
export {
  Layout as default
};
