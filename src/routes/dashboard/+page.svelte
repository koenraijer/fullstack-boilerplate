<script lang="ts">
    import type { PageData } from './$types';
    import {auth, user, userData} from '$lib/firebase';
    import { signOut} from 'firebase/auth';
    import AuthCheck from '$lib/components/AuthCheck.svelte';
    import { goto } from '$app/navigation';
    export let data: PageData;
</script>

<h2 class="card-title mb-8">Dashboard</h2>

<AuthCheck>
    <div class="flex flex-col gap-2">
        <h2>Welcome, {$user?.displayName}</h2>
        <button class="btn btn-accent w-fit px-4" on:click={() => { signOut(auth); goto('/'); }}>Sign out</button>
        </div>
</AuthCheck>
