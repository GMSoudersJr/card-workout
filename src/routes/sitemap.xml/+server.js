import { exercises } from '$lib/exercisesDB';

const staticRoutes = [
	{ path: '/', changefreq: 'weekly', priority: '1.0' },
	{ path: '/library', changefreq: 'weekly', priority: '0.8' },
	{ path: '/decks', changefreq: 'monthly', priority: '0.8' },
	{ path: '/setup', changefreq: 'monthly', priority: '0.8' },
	{ path: '/faq', changefreq: 'monthly', priority: '0.8' }
];

/** @type {import('@sveltejs/kit').RequestHandler} */
export function GET({ url }) {
	const origin = url.origin;

	const staticEntries = staticRoutes
		.map(
			({ path, changefreq, priority }) => `
	<url>
		<loc>${origin}${path}</loc>
		<changefreq>${changefreq}</changefreq>
		<priority>${priority}</priority>
	</url>`
		)
		.join('');

	const exerciseEntries = exercises
		.map(
			(exercise) => `
	<url>
		<loc>${origin}/library/${exercise.name.toLowerCase()}</loc>
		<changefreq>monthly</changefreq>
		<priority>0.6</priority>
	</url>`
		)
		.join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${exerciseEntries}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
