const robots = `User-agent: *
Disallow:
Sitemap: https://suityourself.app/sitemap.xml
`;

/** @type {import('@sveltejs/kit').RequestHandler} */
export function GET() {
	return new Response(robots, {
		headers: {
			'Content-Type': 'text/plain'
		}
	});
}
