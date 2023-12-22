<script lang="ts">
    import skills from '$lib/data/skills.json';
	import SkillsListItem from './SkillsListItem.svelte';
    import type { Skill } from '$lib/model/Skill';
    import IntersectionObserver from '../utilities/IntersectionObserver.svelte';

    const skillsList = skills as Skill[];
</script>

<div class="flex flex-col w-full">
    {#each skillsList as skill}
        <IntersectionObserver let:intersecting top={50}>
            <SkillsListItem intersecting={intersecting} skill={skill} />
        </IntersectionObserver>
    {/each}
</div>