<script lang="ts">
    import {auth, user, userData} from '$lib/firebase';
    import { GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
    import { goto } from '$app/navigation';
    
    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
        console.log(user);
        goto('/signup/username');
    }
</script>

{#if $user}
    <slot />
{:else}
    <div class="flex flex-col gap-y-4 mx-auto">
        <p class="text-xl">🙈 There's no point looking at this page if you're not logged in!</p>
        <button on:click={signInWithGoogle} class="btn btn-primary mt-6 mx-auto">Sign in with Google</button>
    </div>
{/if} 