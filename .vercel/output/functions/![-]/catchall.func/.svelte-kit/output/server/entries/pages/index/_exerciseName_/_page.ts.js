import { e as exercises } from "../../../../chunks/exercisesDB.js";
import { c as convertTypeValueToEnumValue, E as EExerciseNames } from "../../../../chunks/convertTypeToEnumValue.js";
import { m as metaHomepageImageUrl } from "../../../../chunks/forSeo.js";
const load = async ({ params }) => {
  const exercise = exercises.filter(
    (exercise2) => exercise2.name === params.exerciseName.toUpperCase()
  )[0];
  const exerciseName = convertTypeValueToEnumValue(exercise.name, EExerciseNames);
  return {
    exercise,
    title: `${exerciseName} | Index | SUIT YOURSELF`,
    description: `Wondering how to do "${exerciseName.toLowerCase()}"? This page provides body position, variations, and a YouTube video as well.`,
    metaImageUrl: metaHomepageImageUrl
  };
};
export {
  load
};
