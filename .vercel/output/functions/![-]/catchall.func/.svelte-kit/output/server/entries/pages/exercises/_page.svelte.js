import { c as create_ssr_component, e as escape, j as each, i as subscribe, l as createEventDispatcher, h as add_attribute, a as add_styles, v as validate_component } from "../../../chunks/ssr.js";
import { s as suitExercises, w as workoutStopwatch, b as ESuitColors } from "../../../chunks/store.js";
import { E as ESuitSymbolUnicode } from "../../../chunks/suitSymbolUnicode.js";
import { E as EExerciseNames, c as convertTypeValueToEnumValue } from "../../../chunks/convertTypeToEnumValue.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
const considerations = {
  header: "CONSIDERATIONS:",
  list: [
    `${ESuitSymbolUnicode.CLUBS} - 'C' for Core (Ab exercises) / 'C' for Cardio`,
    `${ESuitSymbolUnicode.DIAMONDS} - 'D' for Dynamic / 4 Limbs Move`,
    `${ESuitSymbolUnicode.HEARTS} - 'H' for HIIT / An exercise you love`,
    `${ESuitSymbolUnicode.SPADES} - 'S' for Squats (Leg exercises) / 'S' for Side...`,
    `Make it yours and have fun!`
  ]
};
const exampleWorkout = {
  header: "EXAMPLE WORKOUT:",
  list: [
    `${ESuitSymbolUnicode.CLUBS} ${EExerciseNames.CRUNCHES}`,
    `${ESuitSymbolUnicode.DIAMONDS} ${EExerciseNames.JUMPING_JACKS}`,
    `${ESuitSymbolUnicode.HEARTS} ${EExerciseNames.PUSH_UPS}`,
    `${ESuitSymbolUnicode.SPADES} ${EExerciseNames.ATG_SPLIT_SQUATS}`
  ]
};
const css$6 = {
  code: ".example-workout-section.svelte-fo9tii{justify-self:center;width:100%;display:grid;grid-template-rows:repeat(2, min-content);row-gap:4px}ul.svelte-fo9tii{list-style-position:inside;padding-left:0.5rem}li.svelte-fo9tii:nth-child(1),li.svelte-fo9tii:nth-child(4){& p::first-letter {\n			color: #000000;\n		}}li.svelte-fo9tii:nth-child(2),li.svelte-fo9tii:nth-child(3){& p::first-letter {\n			color: #ff0000;\n		}}li.svelte-fo9tii{list-style:none}li.svelte-fo9tii:not(:last-child){margin-bottom:2px}",
  map: null
};
const ExampleWorkout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<section class="example-workout-section svelte-fo9tii" id="example-workout-section"><h3 class="oswald-header">${escape(exampleWorkout.header)}</h3> <ul id="example-workout-list" class="svelte-fo9tii">${each(exampleWorkout.list, (anExampleExercise) => {
    return `<li class="example-workout-listitem source-sans-3-text svelte-fo9tii" id="example-workout-listitem"><p><!-- HTML_TAG_START -->${anExampleExercise}<!-- HTML_TAG_END --></p> </li>`;
  })}</ul> </section>`;
});
const css$5 = {
  code: "button.svelte-rncemh{border-radius:8px;font-size:1.5rem;color:#000080;width:100%;height:60px}",
  map: null
};
const ExerciseSelectionCompleteButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $suitExercises, $$unsubscribe_suitExercises;
  let $$unsubscribe_workoutStopwatch;
  $$unsubscribe_suitExercises = subscribe(suitExercises, (value) => $suitExercises = value);
  $$unsubscribe_workoutStopwatch = subscribe(workoutStopwatch, (value) => value);
  const repsHaveBeenCompleted = (exercise) => exercise.completedReps > 0;
  let disabled = $suitExercises.some(repsHaveBeenCompleted);
  $$result.css.add(css$5);
  $$unsubscribe_suitExercises();
  $$unsubscribe_workoutStopwatch();
  return `<button class="oswald-header svelte-rncemh" ${disabled ? "disabled" : ""}>${disabled ? `YOU GOT THIS!` : `LET&#39;S GO!`} </button>`;
});
const css$4 = {
  code: "button.svelte-rncemh{border-radius:8px;font-size:1.5rem;color:#000080;width:100%;height:60px}",
  map: null
};
const ResetExerciseSelectionsButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<button class="oswald-header svelte-rncemh" data-svelte-h="svelte-1554cka">RESET SELECTIONS </button>`;
});
const css$3 = {
  code: ".exercise-selection-container.svelte-rzh3av{border:2px solid #000080;border-radius:8px;display:grid;grid-template-columns:1fr 6fr;grid-template-rows:min-content;justify-items:center;align-items:center;padding:0px 0px}.exercise-selection-label.svelte-rzh3av{font-size:x-large;justify-self:center}select.svelte-rzh3av{color:#000080;background-color:#ffffff;border:none;border-radius:8px;width:100%;font-size:1rem;height:40px}",
  map: null
};
const SuitExerciseSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  const exerciseNames = Object.values(EExerciseNames);
  const exerciseKeys = Object.keys(EExerciseNames);
  let { suitExercise } = $$props;
  let suitName = suitExercise.suit;
  let icon = convertTypeValueToEnumValue(suitName, ESuitSymbolUnicode);
  suitExercise.exercise?.name;
  let labelColor = convertTypeValueToEnumValue(suitName, ESuitColors);
  if ($$props.suitExercise === void 0 && $$bindings.suitExercise && suitExercise !== void 0)
    $$bindings.suitExercise(suitExercise);
  $$result.css.add(css$3);
  return `<div class="exercise-selection-container svelte-rzh3av"><label class="exercise-selection-label svelte-rzh3av"${add_attribute("id", `${suitName}-exercise-selection-label`, 0)}${add_attribute("for", `${suitName}-exercise-select`, 0)}${add_styles({ "color": labelColor })}><!-- HTML_TAG_START -->${icon}<!-- HTML_TAG_END --></label> <select name="suit-exercise-selection"${add_attribute("id", `${suitName}-exercise-select`, 0)} class="source-sans-3-text svelte-rzh3av"><option${add_attribute("value", void 0, 0)}>${escape(`${suitName} Exercise`)} </option>${each(exerciseNames, (exerciseName, i) => {
    return `<option${add_attribute("value", exerciseKeys[i], 0)}>${escape(exerciseName)}</option>`;
  })}</select> </div>`;
});
const css$2 = {
  code: ".suit-exercise-widget.svelte-crphzp{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(2, min-content);row-gap:1.5rem}.suit-exercise-container.svelte-crphzp{display:grid;row-gap:1rem}.selection-header.svelte-crphzp{color:#000080}",
  map: null
};
const SuitExerciseWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let someSuitExercisesHaveNotBeenChosen;
  let $suitExercises, $$unsubscribe_suitExercises;
  $$unsubscribe_suitExercises = subscribe(suitExercises, (value) => $suitExercises = value);
  $$result.css.add(css$2);
  someSuitExercisesHaveNotBeenChosen = $suitExercises.some((entry) => {
    return entry.exercise?.name === void 0;
  });
  $$unsubscribe_suitExercises();
  return `<div id="suit-exercise-widget" class="suit-exercise-widget svelte-crphzp"><section class="suit-exercise-container svelte-crphzp"><h3 class="selection-header oswald-header svelte-crphzp" data-svelte-h="svelte-fgxx6e">SELECT YOUR EXERCISES BELOW</h3> ${each($suitExercises, (suitExercise) => {
    return `${validate_component(SuitExerciseSelect, "SuitExerciseSelect").$$render($$result, { suitExercise }, {}, {})}`;
  })}</section> ${someSuitExercisesHaveNotBeenChosen ? `${validate_component(ExampleWorkout, "ExampleWorkout").$$render($$result, {}, {}, {})}` : `${validate_component(ExerciseSelectionCompleteButton, "ExerciseSelectionCompleteButton").$$render($$result, {}, {}, {})} ${validate_component(ResetExerciseSelectionsButton, "ResetExerciseSelectionsButton").$$render($$result, {}, {}, {})}`} </div>`;
});
const css$1 = {
  code: ".considerations-container.svelte-9g5ztr{justify-self:center;display:grid;grid-template-rows:repeat(2, min-content);row-gap:4px}ul.svelte-9g5ztr{list-style-position:inside;padding-left:1.4rem}li.svelte-9g5ztr{list-style:'*'}li.svelte-9g5ztr:nth-child(1),li.svelte-9g5ztr:nth-child(4){& p::first-letter {\n			color: #000000;\n		}}li.svelte-9g5ztr:nth-child(2),li.svelte-9g5ztr:nth-child(3){& p::first-letter {\n			color: #ff0000;\n		}}li.svelte-9g5ztr:not(:last-child){margin-bottom:2px}p.svelte-9g5ztr{padding-left:0.5rem}",
  map: null
};
const Considerations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="considerations-container svelte-9g5ztr" id="considerations-container"><h3 class="oswald-header">${escape(considerations.header)}</h3> <ul class="exercise-hint-list source-sans-3-text svelte-9g5ztr" id="exercise-consideration-list">${each(considerations.list, (aConsideration) => {
    return `<li class="exercise-consideration-listitem svelte-9g5ztr"><p class="svelte-9g5ztr"><!-- HTML_TAG_START -->${aConsideration}<!-- HTML_TAG_END --></p> </li>`;
  })}</ul> </section>`;
});
const css = {
  code: ".page-container.svelte-1ocy7kq{max-width:800px;padding-left:0.5rem;padding-right:0.5rem;justify-self:center;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(2, min-content);row-gap:1rem;overflow-x:hidden;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none}.page-container.svelte-1ocy7kq::-webkit-scrollbar{display:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="page-container svelte-1ocy7kq">${validate_component(Considerations, "Considerations").$$render($$result, {}, {}, {})} ${validate_component(SuitExerciseWidget, "SuitExerciseWidget").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
