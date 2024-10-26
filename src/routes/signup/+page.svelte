<script lang="ts">
    import { goto } from '$app/navigation';
    import {auth, user, userData} from '$lib/firebase';
    import { GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
        console.log(user);
        goto('/signup/username');
    }
</script>

<div class="flex w-full flex-row flex-nowrap justify-between">
    <div class="w-32 flex justify-start">
        {#if $user}
            <button class="btn btn-accent" on:click={() => signOut(auth)}>Sign out</button>
        {:else}
            <button class="btn btn-primary btn-disabled">Sign out</button>
        {/if}
    </div>
    <h2 class="card-title w-fit">Sign-up</h2>
    <div class="w-32 flex justify-end">
        <a href="/signup/username" class="btn btn-primary" class:btn-disabled={!$user}>Next</a>
    </div>
</div>


{#if $user}
    <h2>Welcome, {$user.displayName}</h2>
    <p>You are logged in</p>
{:else}
    <button on:click={signInWithGoogle} class="btn btn-primary mt-6 mx-auto">Sign in with Google</button>
{/if}