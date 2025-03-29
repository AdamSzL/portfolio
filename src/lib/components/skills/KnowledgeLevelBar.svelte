<script lang="ts">
    export let knowledgeLevel: number;
</script>

<div class="flex flex-row items-center justify-center gap-5">
    <div class="flex flex-row gap-1 w-24 sm:w-40 md:w-60 border-1">
        <div style="width: {knowledgeLevel}%" class="h-5">
            <div class="w-0 bar-animation h-full bg-dark-blue"></div>
        </div>
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
</style>