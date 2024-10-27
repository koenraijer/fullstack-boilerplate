<script lang="ts">
    import "../app.css";
    import {auth, user, userData} from '$lib/firebase';
    import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
	import { Button } from "$lib/components/ui/button";

    $user;
    $userData;

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
    }
</script>

<Button variant="outline" on:click={signInWithGoogle}>
    Google
</Button>
