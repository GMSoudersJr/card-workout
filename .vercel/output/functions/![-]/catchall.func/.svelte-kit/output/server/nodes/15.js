import * as universal from '../entries/pages/index/_page.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/index/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/index/+page.ts";
export const imports = ["_app/immutable/nodes/15.CwVpbKrf.js","_app/immutable/chunks/BloEfYwO.js","_app/immutable/chunks/CrRURQx6.js","_app/immutable/chunks/CUGes9Es.js","_app/immutable/chunks/BXBAniJG.js","_app/immutable/chunks/CfrsXlmR.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/DDuzSjkp.js","_app/immutable/chunks/-86EKnfN.js","_app/immutable/chunks/BTjgslve.js","_app/immutable/chunks/BVklr186.js"];
export const stylesheets = ["_app/immutable/assets/15.4FM1V85e.css"];
export const fonts = [];
