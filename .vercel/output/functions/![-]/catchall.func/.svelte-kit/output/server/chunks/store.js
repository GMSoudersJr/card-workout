import { d as derived, w as writable } from "./index.js";
var ESuit = /* @__PURE__ */ ((ESuit2) => {
  ESuit2["CLUBS"] = "Clubs";
  ESuit2["DIAMONDS"] = "Diamonds";
  ESuit2["HEARTS"] = "Hearts";
  ESuit2["SPADES"] = "Spades";
  return ESuit2;
})(ESuit || {});
var ECardRank = /* @__PURE__ */ ((ECardRank2) => {
  ECardRank2["TWO"] = "Two";
  ECardRank2["THREE"] = "Three";
  ECardRank2["FOUR"] = "Four";
  ECardRank2["FIVE"] = "Five";
  ECardRank2["SIX"] = "Six";
  ECardRank2["SEVEN"] = "Seven";
  ECardRank2["EIGHT"] = "Eight";
  ECardRank2["NINE"] = "Nine";
  ECardRank2["TEN"] = "Ten";
  ECardRank2["JACK"] = "Jack";
  ECardRank2["QUEEN"] = "Queen";
  ECardRank2["KING"] = "King";
  ECardRank2["ACE"] = "Ace";
  return ECardRank2;
})(ECardRank || {});
var ECardValue = /* @__PURE__ */ ((ECardValue2) => {
  ECardValue2[ECardValue2["TWO"] = 2] = "TWO";
  ECardValue2[ECardValue2["THREE"] = 3] = "THREE";
  ECardValue2[ECardValue2["FOUR"] = 4] = "FOUR";
  ECardValue2[ECardValue2["FIVE"] = 5] = "FIVE";
  ECardValue2[ECardValue2["SIX"] = 6] = "SIX";
  ECardValue2[ECardValue2["SEVEN"] = 7] = "SEVEN";
  ECardValue2[ECardValue2["EIGHT"] = 8] = "EIGHT";
  ECardValue2[ECardValue2["NINE"] = 9] = "NINE";
  ECardValue2[ECardValue2["TEN"] = 10] = "TEN";
  ECardValue2[ECardValue2["JACK"] = 10] = "JACK";
  ECardValue2[ECardValue2["QUEEN"] = 10] = "QUEEN";
  ECardValue2[ECardValue2["KING"] = 10] = "KING";
  ECardValue2[ECardValue2["ACE"] = 16] = "ACE";
  return ECardValue2;
})(ECardValue || {});
var ECardRankSymbol = /* @__PURE__ */ ((ECardRankSymbol2) => {
  ECardRankSymbol2["TWO"] = "2";
  ECardRankSymbol2["THREE"] = "3";
  ECardRankSymbol2["FOUR"] = "4";
  ECardRankSymbol2["FIVE"] = "5";
  ECardRankSymbol2["SIX"] = "6";
  ECardRankSymbol2["SEVEN"] = "7";
  ECardRankSymbol2["EIGHT"] = "8";
  ECardRankSymbol2["NINE"] = "9";
  ECardRankSymbol2["TEN"] = "10";
  ECardRankSymbol2["JACK"] = "J";
  ECardRankSymbol2["QUEEN"] = "Q";
  ECardRankSymbol2["KING"] = "K";
  ECardRankSymbol2["ACE"] = "A";
  return ECardRankSymbol2;
})(ECardRankSymbol || {});
var ESuitColors = /* @__PURE__ */ ((ESuitColors2) => {
  ESuitColors2["CLUBS"] = "#000000";
  ESuitColors2["DIAMONDS"] = "#FF0000";
  ESuitColors2["HEARTS"] = "#FF0000";
  ESuitColors2["SPADES"] = "#000000";
  return ESuitColors2;
})(ESuitColors || {});
class PlayingCard {
  suit;
  rank;
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.exerciseName = void 0;
    this.hasBeenPlucked = false;
    this.hasBeenDiscarded = false;
    this.deckIndex = 0;
  }
  hasBeenPlucked;
  hasBeenDiscarded;
  deckIndex;
  exerciseName;
  get name() {
    return `${ECardRank[this.rank]} of ${ESuit[this.suit]}`;
  }
  get value() {
    return ECardValue[this.rank];
  }
  get symbol() {
    return ECardRankSymbol[this.rank];
  }
  get textColor() {
    return ESuitColors[this.suit];
  }
}
const createPlayingCard = (playingCard, rank, suit) => {
  return new playingCard(suit, rank);
};
const createDeckOfCards = (aSelectionOfSuitExercises) => {
  const result = [];
  let deckIndex = 0;
  const suits = Object.keys(ESuit);
  const ranks = Object.keys(ECardRank);
  for (let i = 0; i < suits.length; i++) {
    const suit = suits[i];
    let exerciseName;
    if (aSelectionOfSuitExercises) {
      const thisSuitExercise = aSelectionOfSuitExercises.find((entry) => {
        return entry.suit === suit;
      });
      exerciseName = thisSuitExercise?.exercise?.name;
    }
    for (let j = 0; j < ranks.length; j++) {
      const rank = ranks[j];
      const playingCard = createPlayingCard(PlayingCard, rank, suit);
      playingCard.exerciseName = exerciseName;
      playingCard.deckIndex = deckIndex;
      result.push(playingCard);
      deckIndex++;
    }
  }
  return result;
};
const createSuitExercises = () => {
  const suits = Object.keys(ESuit);
  const result = suits.map((suit) => {
    const suitExercise = {
      suit,
      exercise: void 0,
      completedReps: 0
    };
    return suitExercise;
  });
  return result;
};
const createWorkout = (suitExercises2) => {
  const exercises = suitExercises2.map((entry) => {
    if (entry.exercise === void 0 || entry.exercise === null)
      return;
    return entry.exercise.name;
  });
  const result = {
    name: void 0,
    exercises,
    time: void 0
  };
  return result;
};
function createWorkoutNameStore() {
  const workoutName2 = "";
  const { subscribe, set, update } = writable(workoutName2);
  return {
    subscribe,
    rename: (newName) => update((workoutName3) => {
      workoutName3 = newName;
      return workoutName3;
    }),
    reset: () => set("")
  };
}
function createCheckboxStore() {
  const checkedBoxes = {
    category: [],
    position: [],
    target: [],
    variation: []
  };
  const { subscribe, set, update } = writable(checkedBoxes);
  return {
    subscribe,
    updateCategory: (value) => update((checkedBoxes2) => {
      if (checkedBoxes2.category.includes(value)) {
        checkedBoxes2.category.splice(checkedBoxes2.category.indexOf(value), 1);
      } else {
        checkedBoxes2.category.push(value);
      }
      return checkedBoxes2;
    }),
    updatePosition: (value) => update((checkedBoxes2) => {
      if (checkedBoxes2.position.includes(value)) {
        checkedBoxes2.position.splice(checkedBoxes2.position.indexOf(value), 1);
      } else {
        checkedBoxes2.position.push(value);
      }
      return checkedBoxes2;
    }),
    updateTarget: (value) => update((checkedBoxes2) => {
      if (checkedBoxes2.target.includes(value)) {
        checkedBoxes2.target.splice(checkedBoxes2.target.indexOf(value), 1);
      } else {
        checkedBoxes2.target.push(value);
      }
      return checkedBoxes2;
    }),
    updateVariation: (value) => update((checkedBoxes2) => {
      if (checkedBoxes2.variation.includes(value)) {
        checkedBoxes2.variation.splice(checkedBoxes2.variation.indexOf(value), 1);
      } else {
        checkedBoxes2.variation.push(value);
      }
      return checkedBoxes2;
    }),
    reset: () => set({
      category: [],
      position: [],
      target: [],
      variation: []
    })
  };
}
function createTheDeckOfCards() {
  const { subscribe, set, update } = writable(createDeckOfCards());
  return {
    subscribe,
    shuffle: () => set(createDeckOfCards()),
    pluck: (someRandomNumber) => update((deck) => {
      deck[someRandomNumber].hasBeenPlucked = true;
      return deck;
    }),
    discard: (someRandomNumber) => update((deck) => {
      deck[someRandomNumber].hasBeenDiscarded = true;
      return deck;
    }),
    setExercises: (anArrayOfSuitExercises) => set(createDeckOfCards(anArrayOfSuitExercises)),
    putBack: (theDeckIndexOfTheCurrentCard) => update((deck) => {
      deck[theDeckIndexOfTheCurrentCard].hasBeenPlucked = false;
      return deck;
    })
  };
}
function createStopwatch() {
  const stopwatch = {
    running: false,
    startedAt: 0,
    paused: {
      elapsedTime: 0
    },
    continuedAt: 0,
    elapsedTime: 0,
    _intervalId: 0,
    displayIntervalId: 0
  };
  const { subscribe, set, update } = writable(stopwatch);
  return {
    subscribe,
    start: () => update((stopwatch2) => {
      stopwatch2.running = true;
      stopwatch2.startedAt = Date.now();
      stopwatch2._intervalId = setInterval(() => {
        stopwatch2.elapsedTime = Date.now() - stopwatch2.startedAt;
      }, 10);
      return stopwatch2;
    }),
    stop: () => update((stopwatch2) => {
      stopwatch2.running = false;
      clearInterval(stopwatch2._intervalId);
      clearInterval(stopwatch2.displayIntervalId);
      return stopwatch2;
    }),
    pause: () => update((stopwatch2) => {
      clearInterval(stopwatch2._intervalId);
      stopwatch2.running = false;
      stopwatch2.paused.elapsedTime = stopwatch2.elapsedTime;
      return stopwatch2;
    }),
    continue: () => update((stopwatch2) => {
      stopwatch2.running = true;
      stopwatch2.continuedAt = Date.now();
      stopwatch2._intervalId = setInterval(() => {
        stopwatch2.elapsedTime = stopwatch2.paused.elapsedTime + (Date.now() - stopwatch2.continuedAt);
      }, 10);
      return stopwatch2;
    }),
    updateDisplayIntervalId: (displayIntervalId) => update((stopwatch2) => {
      stopwatch2.displayIntervalId = displayIntervalId;
      return stopwatch2;
    }),
    clearIntervals: () => update((stopwatch2) => {
      clearInterval(stopwatch2.displayIntervalId);
      clearInterval(stopwatch2._intervalId);
      return stopwatch2;
    }),
    reset: () => set({
      running: false,
      startedAt: 0,
      paused: {
        elapsedTime: 0
      },
      continuedAt: 0,
      elapsedTime: 0,
      _intervalId: 0,
      displayIntervalId: 0
    })
  };
}
function createSuitExercisesStore() {
  const suitExercises2 = createSuitExercises();
  const { subscribe, set, update } = writable(suitExercises2);
  return {
    subscribe,
    updateExercise: (suit, exercise) => update((result) => {
      const isThisSuit = (entry) => entry.suit === suit;
      const indexOfThisSuit = result.findIndex(isThisSuit);
      result = result.with(indexOfThisSuit, {
        suit,
        completedReps: 0,
        exercise: {
          name: exercise
        }
      });
      return result;
    }),
    addReps: (aDiscardedCard) => update((result) => {
      const theSuitOfTheDiscardedCard = aDiscardedCard.suit;
      const theValueOfTheDiscardedCard = aDiscardedCard.value;
      const ofThisSuit = (entry) => entry.suit === theSuitOfTheDiscardedCard;
      const indexOfThisSuit = result.findIndex(ofThisSuit);
      const updatedData = {
        suit: result[indexOfThisSuit].suit,
        completedReps: result[indexOfThisSuit].completedReps + theValueOfTheDiscardedCard,
        exercise: {
          name: result[indexOfThisSuit].exercise?.name
        }
      };
      result = result.with(indexOfThisSuit, updatedData);
      return result;
    }),
    reset: () => set(suitExercises2)
  };
}
function usedCards() {
  const emptyArray = [];
  const { subscribe, update } = writable(emptyArray);
  return {
    subscribe,
    reset: () => update((array) => {
      array.splice(0, array.length);
      return array;
    }),
    add: (playingCard) => update((discarded) => {
      playingCard.hasBeenDiscarded = true;
      discarded.push(playingCard);
      return discarded;
    })
  };
}
function createTheCurrentCard() {
  const emptyArray = [];
  const { subscribe, update } = writable(emptyArray);
  return {
    subscribe,
    data: (playingCard) => update((singleCardArray) => {
      singleCardArray.splice(0, singleCardArray.length);
      singleCardArray.push(playingCard);
      return singleCardArray;
    }),
    reset: () => update((singleCardArray) => {
      singleCardArray.splice(0, singleCardArray.length);
      return singleCardArray;
    })
  };
}
const theCurrentCard = createTheCurrentCard();
const theDeckOfCards = createTheDeckOfCards();
const discardedCards = usedCards();
const suitExercises = createSuitExercisesStore();
const workoutStopwatch = createStopwatch();
const theExerciseIndexCheckboxStore = createCheckboxStore();
const workoutName = createWorkoutNameStore();
const theRemainingDeck = derived(theDeckOfCards, ($theDeckOfCards) => {
  return $theDeckOfCards.filter((card) => {
    return !card.hasBeenPlucked;
  });
});
derived(suitExercises, ($suitExercises) => {
  return createWorkout($suitExercises);
});
const randomCardIndex = derived(theDeckOfCards, ($theDeckOfCards) => {
  let result = -1;
  const randomIndexNumber = Math.floor(Math.random() * $theDeckOfCards.length);
  const recursiveIndexFinder = (index) => {
    if ($theDeckOfCards[index].hasBeenPlucked) {
      index = Math.floor(Math.random() * $theDeckOfCards.length);
      return recursiveIndexFinder(index);
    } else {
      return index;
    }
  };
  const haveNotBeenPlucked = (card) => !card.hasBeenPlucked;
  if ($theDeckOfCards.some(haveNotBeenPlucked)) {
    result = recursiveIndexFinder(randomIndexNumber);
  } else {
    result = randomIndexNumber;
  }
  return result;
});
export {
  ECardRankSymbol as E,
  theDeckOfCards as a,
  ESuitColors as b,
  ESuit as c,
  discardedCards as d,
  theCurrentCard as e,
  workoutName as f,
  theExerciseIndexCheckboxStore as g,
  randomCardIndex as r,
  suitExercises as s,
  theRemainingDeck as t,
  workoutStopwatch as w
};
