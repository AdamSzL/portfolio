<script lang="ts">
    export let texts: string[];

    let animationClasses = ['animate-typewriter-instant', 'animate-typewriter-delayed'];
</script>

<div class="flex flex-col items-center justify-center gap-5 p-10 relative">
    {#each texts as text, index}
        <div>
            <p class="{animationClasses[index]} {index == 1 ? 'w-0 text-lg sm:text-xl md:text-2xl lg:text-3xl' : 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold' } overflow-hidden border-r-[.10em] border-solid border-transparent whitespace-nowrap m-auto tracking-wider">
                {text}
            </p>
        </div>
    {/each}
</div>