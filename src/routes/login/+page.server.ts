import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
	const username = cookies.get('username');
	
	return {
		username
	}
};

export const actions = {
	login: async ({ cookies, request, url }) => {
		const data = await request.formData();
		const username = data.get('username')?.toString().trim();
		if ( username === undefined || username === null || username === '') {
			return fail(400, { username, missing: true });
		}

		// Eventually, check this for uniqueness in the database
		// but for now, just set it as a cookie and then use it

		cookies.set('username', username, {path: '/'});
		if (url.searchParams.has('redirectTo')) {
			const redirectTo = url.searchParams.get('redirectTo')?.toString();
			if (redirectTo === undefined || redirectTo === null) return;
			redirect(303, redirectTo);
		}
		return { success: true }
	}
} satisfies Actions;
