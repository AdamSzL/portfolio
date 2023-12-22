<script lang="ts">
    import type { KnowledgeLevel } from '$lib/model/Skill';

    export let knowledgeLevel: KnowledgeLevel;
    export let shouldRunAnimation: boolean;

    const colors = {
        'BEGINNER': ['bg-green-500', 'white', 'white', 'white'],
        'INTERMEDIATE': ['bg-orange-500', 'bg-orange-500', 'white', 'white'],
        'ADVANCED': ['bg-red-500', 'bg-red-500', 'bg-red-500', 'white'],
        'EXPERT': ['bg-purple-500', 'bg-purple-500', 'bg-purple-500', 'bg-purple-500']
    };

    $: bgColors = colors[knowledgeLevel];
</script>

<div class="flex flex-col items-center justify-center gap-2">
    <div class="flex flex-row gap-1">
        {#each bgColors as bgColor, index}
            <div class="w-24 h-5 border-1">
                <div class="w-0 {shouldRunAnimation && `bar-animation bar-animation-${index + 1}`} h-full {bgColor}"></div>
            </div>
        {/each}
    </div>
    <p>{knowledgeLevel}</p>
</div>

<style>
    @keyframes barWidth {
        0% {
            width: 0%;
        }
        100% {
            width: 100%;
        }
    }

    .bar-animation {
        animation-name: barWidth;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
    }

    .bar-animation-1 {
        animation-delay: 0.5s;
    }
    
    .bar-animation-2 {
        animation-delay: 1s;
    }

    .bar-animation-3 {
        animation-delay: 1.5s;
    }

    .bar-animation-4 {
        animation-delay: 2s;
    }
</style>