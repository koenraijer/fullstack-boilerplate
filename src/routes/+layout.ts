import type { LayoutLoad } from './$types';
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db, user, userData } from '$lib/firebase';
import { error } from '@sveltejs/kit';

export const load = (async () => {
    if (!user) {
        return error(401, "Unauthorized");
    }

    
    const collectionRef = collection(db, "users"); 
    return {};
}) satisfies LayoutLoad;