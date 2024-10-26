import { redirect } from '@sveltejs/kit';
import { user, userData } from '$lib/firebase';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    // if (userData.username) {
    //     redirect(307, '/dashboard');
    // }
    return {};
}) satisfies PageServerLoad;