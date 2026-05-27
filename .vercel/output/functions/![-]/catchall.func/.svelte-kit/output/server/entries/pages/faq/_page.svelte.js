import { c as create_ssr_component, j as each, h as add_attribute, e as escape, n as null_to_empty, v as validate_component } from "../../../chunks/ssr.js";
import { t as thisYear } from "../../../chunks/utils2.js";
import { u as upEmoji, b as rightEmoji, f as downEmoji, l as leftEmoji } from "../../../chunks/emojis.js";
const motivation = {
  heading: "motivation",
  list: [
    `During the pandemic, I saw a video of a boxer using a deck of cards to
		determine how many push-ups to do. Since I love push-ups, I gave it a try.`,
    `After shuffling through a few decks, I found that sticking with one
		exercise was <em>overkill</em>, so I decided to mix it up. Each suit would represent
		a different exercise. That simple change led to full body workouts.`,
    `A few enthusiastic friends actually tried it after I told them. However,...`
  ]
};
const problems = {
  heading: `problems`,
  list: [`Carrying around a deck of cards`, `Hmm... I was doing which exercise for clubs?`]
};
const repCount = {
  heading: "cards = reps",
  list: [
    `<strong>2</strong>, <strong>3</strong>, <strong>4</strong>,
		 <strong>5</strong>, <strong>6</strong>, <strong>7</strong>,
		 <strong>8</strong>, <strong>9</strong>, and <strong>10</strong> =
		 <strong>that number</strong> of reps`,
    `<strong>J</strong>, <strong>Q</strong>, and <strong>K</strong> = <strong>10</strong> reps`,
    `<strong>A</strong> = <strong>16</strong> reps`,
    `Each <strong>suit</strong> = <strong>100</strong> reps!`,
    `The whole <strong>deck</strong> = <strong>400</strong> reps!!!!`,
    `Reps are counted after a card is discarded.`
  ]
};
const exercises = {
  heading: "exercises",
  list: [
    `<em>Calisthenic Movements</em>, and <em>Yoga Poses</em>`,
    `No need for weights, simply move <em>yourself!</em>`
  ]
};
const howToUse = {
  heading: "how to use",
  list: [
    `On "EXERCISES" page, select an exercise per suit.`,
    `Tap "Let's Go"!`,
    `Tap "START" to draw your first card!`,
    `Complete the reps, discard with a swipe <span class="noto-emoji-font">${upEmoji}</span> or <span class="noto-emoji-font">${rightEmoji}</span>`,
    `Put back in the deck, swipe <span class="noto-emoji-font">${downEmoji}</span> or <span class="noto-emoji-font">${leftEmoji}</span>`,
    `Deck stats available at the bottom of the page.`
  ]
};
const suggestions = {
  heading: "suggestions",
  list: [
    `Choose exercises to get a full body workout!`,
    `Warm up and stretch before hand!`,
    `Use your imagination!`,
    `Have fun!`
  ]
};
const copyright = `© ${thisYear()} by Gerald M. Souders Jr.`;
const socials = [
  {
    id: "github",
    href: "https://github.com/GMSoudersJr/card-workout",
    class: "icon icon-square",
    iconUrl: "https://lh3.googleusercontent.com/pw/AIL4fc-MFtoDa7TLMjPh17L35GbinX_j4vmO2fC14WFIWfuixNTvnpy_KtLIzgKepFtpbaFuncCgFVQgXue6rCHpmFrY05G8Hmr11YejBtehiwI5MkSRFLu_qn65XkSWg7cceqYUjuYZqzkr5o-qKQWL0djytg=w240-h240-s-no?authuser=0",
    iconUrlLight: "https://lh3.googleusercontent.com/pw/AIL4fc8YKL8pEKc5WSoPX9onJhSk5j-4-68MBln6PsoDcrr2lGBSxaiidZLp0T-ufKICz9hQP9ZE3bssftK3J30AWFZtBEaEhLMC0NafOMeeOdpgD8A_qrw9NicNsqLZieXz4K_XYs7MN8p29LLB-_0Z92s4eg=w230-h225-s-no?authuser=0",
    alt: "GitHub Icon",
    title: "Project's Repo on GitHub"
  },
  {
    id: "linkedIn",
    href: "https://www.linkedin.com/in/gerald-souders/",
    class: "icon icon-square",
    iconUrl: "https://lh3.googleusercontent.com/pw/AIL4fc8z_8RFwmLwOc9vVhbseCQ4Gvcq_oE-1zaNYA8yFcNKM_OIrilaFzW8eOmbnvMIg-XUNeFCt9lRoXF8WokZrFkevx6zfoMWtg19yWY_che6L98aKSFUuZN-H1ss0g6MRh2sDn7BRO96_eNsxxfPIMHyJw=w26-h26-s-no?authuser=0",
    iconUrlLight: "https://lh3.googleusercontent.com/pw/AIL4fc_95nqzOOhGEAONBxImlStzbTRFuetG9nYnUiGmvaSTKOawTLHLwn1-OpiHTZvRzcldGNM-erozxUFy-gonJSiGdnFTWJ_J9F7EdUQXO7hGMg6Ya-qFV1VYrcGncIne3XNujkxQp5iRJMuZzejgVBX1-g=w96-h96-s-no?authuser=0",
    alt: "LinkedIn Icon",
    title: "Gerald's LinkedIn Profile"
  }
];
const css$4 = {
  code: "section.svelte-1w2uuxh{display:grid;grid-template-columns:repeat(2, 1fr);justify-content:center;align-items:center;column-gap:3rem}a.svelte-1w2uuxh{text-decoration:none}.icon.svelte-1w2uuxh{height:25px;width:25px}",
  map: null
};
const Socials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="contact svelte-1w2uuxh" id="contact">${each(socials, (social) => {
    return `<a${add_attribute("href", social.href, 0)} target="_blank" referrerpolicy="no-referrer"${add_attribute("id", social.id, 0)} class="${escape(null_to_empty(social.class), true) + " svelte-1w2uuxh"}"${add_attribute("title", social.title, 0)} data-svelte-h="svelte-972dgp"><img${add_attribute("id", `${social.id}-icon`, 0)} class="icon svelte-1w2uuxh"${add_attribute("src", social.iconUrl, 0)}${add_attribute("alt", social.alt, 0)}> </a>`;
  })} </section>`;
});
const css$3 = {
  code: "footer.svelte-11cflz5.svelte-11cflz5{width:100%;text-align:center;padding:3px;color:var(--colorCharcoal);justify-self:end;display:flex;flex-direction:column;align-items:center}footer.svelte-11cflz5 p.svelte-11cflz5{font-size:16px;line-height:24px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<footer class="svelte-11cflz5">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})} <p class="source-sans-3-text svelte-11cflz5">${escape(copyright)}</p> </footer>`;
});
const css$2 = {
  code: ".about-section-header.svelte-131xce8{color:#259259}.about-list.svelte-131xce8{list-style-position:inside}",
  map: null
};
const ListWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading } = $$props;
  let { unorderedList } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.unorderedList === void 0 && $$bindings.unorderedList && unorderedList !== void 0)
    $$bindings.unorderedList(unorderedList);
  $$result.css.add(css$2);
  return `<section class="about-section"><h3 class="about-section-header oswald-header svelte-131xce8">${escape(heading.toUpperCase())}</h3> <ul class="about-list svelte-131xce8">${each(unorderedList, (listitem, i) => {
    return `<li class="about-listitem source-sans-3-text"><!-- HTML_TAG_START -->${listitem}<!-- HTML_TAG_END --> </li>`;
  })}</ul> </section>`;
});
const css$1 = {
  code: ".about-section-header.svelte-px4mgd{color:#259259}p.svelte-px4mgd:not(:last-child){padding-bottom:0.25rem}",
  map: null
};
const ParagraphWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading } = $$props;
  let { listOfParagraphs } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.listOfParagraphs === void 0 && $$bindings.listOfParagraphs && listOfParagraphs !== void 0)
    $$bindings.listOfParagraphs(listOfParagraphs);
  $$result.css.add(css$1);
  return `<section class="about-section"><h3 class="about-section-header oswald-header svelte-px4mgd">${escape(heading.toUpperCase())}</h3> ${each(listOfParagraphs, (paragraph, i) => {
    return `<p class="about-paragraph source-sans-3-text svelte-px4mgd"><!-- HTML_TAG_START -->${paragraph}<!-- HTML_TAG_END --> </p>`;
  })} </section>`;
});
const css = {
  code: ".about-page.svelte-hkhuo3{padding-left:0.5rem;padding-right:0.5rem;max-width:600px;justify-self:center;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(7, min-content);row-gap:1rem;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none}.about-page.svelte-hkhuo3::-webkit-scrollbar{display:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="about-page svelte-hkhuo3">${validate_component(ListWidget, "ListWidget").$$render(
    $$result,
    {
      heading: howToUse.heading,
      unorderedList: howToUse.list
    },
    {},
    {}
  )} ${validate_component(ListWidget, "ListWidget").$$render(
    $$result,
    {
      heading: repCount.heading,
      unorderedList: repCount.list
    },
    {},
    {}
  )} ${validate_component(ListWidget, "ListWidget").$$render(
    $$result,
    {
      heading: exercises.heading,
      unorderedList: exercises.list
    },
    {},
    {}
  )} ${validate_component(ParagraphWidget, "ParagraphWidget").$$render(
    $$result,
    {
      heading: motivation.heading,
      listOfParagraphs: motivation.list
    },
    {},
    {}
  )} ${validate_component(ListWidget, "ListWidget").$$render(
    $$result,
    {
      heading: problems.heading,
      unorderedList: problems.list
    },
    {},
    {}
  )} ${validate_component(ListWidget, "ListWidget").$$render(
    $$result,
    {
      heading: suggestions.heading,
      unorderedList: suggestions.list
    },
    {},
    {}
  )} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
