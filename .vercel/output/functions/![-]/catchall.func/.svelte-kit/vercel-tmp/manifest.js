export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icons/1024x1024Green.png","icons/512x512Maskable.png","icons/512x512Plain.png","images/activities.png","images/exerciseSelector.png","images/workoutDeck.png","images/workoutReps.png","images/workoutTimer.png","manifest.json","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {start:"_app/immutable/entry/start.BvJcgcGB.js",app:"_app/immutable/entry/app.JrFCXgOu.js",imports:["_app/immutable/entry/start.BvJcgcGB.js","_app/immutable/chunks/Dxo-85Gf.js","_app/immutable/chunks/BXBAniJG.js","_app/immutable/chunks/BTjgslve.js","_app/immutable/entry/app.JrFCXgOu.js","_app/immutable/chunks/BXBAniJG.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js')),
			__memo(() => import('../output/server/nodes/17.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/activities",
				pattern: /^\/activities\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/cards",
				pattern: /^\/cards\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/decks",
				pattern: /^\/decks\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/exercises",
				pattern: /^\/exercises\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/index",
				pattern: /^\/index\/?$/,
				params: [],
				page: { layouts: [0,7,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/index/[exerciseName]",
				pattern: /^\/index\/([^/]+?)\/?$/,
				params: [{"name":"exerciseName","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,7,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,8,], errors: [1,,], leaf: 17 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
