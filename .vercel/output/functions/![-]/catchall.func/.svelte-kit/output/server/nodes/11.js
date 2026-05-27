import * as universal from '../entries/pages/cards/_page.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cards/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/cards/+page.ts";
export const imports = ["_app/immutable/nodes/11.DkBTwUZZ.js","_app/immutable/chunks/CUGes9Es.js","_app/immutable/chunks/F7go5tp7.js","_app/immutable/chunks/BXBAniJG.js","_app/immutable/chunks/CfrsXlmR.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/3j5Kuk9G.js","_app/immutable/chunks/CrRURQx6.js","_app/immutable/chunks/-86EKnfN.js","_app/immutable/chunks/BTjgslve.js","_app/immutable/chunks/C_W3ZHR2.js","_app/immutable/chunks/DDuzSjkp.js","_app/immutable/chunks/CPUjHiez.js","_app/immutable/chunks/Dxo-85Gf.js"];
export const stylesheets = ["_app/immutable/assets/PlayingCardWidget.CdK_2EON.css","_app/immutable/assets/11.CWeUsqyR.css"];
export const fonts = [];
