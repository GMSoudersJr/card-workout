import * as universal from '../entries/pages/_page.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/9.BQaerMyv.js","_app/immutable/chunks/CUGes9Es.js","_app/immutable/chunks/BXBAniJG.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/CfrsXlmR.js","_app/immutable/chunks/CrRURQx6.js","_app/immutable/chunks/CPUjHiez.js"];
export const stylesheets = ["_app/immutable/assets/9.B8OJRpov.css"];
export const fonts = [];
