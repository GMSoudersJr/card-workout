import { c as create_ssr_component, h as add_attribute, e as escape, n as null_to_empty, i as subscribe, j as each, v as validate_component, a as add_styles, m as missing_component } from "../../../chunks/ssr.js";
import { r as remainingCardsString, a as radioButtonLabelNames, P as PlayingCardWidget } from "../../../chunks/PlayingCardWidget.js";
import { t as theRemainingDeck, a as theDeckOfCards, E as ECardRankSymbol, b as ESuitColors, c as ESuit, s as suitExercises, w as workoutStopwatch, d as discardedCards } from "../../../chunks/store.js";
import { c as convertTypeValueToEnumValue, E as EExerciseNames } from "../../../chunks/convertTypeToEnumValue.js";
import { E as ESuitSymbolUnicode } from "../../../chunks/suitSymbolUnicode.js";
import { f as formatStopWatchTime, e as exercisesHaveNotBeenChosen } from "../../../chunks/utils2.js";
import { N as NavAndHeading } from "../../../chunks/NavAndHeading.js";
import { e as exerciseEmoji } from "../../../chunks/emojis.js";
const css$b = {
  code: ".mini-card-tick.svelte-1iv5dtj{height:100%;border:1px solid #000080;background:#000080;border-radius:2px}.plucked.svelte-1iv5dtj{border:1px solid #000080;background:#39ff14;border-radius:2px;transition:ease-out 400ms;transform:translateY(-38.2%)}.in-deck.svelte-1iv5dtj{visibility:visible;transition:ease-out 400ms}.discarded.svelte-1iv5dtj{visibility:hidden;border:none;background:none;transition:ease-out 400ms;transform:translateY(-100%)}",
  map: null
};
const MiniCardTicks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cardActivity;
  let { name } = $$props;
  let { hasBeenPlucked } = $$props;
  let { hasBeenDiscarded } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.hasBeenPlucked === void 0 && $$bindings.hasBeenPlucked && hasBeenPlucked !== void 0)
    $$bindings.hasBeenPlucked(hasBeenPlucked);
  if ($$props.hasBeenDiscarded === void 0 && $$bindings.hasBeenDiscarded && hasBeenDiscarded !== void 0)
    $$bindings.hasBeenDiscarded(hasBeenDiscarded);
  $$result.css.add(css$b);
  cardActivity = () => {
    if (hasBeenPlucked === false && hasBeenDiscarded === false)
      return "in-deck";
    if (hasBeenPlucked === true && hasBeenDiscarded === false)
      return "plucked";
    if (hasBeenPlucked === true && hasBeenDiscarded === true)
      return "discarded";
  };
  return `<div${add_attribute("id", `mini-card-tick-${name}`, 0)} class="${escape(null_to_empty(`mini-card-tick ${cardActivity()}`), true) + " svelte-1iv5dtj"}"></div>`;
});
const css$a = {
  code: ".deck-info-container.svelte-8bwzh6{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(2, 1fr);justify-content:center;align-items:center;padding:5px}.info-wrapper.svelte-8bwzh6{display:grid;grid-template-columns:repeat(2, auto);grid-template-rows:1fr;column-gap:0.5rem}.cards-left-text.svelte-8bwzh6{place-self:end;color:#000080;font-size:large}.cards-left-number.svelte-8bwzh6{color:#000080;font-size:large}.card-lines-container.svelte-8bwzh6{display:grid;grid-template-columns:repeat(52, 1fr);grid-template-rows:35px;justify-content:center;align-items:center;column-gap:0.2rem}",
  map: null
};
const DeckInfoWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theRemainingDeck, $$unsubscribe_theRemainingDeck;
  let $theDeckOfCards, $$unsubscribe_theDeckOfCards;
  $$unsubscribe_theRemainingDeck = subscribe(theRemainingDeck, (value) => $theRemainingDeck = value);
  $$unsubscribe_theDeckOfCards = subscribe(theDeckOfCards, (value) => $theDeckOfCards = value);
  $$result.css.add(css$a);
  $$unsubscribe_theRemainingDeck();
  $$unsubscribe_theDeckOfCards();
  return `<div class="deck-info-container svelte-8bwzh6"><div class="info-wrapper svelte-8bwzh6" id="cards-remaining"><p class="cards-left-text source-sans-3-text svelte-8bwzh6">${escape(remainingCardsString)}</p> <h3 class="cards-left-number oswald-header svelte-8bwzh6">${escape($theRemainingDeck.length)}</h3></div> <div class="card-lines-container svelte-8bwzh6" id="card-tick-container">${each($theDeckOfCards, (card) => {
    return `${validate_component(MiniCardTicks, "MiniCardTicks").$$render(
      $$result,
      {
        name: card.name,
        hasBeenPlucked: card.hasBeenPlucked,
        hasBeenDiscarded: card.hasBeenDiscarded
      },
      {},
      {}
    )}`;
  })}</div> </div>`;
});
const css$9 = {
  code: ".rank-info-box.svelte-1cm9o04{display:grid;grid-template-columns:25.9px 16px;grid-template-rows:25.9px;border:1px solid #000080;border-radius:4px}.rank.svelte-1cm9o04,.count.svelte-1cm9o04{display:grid;justify-content:center;align-items:center;text-align:center;font-weight:600;font-size:large}.rank.svelte-1cm9o04{background:#ffffff;color:#000080;border-top-left-radius:4px;border-bottom-left-radius:4px}.count.svelte-1cm9o04{background:#39ff14;color:#ffffff;border-top-right-radius:4px;border-bottom-right-radius:4px}",
  map: null
};
const RankInfoBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let grayscale;
  let { rank } = $$props;
  let { count } = $$props;
  if ($$props.rank === void 0 && $$bindings.rank && rank !== void 0)
    $$bindings.rank(rank);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  $$result.css.add(css$9);
  grayscale = 100 - count * 100 / 4;
  return `<div class="rank-info-box svelte-1cm9o04"><p class="rank source-sans-3-text svelte-1cm9o04">${escape(rank)}</p> <p class="count source-sans-3-text svelte-1cm9o04"${add_attribute("style", `filter: grayscale(${grayscale}%);`, 0)}>${escape(count)}</p> </div>`;
});
const css$8 = {
  code: "ul.svelte-xn0srl{display:grid;height:100%;grid-template-columns:repeat(5, 1fr);grid-template-rows:repeat(3, 1fr);justify-content:center;align-content:center;grid-template-areas:'TWO THREE  FOUR FIVE SIX'\n			'. SEVEN EIGHT NINE .'\n			'TEN JACK QUEEN KING ACE';padding:0.15rem}li.svelte-xn0srl{list-style:none;display:grid;justify-content:center;align-items:center}.rank-2.svelte-xn0srl{grid-area:TWO}.rank-3.svelte-xn0srl{grid-area:THREE}.rank-4.svelte-xn0srl{grid-area:FOUR}.rank-5.svelte-xn0srl{grid-area:FIVE}.rank-6.svelte-xn0srl{grid-area:SIX}.rank-7.svelte-xn0srl{grid-area:SEVEN}.rank-8.svelte-xn0srl{grid-area:EIGHT}.rank-9.svelte-xn0srl{grid-area:NINE}.rank-10.svelte-xn0srl{grid-area:TEN}.rank-J.svelte-xn0srl{grid-area:JACK}.rank-Q.svelte-xn0srl{grid-area:QUEEN}.rank-K.svelte-xn0srl{grid-area:KING}.rank-A.svelte-xn0srl{grid-area:ACE}",
  map: null
};
const RankInfoWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ranks;
  let $theRemainingDeck, $$unsubscribe_theRemainingDeck;
  $$unsubscribe_theRemainingDeck = subscribe(theRemainingDeck, (value) => $theRemainingDeck = value);
  let rankSymbols = Object.keys(ECardRankSymbol);
  $$result.css.add(css$8);
  ranks = rankSymbols.map((rankSymbol) => {
    const arrayOfCards = $theRemainingDeck.filter((card) => {
      return card.rank == rankSymbol;
    });
    return {
      symbol: convertTypeValueToEnumValue(rankSymbol, ECardRankSymbol),
      count: arrayOfCards.length
    };
  });
  $$unsubscribe_theRemainingDeck();
  return `<ul class="rank-list svelte-xn0srl">${each(ranks, (rank) => {
    return `<li class="${escape(null_to_empty(`rank-${rank.symbol} rank-listitem`), true) + " svelte-xn0srl"}">${validate_component(RankInfoBox, "RankInfoBox").$$render($$result, { rank: rank.symbol, count: rank.count }, {}, {})} </li>`;
  })} </ul>`;
});
const css$7 = {
  code: ".suit-info-box.svelte-ioqr9j{display:grid;grid-template-columns:1fr 1.616fr;grid-template-rows:min-content;border:1px solid #000080;border-radius:4px}.suit.svelte-ioqr9j{background-color:#ffffff;border-top-left-radius:4px;border-bottom-left-radius:4px}.count.svelte-ioqr9j{color:#ffffff;background:#39ff14;border-top-right-radius:4px;border-bottom-right-radius:4px}.suit.svelte-ioqr9j,.count.svelte-ioqr9j{display:grid;justify-content:center;align-items:center;padding:2px 3px;text-align:center;font-weight:600;font-size:large}",
  map: null
};
const SuitInfoBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let grayscale;
  let { icon } = $$props;
  let { count } = $$props;
  let { color } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$7);
  grayscale = 100 - count * 100 / 13;
  return `<div class="suit-info-box svelte-ioqr9j"><div class="suit svelte-ioqr9j"${add_styles({ color })}><!-- HTML_TAG_START -->${icon}<!-- HTML_TAG_END --></div> <p class="count source-sans-3-text svelte-ioqr9j"${add_attribute("style", `filter: grayscale(${grayscale}%)`, 0)}>${escape(count)}</p> </div>`;
});
const css$6 = {
  code: ".suit-info-widget.svelte-1q41g3k{padding:0.5rem;display:grid;grid-template-columns:repeat(2, minmax(102px, 103.6px));grid-template-rows:repeat(2, min-content);justify-content:center;align-content:center;column-gap:6.18%;row-gap:15%}",
  map: null
};
const SuitInfoWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let suits;
  let $theRemainingDeck, $$unsubscribe_theRemainingDeck;
  $$unsubscribe_theRemainingDeck = subscribe(theRemainingDeck, (value) => $theRemainingDeck = value);
  let suitNames = Object.keys(ESuit);
  $$result.css.add(css$6);
  suits = suitNames.map((suitName) => {
    const arrayOfCards = $theRemainingDeck.filter((card) => {
      return card.suit == suitName;
    });
    return {
      name: suitName.toLowerCase(),
      color: convertTypeValueToEnumValue(suitName, ESuitColors),
      icon: convertTypeValueToEnumValue(suitName, ESuitSymbolUnicode),
      count: arrayOfCards.length
    };
  });
  $$unsubscribe_theRemainingDeck();
  return `<div id="suit-info-widget" class="suit-info-widget svelte-1q41g3k">${each(suits, (suit) => {
    return `${validate_component(SuitInfoBox, "SuitInfoBox").$$render(
      $$result,
      {
        icon: suit.icon,
        color: suit.color,
        count: suit.count
      },
      {},
      {}
    )}`;
  })} </div>`;
});
const css$5 = {
  code: ".reps-info-box.svelte-3j0ffr{height:100%;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(2, min-content);justify-content:center;align-items:center;align-content:center;gap:0.5rem}.exercise.svelte-3j0ffr{display:grid;grid-template-columns:5fr 1fr;grid-template-rows:1fr;color:#000080;font-size:0.75rem;width:100%}.reps-info-exercise-name.svelte-3j0ffr{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.reps-info-reps.svelte-3j0ffr{place-self:end}.reps.svelte-3j0ffr{width:100%;height:5px;border-radius:8px;background-color:#259259;box-shadow:1px 1px 4px rgba(0, 0, 0, 0.2)}.reps.svelte-3j0ffr::-webkit-progress-bar{background-color:#ffffff;border-radius:8px}.reps.svelte-3j0ffr::-webkit-progress-value{background-color:#39ff14;border-radius:8px;box-shadow:1px 1px 5px 3px #000080}",
  map: null
};
const RepsProgressBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let exerciseName;
  let { reps } = $$props;
  let { exercise } = $$props;
  if ($$props.reps === void 0 && $$bindings.reps && reps !== void 0)
    $$bindings.reps(reps);
  if ($$props.exercise === void 0 && $$bindings.exercise && exercise !== void 0)
    $$bindings.exercise(exercise);
  $$result.css.add(css$5);
  exerciseName = convertTypeValueToEnumValue(exercise, EExerciseNames);
  return `${exercise ? `<div class="reps-info-box svelte-3j0ffr"><label${add_attribute("for", `${exerciseName.toUpperCase()}`, 0)} class="exercise oswald-header svelte-3j0ffr"><p class="reps-info-exercise-name svelte-3j0ffr">${escape(exerciseName.toUpperCase())}</p> <p class="reps-info-reps svelte-3j0ffr">${escape(reps)}</p></label> <progress${add_attribute("id", `${exerciseName.toUpperCase()}`, 0)} class="reps source-sans-3-text svelte-3j0ffr" max="100" title="reps"${add_attribute("value", reps, 0)}>${escape(reps)}</progress></div>` : ``}`;
});
const css$4 = {
  code: ".reps-info-widget.svelte-6gov7s{padding:10px;display:grid;width:100%;height:100%;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(2, 1fr);justify-content:center;align-content:center;column-gap:1.4rem;row-gap:0.8rem}",
  map: null
};
const RepsInfoWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $suitExercises, $$unsubscribe_suitExercises;
  $$unsubscribe_suitExercises = subscribe(suitExercises, (value) => $suitExercises = value);
  $$result.css.add(css$4);
  $$unsubscribe_suitExercises();
  return `<div class="reps-info-widget svelte-6gov7s">${each($suitExercises, (data) => {
    return `${validate_component(RepsProgressBox, "RepsProgressBox").$$render(
      $$result,
      {
        reps: data.completedReps,
        exercise: data.exercise?.name
      },
      {},
      {}
    )}`;
  })} </div>`;
});
var EStopwatchButtonString = /* @__PURE__ */ ((EStopwatchButtonString2) => {
  EStopwatchButtonString2["PAUSE"] = "PAUSE";
  EStopwatchButtonString2["RESUME"] = "RESUME";
  return EStopwatchButtonString2;
})(EStopwatchButtonString || {});
const css$3 = {
  code: ".workout-stopwatch-container.svelte-1b22dgv{display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:repeat(2, 1fr);grid-template-areas:'. displayTime .'\n			'. stopwatchButton .'}.display-time.svelte-1b22dgv{color:#000080;grid-area:displayTime;align-self:end;font-size:2rem;text-align:center}.pause-button.svelte-1b22dgv,.continue-button.svelte-1b22dgv{align-self:center;grid-area:stopwatchButton;padding:5px 0;border-radius:8px;color:#000080}",
  map: null
};
const WorkoutStopwatchWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stopwatchTime;
  let $workoutStopwatch, $$unsubscribe_workoutStopwatch;
  let $discardedCards, $$unsubscribe_discardedCards;
  $$unsubscribe_workoutStopwatch = subscribe(workoutStopwatch, (value) => $workoutStopwatch = value);
  $$unsubscribe_discardedCards = subscribe(discardedCards, (value) => $discardedCards = value);
  let displayTime = $workoutStopwatch.elapsedTime;
  $$result.css.add(css$3);
  stopwatchTime = formatStopWatchTime(displayTime);
  $$unsubscribe_workoutStopwatch();
  $$unsubscribe_discardedCards();
  return `<div class="workout-stopwatch-container svelte-1b22dgv"><h1 class="display-time source-sans-3-text svelte-1b22dgv">${escape(stopwatchTime)}</h1> ${$workoutStopwatch.running && $workoutStopwatch.elapsedTime > 0 ? `<button class="pause-button oswald-header svelte-1b22dgv" ${!$workoutStopwatch.running ? "disabled" : ""}>${escape(EStopwatchButtonString.PAUSE)}</button>` : `${!$workoutStopwatch.running && $workoutStopwatch.elapsedTime > 0 && $discardedCards.length < 52 ? `<button class="continue-button oswald-header svelte-1b22dgv" ${$workoutStopwatch.running ? "disabled" : ""}>${escape(EStopwatchButtonString.RESUME)}</button>` : ``}`} </div>`;
});
const css$2 = {
  code: ".cards-info-widget-container.svelte-ozsr5b{display:grid;grid-template-columns:1fr;grid-template-rows:min-content 1fr;justify-items:center}.radio-buttons-container.svelte-ozsr5b{width:100%;background:#f1f2f2;padding:0.7rem 0;border-radius:8px;display:flex;flex-direction:row;justify-content:space-evenly}.listitem-label.svelte-ozsr5b{display:grid;grid-template-columns:min-content;justify-content:center;align-items:center;font-size:medium;color:#000080}.widget-container.svelte-ozsr5b{display:grid;justify-items:stretch;width:100%;height:100%;overflow-y:hidden}input.svelte-ozsr5b{margin-top:0.5rem;display:grid;place-content:center}input[type='radio'].svelte-ozsr5b{appearance:none;background-color:#ffffff;margin:0;font:inherit;color:#000080;width:1.15em;height:1.15em;border:0.15em solid #000080;border-radius:50%;justify-self:center}input[type='radio'].svelte-ozsr5b::before{content:'';width:0.65em;height:0.65em;border-radius:50%;transform:scale(0);transition:220ms transform ease-in-out;box-shadow:inset 1em 1em #39ff14}input[type='radio'].svelte-ozsr5b:checked::before{transform:scale(1)}",
  map: null
};
const CardsInfoWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let radioButtons;
  let $suitExercises, $$unsubscribe_suitExercises;
  $$unsubscribe_suitExercises = subscribe(suitExercises, (value) => $suitExercises = value);
  const infoWidgets = {
    // @ts-expect-error: svelte component error
    deck: DeckInfoWidget,
    // @ts-expect-error: svelte component error
    rank: RankInfoWidget,
    // @ts-expect-error: svelte component error
    suit: SuitInfoWidget,
    // @ts-expect-error: svelte component error
    reps: RepsInfoWidget,
    // @ts-expect-error: svelte component error
    time: WorkoutStopwatchWidget
  };
  let infoChoices = [
    {
      id: "radio-deck",
      value: "deck",
      labelName: radioButtonLabelNames.deck,
      // @ts-expect-error: svelte component error
      widget: DeckInfoWidget
    },
    {
      id: "radio-rank",
      value: "rank",
      labelName: radioButtonLabelNames.rank,
      // @ts-expect-error: svelte component error
      widget: RankInfoWidget
    },
    {
      id: "radio-suit",
      value: "suit",
      labelName: radioButtonLabelNames.suit,
      // @ts-expect-error: svelte component error
      widget: SuitInfoWidget
    },
    {
      id: "radio-reps",
      value: "reps",
      labelName: radioButtonLabelNames.reps,
      // @ts-expect-error: svelte component error
      widget: RepsInfoWidget
    },
    {
      id: "radio-time",
      value: "time",
      labelName: radioButtonLabelNames.time,
      // @ts-expect-error: svelte component error
      widget: WorkoutStopwatchWidget
    }
  ];
  let group = "deck";
  let showThisWidget = group;
  $$result.css.add(css$2);
  radioButtons = () => {
    if ($suitExercises.some(exercisesHaveNotBeenChosen)) {
      return infoChoices.slice(0, -2);
    } else {
      return infoChoices;
    }
  };
  $$unsubscribe_suitExercises();
  return `<div class="cards-info-widget-container svelte-ozsr5b"><div class="radio-buttons-container svelte-ozsr5b">${each(radioButtons(), (choice) => {
    return `<label${add_attribute("for", choice.id, 0)} class="listitem-label source-sans-3-text svelte-ozsr5b">${escape(choice.labelName)} <input type="radio"${add_attribute("id", choice.id, 0)} name="deck-of-cards-info"${add_attribute("value", choice.value, 0)} class="svelte-ozsr5b"${choice.value === group ? add_attribute("checked", true, 1) : ""}> </label>`;
  })}</div> <div class="widget-container svelte-ozsr5b">${`${validate_component(infoWidgets[showThisWidget] || missing_component, "svelte:component").$$render($$result, {}, {}, {})}`}</div> </div>`;
});
const css$1 = {
  code: ".discarded-cards-list.svelte-jbnuvf{width:100%;display:flex;flex-direction:row;overflow-x:scroll;overflow-y:hidden;overflow-anchor:none;-ms-overflow-style:none;scrollbar-width:none}.discarded-cards-list.svelte-jbnuvf::-webkit-scrollbar{display:none}li.svelte-jbnuvf:not(:first-child){margin-left:-75px;& button {\n			box-shadow: -2px 0px 3.236px #000000;\n		}}li.svelte-jbnuvf{list-style:none}",
  map: null
};
const DiscardedCardsWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $discardedCards, $$unsubscribe_discardedCards;
  $$unsubscribe_discardedCards = subscribe(discardedCards, (value) => $discardedCards = value);
  $$result.css.add(css$1);
  $$unsubscribe_discardedCards();
  return `<ul id="discarded-cards-only" class="discarded-cards-list svelte-jbnuvf">${$discardedCards ? `${each($discardedCards, (card) => {
    return `<li class="discarded-cards-listitem svelte-jbnuvf">${validate_component(PlayingCardWidget, "PlayingCardWidget").$$render(
      $$result,
      {
        id: `${card.name}-discarded`,
        rankSymbol: card.rank,
        exerciseName: card.exerciseName,
        suitSymbol: card.suit,
        textColor: card.textColor,
        reps: card.value,
        disabled: true
      },
      {},
      {}
    )} </li>`;
  })}` : ``} </ul>`;
});
const css = {
  code: "main.svelte-18az0z4{height:100%;max-width:50rem;margin:auto;display:grid;grid-template-columns:1fr;grid-template-rows:min-content 181.8px 1fr min-content;padding:0.5rem}.discarded-cards-aside.svelte-18az0z4{width:100%;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;background:#259259;overflow:hidden;padding:10px;border-radius:8px}.deck-of-cards-info-aside.svelte-18az0z4{width:100%;height:25svh;background-color:#d9d9d9;display:grid;padding:1rem;padding-bottom:0}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-18az0z4">${validate_component(NavAndHeading, "NavAndHeading").$$render(
    $$result,
    {
      heading: "suit yourself",
      navEmoji: exerciseEmoji,
      altHref: "/exercises"
    },
    {},
    {}
  )} <aside class="discarded-cards-aside svelte-18az0z4">${validate_component(DiscardedCardsWidget, "DiscardedCardsWidget").$$render($$result, {}, {}, {})}</aside> ${slots.default ? slots.default({}) : ``} <aside class="deck-of-cards-info-aside svelte-18az0z4">${validate_component(CardsInfoWidget, "CardsInfoWidget").$$render($$result, {}, {}, {})}</aside> </main>`;
});
export {
  Layout as default
};
