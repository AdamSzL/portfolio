<script lang="ts">
    import skills from '$lib/data/skills.json';
	import SkillsListItem from './SkillsListItem.svelte';
    import type { Skill } from '$lib/model/Skill';

    const skillsList = skills as Skill[];
</script>

<div class="flex flex-col w-full">
    {#each skillsList as skill}
        <SkillsListItem skill={skill} />
    {/each}
</div>