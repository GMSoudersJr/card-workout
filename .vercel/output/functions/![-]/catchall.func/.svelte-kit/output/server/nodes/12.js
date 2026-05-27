import * as universal from '../entries/pages/decks/_page.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/decks/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/decks/+page.ts";
export const imports = ["_app/immutable/nodes/12.C40EQFf9.js","_app/immutable/chunks/BloEfYwO.js","_app/immutable/chunks/CrRURQx6.js","_app/immutable/chunks/CUGes9Es.js","_app/immutable/chunks/BXBAniJG.js","_app/immutable/chunks/CfrsXlmR.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/DDuzSjkp.js","_app/immutable/chunks/-86EKnfN.js","_app/immutable/chunks/BTjgslve.js","_app/immutable/chunks/Dxo-85Gf.js"];
export const stylesheets = ["_app/immutable/assets/12.DYE3F_wE.css"];
export const fonts = [];
