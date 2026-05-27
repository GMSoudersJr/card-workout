import { c as create_ssr_component, e as escape, j as each, h as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { r as recieptEmoji, d as deckEmoji, c as cardIndexEmoji, e as exerciseEmoji, t as thinkingEmoji } from "../../chunks/emojis.js";
const heading = "SUIT YOURSELF";
const subHeading = "A CALISTHENICS CHALLENGE";
const links = {
  activities: "activities",
  decks: "decks",
  exercises: "exercises",
  index: "index",
  faq: "faq"
};
const css = {
  code: ".page-container.svelte-3jr65w.svelte-3jr65w{height:100%;width:100%;display:grid;grid-template-columns:1fr;grid-template-rows:1.618fr 1fr;justify-content:center;align-items:center;align-content:center;background:radial-gradient(circle at bottom, #ffffff, #000080 30%, #259259 50%);padding:0.5rem;padding-bottom:1.5rem}.header.svelte-3jr65w.svelte-3jr65w{color:#ffffff;font-weight:900;text-align:center}.header.svelte-3jr65w>h1.svelte-3jr65w{font-size:3rem}.header.svelte-3jr65w>h4.svelte-3jr65w{font-size:1.5rem}.nav-container.svelte-3jr65w.svelte-3jr65w{height:100%;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(auto-fill, min-content);row-gap:0.25rem;justify-items:center;align-items:center}.nav-link.svelte-3jr65w.svelte-3jr65w{height:100%;width:calc(60px * 1.618 * 3);background:#000080;display:grid;grid-template-columns:repeat(2, min-content);column-gap:0.5rem;align-items:center;justify-content:center;text-decoration:none;color:#ffffff;padding:5px 12px;backdrop-filter:blur(6rem) saturate(180%);-webkit-backdrop-filter:blur(6rem) saturate(180%);background-color:rgba(17, 25, 40, 0.75);border:1px solid rgba(255, 255, 255, 0.125)}.nav-link.svelte-3jr65w.svelte-3jr65w:first-child{border-top-left-radius:40px}.nav-link.svelte-3jr65w.svelte-3jr65w:last-child{border-bottom-right-radius:40px}.nav-link.svelte-3jr65w.svelte-3jr65w:nth-child(n - 4){font-size:1.75rem}",
  map: null
};
const Homepage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const theHomepageLinks = [
    {
      href: `/${links.activities}`,
      text: links.activities.toUpperCase(),
      emoji: recieptEmoji
    },
    {
      href: `/${links.decks}`,
      text: links.decks.toUpperCase(),
      emoji: deckEmoji
    },
    {
      href: `/${links.index}`,
      text: links.index.toUpperCase(),
      emoji: cardIndexEmoji
    },
    {
      href: `/${links.exercises}`,
      text: links.exercises.toUpperCase(),
      emoji: exerciseEmoji
    },
    {
      href: `/${links.faq}`,
      text: links.faq.toUpperCase(),
      emoji: thinkingEmoji
    }
  ];
  $$result.css.add(css);
  return `<div class="page-container svelte-3jr65w"><div class="header svelte-3jr65w"><h1 class="oswald-header svelte-3jr65w">${escape(heading)}</h1> <h4 class="oswald-header sub-heading svelte-3jr65w">${escape(subHeading)}</h4></div> <nav class="nav-container svelte-3jr65w">${each(theHomepageLinks, (homepageLink) => {
    return `${homepageLink.text !== links.activities.toUpperCase() ? `<a class="nav-link oswald-header svelte-3jr65w"${add_attribute("href", homepageLink.href, 0)}><p>${escape(homepageLink.text)}</p> <p class="emoji-link noto-emoji-font">${escape(homepageLink.emoji)}</p> </a>` : `${``}`}`;
  })}</nav> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homepage, "Homepage").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
