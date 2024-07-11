<script lang="ts">
	import type { Skill } from '$lib/model/Skill';
	import KnowledgeLevelBar from './KnowledgeLevelBar.svelte';

    export let skill: Skill;
</script>

<div class="flex flex-row justify-between border-b-1 py-5 w-full">
    <div class="flex flex-row items-center gap-5">
        <a href="https://skillicons.dev">
            {#if ['Jetpack Compose', 'Material Design', 'XML'].includes(skill.name)}
                <img width="40" src="images/{skill.icon}.png" alt={skill.name} />
            {:else}
                <img width="40" src="https://skillicons.dev/icons?i={skill.icon}" alt={skill.name} />
            {/if}
        </a>
        <p class="font-bold text-xl">{skill.name}</p>
    </div>
    <KnowledgeLevelBar knowledgeLevel={skill.level} />
</div>

<style>
</style>