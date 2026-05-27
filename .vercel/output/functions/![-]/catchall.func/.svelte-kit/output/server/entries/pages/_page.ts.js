import { h as homepage } from "../../chunks/forSeo.js";
const load = () => {
  return {
    title: homepage.title,
    description: homepage.description,
    metaImageUrl: homepage.metaImageUrl
  };
};
export {
  load
};
