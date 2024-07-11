<script lang="ts">
    export let texts: String[];

    let animationClasses = ['animate-typewriter-instant', 'animate-typewriter-delayed'];
</script>

<div class="h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-5 p-10 relative">
    {#each texts as text, index}
        <div>
            <p class="{animationClasses[index]} {index == 1 ? 'w-0 text-3xl' : 'text-4xl font-semibold' } overflow-hidden border-r-[.10em] border-solid border-transparent whitespace-nowrap m-auto tracking-wider">
                {text}
            </p>
        </div>
    {/each}
</div>

<style>
    .not-visible {
        opacity: 0;
        transition: all 2s;
    }

    .visible {
        opacity: 1;
    }
</style>