<script lang="ts">
    import "../app.css";
    import {auth, user, userData} from '$lib/firebase';
    import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

    $user;
    $userData;

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
        console.log(user);
    }
</script>

<div class="mx-10 my-4">
    <nav class="w-full">
        <div class="flex justify-between items-center py-4">
            <a href="/" class="text-2xl font-bold uppercase">Fullstack</a>
            <div class="flex w-fit gap-4 items-center">
                {#if $user}
                    <h2 class="font-bold">{$userData?.username ? "@" : ""}{$userData?.username ?? ""}</h2>
                    <div class="tooltip tooltip-bottom w-fit" data-tip="Dashboard">
                        <a href="/dashboard"><img src={$userData?.photoURL ?? "user.jpeg"} alt="profile" class="rounded-full w-8 h-8" /></a>
                    </div>
                {:else}
                    <button on:click={signInWithGoogle} class="btn btn-primary">Sign-in/sign-up</button>
                {/if}
            </div>
        </div>
    </nav>
    
    <div class="min-h-screen flex flex-col">
        <slot></slot>
    </div>
</div>

