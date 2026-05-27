import { a as activities } from "../../../chunks/forSeo.js";
const load = () => {
  return {
    title: activities.title,
    description: activities.description,
    metaImageUrl: activities.metaImageUrl
  };
};
export {
  load
};
