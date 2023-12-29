<script lang="ts">
	import type { ParagraphData } from '$lib/model/ParagraphData';
	import ScrollDownIcon from '../icons/ScrollDownIcon.svelte';
    import { TEXT_ANIMATION } from '$lib/model/ParagraphData';

    export let paragraphData: ParagraphData;
    export let intersecting: boolean;

    let animationClasses = ['animate-typewriter-instant', 'animate-typewriter-delayed'];
</script>

<div class="h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-5 p-20 relative">
    {#each paragraphData.texts as text, index}
        <div>
            {#if paragraphData.animation === TEXT_ANIMATION.TYPEWRITER }
                <p class="{animationClasses[index]} {index == 1 ? 'w-0 text-3xl' : 'text-4xl font-semibold' } overflow-hidden border-r-[.10em] border-solid border-transparent whitespace-nowrap m-auto tracking-wider">
                    {text}
                </p>
            {:else}
                <p class="m-auto text-4xl w-1/4 text-center not-visible {intersecting && 'visible'}">
                    {text}
                </p>
            {/if}
        </div>
    {/each}
    <ScrollDownIcon classes="absolute bottom-24" />
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