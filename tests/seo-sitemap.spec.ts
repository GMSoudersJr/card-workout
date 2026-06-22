import { expect, test } from '@playwright/test';

const staticPaths = ['/', '/library', '/decks', '/setup', '/faq'];

test.describe('sitemap.xml', () => {
	let body: string;
	let contentType: string | null;
	let status: number;

	test.beforeAll(async ({ request }) => {
		const response = await request.get('/sitemap.xml');
		status = response.status();
		contentType = response.headers()['content-type'];
		body = await response.text();
	});

	test('returns 200', () => {
		expect(status).toBe(200);
	});

	test('Content-Type is application/xml', () => {
		expect(contentType).toContain('application/xml');
	});

	for (const path of staticPaths) {
		test(`contains static route ${path}`, () => {
			expect(body).toContain(`<loc>`);
			expect(body).toMatch(new RegExp(`<loc>https?://[^<]+${path === '/' ? '/' : path}</loc>`));
		});
	}

	test('contains at least one exercise slug URL', () => {
		expect(body).toContain('/library/alternate_toe_taps');
	});
});

test.describe('robots.txt', () => {
	let body: string;
	let status: number;
	let contentType: string | null;

	test.beforeAll(async ({ request }) => {
		const response = await request.get('/robots.txt');
		status = response.status();
		contentType = response.headers()['content-type'];
		body = await response.text();
	});

	test('returns 200', () => {
		expect(status).toBe(200);
	});

	test('Content-Type is text/plain', () => {
		expect(contentType).toContain('text/plain');
	});

	test('allows all crawlers', () => {
		expect(body).toContain('User-agent: *');
	});

	test('Sitemap directive points to correct URL', () => {
		expect(body).toContain('Sitemap: https://suityourself.app/sitemap.xml');
	});
});
