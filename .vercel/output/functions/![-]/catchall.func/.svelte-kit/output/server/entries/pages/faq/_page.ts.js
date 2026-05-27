import { f as faq } from "../../../chunks/forSeo.js";
const load = () => {
  return {
    title: faq.title,
    description: faq.description,
    metaImageUrl: faq.metaImageUrl
  };
};
export {
  load
};
