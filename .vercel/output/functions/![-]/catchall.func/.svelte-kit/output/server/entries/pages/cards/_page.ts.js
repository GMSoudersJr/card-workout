import { c as cards } from "../../../chunks/forSeo.js";
const load = () => {
  return {
    title: cards.title,
    description: cards.description,
    metaImageUrl: cards.metaImageUrl
  };
};
export {
  load
};
