<script lang="ts">
	import type { Skill } from '$lib/model/Skill';
	import KnowledgeLevelBar from './KnowledgeLevelBar.svelte';

    export let skill: Skill;
    export let intersecting: boolean;
</script>

<div class="flex flex-row justify-between border-b-1 py-5 w-full not-visible {intersecting && 'visible'}">
    <div class="flex flex-row items-center gap-5">
        <a href="https://skillicons.dev">
            <img width="75" src="https://skillicons.dev/icons?i={skill.icon}" alt="{skill.name}" />
        </a>
        <p class="font-bold text-xl">{skill.name}</p>
    </div>
    <KnowledgeLevelBar shouldRunAnimation={intersecting} knowledgeLevel={skill.level} />
</div>

<style>
    .not-visible {
        opacity: 0;
        filter: blur(5px);
        transform: translateX(-100%);
        transition: all 1s;
    }

    .visible {
        opacity: 1;
        filter: blur(0);
        transform: translateX(0);
    }
</style>