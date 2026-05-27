import * as universal from '../entries/pages/activities/_page.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/activities/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/activities/+page.ts";
export const imports = ["_app/immutable/nodes/10.BVRFLrOT.js","_app/immutable/chunks/CUGes9Es.js","_app/immutable/chunks/F7go5tp7.js","_app/immutable/chunks/BXBAniJG.js","_app/immutable/chunks/CfrsXlmR.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/CPUjHiez.js","_app/immutable/chunks/DDuzSjkp.js","_app/immutable/chunks/CrRURQx6.js","_app/immutable/chunks/-86EKnfN.js","_app/immutable/chunks/BTjgslve.js","_app/immutable/chunks/Dxo-85Gf.js"];
export const stylesheets = ["_app/immutable/assets/10.CPbuzOvQ.css"];
export const fonts = [];
