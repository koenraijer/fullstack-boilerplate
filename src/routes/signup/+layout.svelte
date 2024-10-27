<script lang="ts">
    import {page} from '$app/stores';
    import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
    
</script>

<ul class="steps mt-8">
    <a href="/signup" class="step step-primary">Sign In</a>
    <a href="/signup/username" class="step " class:step-primary={$page.route.id?.match(/username|photo/g)}>Choose Username</a>
    <a href="/signup/photo" class="step" class:step-primary={$page.route.id?.includes("photo")}>Upload Photo</a>
</ul>

<AnimatedRoute>
    <main class="card w-4/6 bg-neutral text-neutral-content mx-auto my-20">
        <div class="card-body items-center text-center">
            <slot></slot>
        </div>
    </main>
</AnimatedRoute>
