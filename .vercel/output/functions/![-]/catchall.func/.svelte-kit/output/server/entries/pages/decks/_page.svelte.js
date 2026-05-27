import { c as create_ssr_component, i as subscribe, e as escape, j as each, h as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { c as convertTypeValueToEnumValue, E as EExerciseNames } from "../../../chunks/convertTypeToEnumValue.js";
import { s as suitExercises } from "../../../chunks/store.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
const css$1 = {
  code: ".full-deck.svelte-14kbwqx{display:grid;grid-template-columns:min-content 1fr;grid-template-rows:1fr;column-gap:1rem;align-items:center}.deck.svelte-14kbwqx{width:100px;height:161.8px;border-radius:8px;background-color:#000080;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;justify-content:center;align-items:center}.deck-workout-info.svelte-14kbwqx{display:grid;grid-template-columns:1fr;grid-template-rows:min-content 1fr min-content}.deck-name.svelte-14kbwqx,.exercise-name.svelte-14kbwqx{color:#ffffff}.exercise-name.svelte-14kbwqx{list-style:inside;color:#000080}.deck-header.svelte-14kbwqx{color:#259259}.exercise-name-demo-link.svelte-14kbwqx{color:#000080}.exercise-name-no-demo-link.svelte-14kbwqx{color:#000080;text-decoration:none;pointer-events:none}",
  map: null
};
const DeckWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_suitExercises;
  $$unsubscribe_suitExercises = subscribe(suitExercises, (value) => value);
  let { deckName = "Full Body I" } = $$props;
  let { description } = $$props;
  let { workoutSuitExercises } = $$props;
  const exerciseData = workoutSuitExercises.map((exercise) => {
    if (exercise.exercise?.embeds !== void 0 && exercise.exercise.name !== void 0) {
      return {
        name: convertTypeValueToEnumValue(exercise.exercise.name, EExerciseNames),
        href: `index/${exercise.exercise.name.toLowerCase()}`,
        hasEmbed: exercise.exercise.embeds[0] !== ""
      };
    }
  });
  if ($$props.deckName === void 0 && $$bindings.deckName && deckName !== void 0)
    $$bindings.deckName(deckName);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.workoutSuitExercises === void 0 && $$bindings.workoutSuitExercises && workoutSuitExercises !== void 0)
    $$bindings.workoutSuitExercises(workoutSuitExercises);
  $$result.css.add(css$1);
  $$unsubscribe_suitExercises();
  return `<section class="full-deck svelte-14kbwqx"><button class="deck svelte-14kbwqx"><h4 class="deck-name oswald-header svelte-14kbwqx">${escape(deckName)}</h4></button> <div class="deck-workout-info svelte-14kbwqx"><h3 class="oswald-header deck-header svelte-14kbwqx">${escape(deckName)}</h3> ${exerciseData ? `<ul>${each(exerciseData, (exercise, i) => {
    return `<li class="exercise-name list-item oswald-header svelte-14kbwqx">${exercise?.hasEmbed ? `<a${add_attribute("href", exercise?.href, 0)} class="exercise-name-demo-link svelte-14kbwqx">${escape(exercise?.name.toUpperCase())} </a>` : `<a${add_attribute("href", exercise?.href, 0)} class="exercise-name-no-demo-link svelte-14kbwqx">${escape(exercise?.name.toUpperCase())} </a>`} </li>`;
  })}</ul>` : ``} <p class="description source-sans-3-text">${escape(description)}</p></div> </section>`;
});
const css = {
  code: ".page-container.svelte-1wqi1sz.svelte-1wqi1sz{height:100%;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(2, min-content);row-gap:1rem;padding-left:0.5rem;padding-right:0.5rem;overflow-x:hidden;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none}.subheading.svelte-1wqi1sz.svelte-1wqi1sz{text-align:center;color:#259259}.decks-list.svelte-1wqi1sz.svelte-1wqi1sz{display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));grid-template-rows:repeat(auto-fill, min-content);gap:1rem}.decks-list.svelte-1wqi1sz>li.svelte-1wqi1sz{list-style:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { workouts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="page-container svelte-1wqi1sz"><h2 class="subheading oswald-header svelte-1wqi1sz" data-svelte-h="svelte-vobq4y">QUICK START WORKOUTS</h2> <ul class="decks-list svelte-1wqi1sz" id="decks-list">${each(workouts, (workout) => {
    return `<li class="decks-listitem svelte-1wqi1sz">${validate_component(DeckWidget, "DeckWidget").$$render(
      $$result,
      {
        deckName: workout.name,
        description: workout.description,
        workoutSuitExercises: workout.suitExercises
      },
      {},
      {}
    )} </li>`;
  })}</ul> </div>`;
});
export {
  Page as default
};
