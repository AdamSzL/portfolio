<script lang="ts">
    import SkillsSummaryItem from './SkillsSummaryItem.svelte';
    import skillsSummary from '$lib/data/skillsSummary.json';
</script>

<div class="flex flex-col items-start gap-10 max-w-4xl">
    {#each skillsSummary as skillSummary}
        <SkillsSummaryItem icons={skillSummary.icons} text={skillSummary.text} />
    {/each}
</div>