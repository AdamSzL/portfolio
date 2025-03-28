<script lang="ts">
    import SkillsSummaryItem from './SkillsSummaryItem.svelte';
    import skillsSummary from '$lib/data/skillsSummary.json';
</script>

<div class="flex flex-col basis-1/2 items-start gap-10">
    {#each skillsSummary as skillSummary}
        <SkillsSummaryItem icons={skillSummary.icons} section={skillSummary.section} text={skillSummary.text} />
    {/each}
</div>