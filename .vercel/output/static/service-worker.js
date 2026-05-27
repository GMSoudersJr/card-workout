const s=location.pathname.split("/").slice(0,-1).join("/"),o=[s+"/_app/immutable/entry/app.JrFCXgOu.js",s+"/_app/immutable/nodes/0.DqHlSL1z.js",s+"/_app/immutable/assets/0.C9xaiQIG.css",s+"/_app/immutable/nodes/1.CWOKaUdh.js",s+"/_app/immutable/assets/1.Ds5W3u8F.css",s+"/_app/immutable/nodes/10.BVRFLrOT.js",s+"/_app/immutable/assets/10.CPbuzOvQ.css",s+"/_app/immutable/nodes/11.DkBTwUZZ.js",s+"/_app/immutable/assets/11.CWeUsqyR.css",s+"/_app/immutable/nodes/12.C40EQFf9.js",s+"/_app/immutable/assets/12.DYE3F_wE.css",s+"/_app/immutable/nodes/13.DH2uUr-S.js",s+"/_app/immutable/assets/13.CbY8TF7N.css",s+"/_app/immutable/nodes/14.BMeHH5gp.js",s+"/_app/immutable/assets/14.CW7yS4dB.css",s+"/_app/immutable/nodes/15.CwVpbKrf.js",s+"/_app/immutable/assets/15.4FM1V85e.css",s+"/_app/immutable/nodes/16.CIwzyZjK.js",s+"/_app/immutable/assets/16.h5q1geQb.css",s+"/_app/immutable/nodes/17.CmjH9bjj.js",s+"/_app/immutable/assets/17.Cadcd_lT.css",s+"/_app/immutable/nodes/2.ywcICqac.js",s+"/_app/immutable/assets/2.DzKlScl2.css",s+"/_app/immutable/nodes/3.DDuZgyux.js",s+"/_app/immutable/assets/3.DkrUXj-O.css",s+"/_app/immutable/nodes/4.C_X1Yhkh.js",s+"/_app/immutable/nodes/5.C4B1ySDj.js",s+"/_app/immutable/assets/5._9IujLaJ.css",s+"/_app/immutable/nodes/6.CHl3adtL.js",s+"/_app/immutable/assets/6.CwCTQK1Y.css",s+"/_app/immutable/nodes/7.C_U_lqJl.js",s+"/_app/immutable/assets/7.Hn5HUubd.css",s+"/_app/immutable/nodes/8.COMzzjTG.js",s+"/_app/immutable/assets/8.jppKbo6w.css",s+"/_app/immutable/nodes/9.BQaerMyv.js",s+"/_app/immutable/assets/9.B8OJRpov.css",s+"/_app/immutable/assets/PlayingCardWidget.CdK_2EON.css",s+"/_app/immutable/assets/NavAndHeading.45la1q5J.css",s+"/_app/immutable/chunks/-86EKnfN.js",s+"/_app/immutable/chunks/3j5Kuk9G.js",s+"/_app/immutable/chunks/B0clUiSe.js",s+"/_app/immutable/chunks/BTjgslve.js",s+"/_app/immutable/chunks/BVklr186.js",s+"/_app/immutable/chunks/BXBAniJG.js",s+"/_app/immutable/chunks/BloEfYwO.js",s+"/_app/immutable/chunks/CPUjHiez.js",s+"/_app/immutable/chunks/CUGes9Es.js",s+"/_app/immutable/chunks/CW7zqfyt.js",s+"/_app/immutable/chunks/C_W3ZHR2.js",s+"/_app/immutable/chunks/CfrsXlmR.js",s+"/_app/immutable/chunks/CrRURQx6.js",s+"/_app/immutable/chunks/DDuzSjkp.js",s+"/_app/immutable/chunks/Dxo-85Gf.js",s+"/_app/immutable/chunks/F7go5tp7.js",s+"/_app/immutable/chunks/IHki7fMi.js",s+"/_app/immutable/entry/start.BvJcgcGB.js"],u=[s+"/favicon.png",s+"/icons/1024x1024Green.png",s+"/icons/512x512Maskable.png",s+"/icons/512x512Plain.png",s+"/images/activities.png",s+"/images/exerciseSelector.png",s+"/images/workoutDeck.png",s+"/images/workoutReps.png",s+"/images/workoutTimer.png",s+"/manifest.json"],r="1779893137880",m=`cache-${r}`,l=[...o,...u,"/"];self.addEventListener("install",e=>{async function p(){await(await caches.open(m)).addAll(l)}e.waitUntil(p())});self.addEventListener("activate",e=>{async function p(){for(const a of await caches.keys())a!==m&&await caches.delete(a)}e.waitUntil(p())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function p(){const a=new URL(e.request.url),n=await caches.open(m);if(l.includes(a.pathname)){const t=await n.match(a.pathname);if(t)return t}try{const t=await fetch(e.request),i=a.protocol==="http:",c=t.status===200;if(!(t instanceof Response))throw new Error("invalid response from fetch");return i&&c&&n.put(e.request,t.clone()),t}catch{const i=await n.match(a.pathname);return i||new Response(`
				<!DOCTYPE html>
				<html>
				<head>
					<style>
						* {
							margin: 0;
							padding: 0;
							color: #FFFFFF;
							user-select: none;
						}
						body {
							background-color: #000080;
							padding-top: 2rem;
						}
						.container {
							height: 100%;
							display: grid;
							grid-template-columns: 1fr;
							grid-template-rows: repeat(auto-fill, min-content);
							justify-items: center;
							row-gap: 1rem;
						}
						.headings {
							display: grid;
							grid-template-columns: 1fr;
							grid-template-rows: repeat(3, min-content);
							justify-items: center;
							align-items: center;
							row-gap: 0.5rem;
						}
					</style>
				</head>
				<body>
					<div class="container">
						<div class="headings">
							<h1>SUIT YOURSELF</h1>
							<h2>The Calisthenics Workout App</h2>
							<h4>Based-off Playing Cards</h4>
						</div>
						<h3>
							Oops! No network connection!
						</h3>
						<ol>
							<li>
								Connect to a network!
							</li>
							<li>
								Reload the app!
							</li>
						</ol>
						<p>The app will be available offline after being launched from a network connection</p>
					</div>
				</body>
				</html>
				`,{status:404,statusText:"You appear to be offline",headers:new Headers({"Content-Type":"text/html"})})}}e.respondWith(p())});self.addEventListener("message",e=>{e.data&&e.data.type==="SKIP_WAITING"&&self.skipWaiting()});
