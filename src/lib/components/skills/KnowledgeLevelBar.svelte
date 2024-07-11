<script lang="ts">
    export let knowledgeLevel: number;
</script>

<div class="flex flex-row items-center justify-center gap-5">
    <div class="flex flex-row gap-1 w-60 border-1">
        <div style="width: {knowledgeLevel}%" class="h-5">
            <div class="w-0 bar-animation h-full bg-dark-blue"></div>
        </div>
        <!-- {}
        {#each bgColors as bgColor, index}
            <div class="w-24 h-5 border-1">
                <div class="w-0 {shouldRunAnimation && `bar-animation bar-animation-${index + 1}`} h-full {bgColor}"></div>
            </div>
        {/each} -->
    </div>
    <p class="font-bold">{knowledgeLevel}%</p>
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