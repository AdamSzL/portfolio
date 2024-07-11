<script lang="ts">
    import skills from '$lib/data/skills.json';
	import SkillsListItem from './SkillsListItem.svelte';
    import type { Skill } from '$lib/model/Skill';

    const skillsList = skills as Skill[];
</script>

<div class="flex flex-col flex-1 max-w-4xl">
    {#each skillsList as skill}
        <SkillsListItem skill={skill} />
    {/each}
</div>