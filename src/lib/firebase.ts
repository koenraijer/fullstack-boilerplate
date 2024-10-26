// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, type Readable, derived } from "svelte/store";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2GmzRAAE5JQDvzRvMgbRzcu6_OccEeDk",
  authDomain: "fireship-sveltekit-cours-e722e.firebaseapp.com",
  projectId: "fireship-sveltekit-cours-e722e",
  storageBucket: "fireship-sveltekit-cours-e722e.appspot.com",
  messagingSenderId: "585224193965",
  appId: "1:585224193965:web:f562bf7b029e364f7b8324",
  measurementId: "G-RQW22ENP9G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

/*
  * @returns a store with the current firebase user
*/
function userStore() {
	let unsubscribe: () => void;

	if (!auth || !globalThis.window) {
	  console.warn('Auth is not initialized or not in browser');
	  const { subscribe } = writable<User | null>(null);
	  return { 
		  subscribe,
	  }
	}
	
	const {subscribe} = writable(auth?.currentUser ?? null, (set) => {
		unsubscribe = onAuthStateChanged(auth, (user) => {
			set(user);
		})

		return () => unsubscribe();
	});
	
	return {
		subscribe,
	}
}

export const user = userStore();

/**
 * @param  {string} path document path or reference
 * @returns a store with realtime updates on document data
 */
export function docStore<T>(
	path: string,
  ) {
	let unsubscribe: () => void;
  
	const docRef = doc(db, path);
  
	const { subscribe } = writable<T | null>(null, (set) => {
	  unsubscribe = onSnapshot(docRef, (snapshot) => {
		set((snapshot.data() as T) ?? null);
	  });
  
	  return () => unsubscribe();
	});
  
	return {
	  subscribe,
	  ref: docRef,
	  id: docRef.id,
	};
  }

  interface UserData {
	username: string;
	bio: string;
	photoURL: string;
	links: any[];
  }
  
  export const userData: Readable<UserData | null> = derived(user, ($user, set) => { 
	if ($user) {
	  return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
	} else {
	  set(null); 
	}
  });  