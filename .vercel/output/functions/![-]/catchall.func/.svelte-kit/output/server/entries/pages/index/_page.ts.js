import { e as exercises } from "../../../chunks/exercisesDB.js";
import { i as index } from "../../../chunks/forSeo.js";
const load = () => {
  return {
    exercises,
    title: index.title,
    description: index.description,
    metaImageUrl: index.metaImageUrl
  };
};
export {
  load
};
