<script lang="ts">
    import EducationListItem from './EducationListItem.svelte';
    import educationItems from '$lib/data/educationItems.json';
</script>

<div class="flex flex-col items-center w-full px-10 py-5 gap-5">
    {#each educationItems as educationItem}
        <EducationListItem educationItem={educationItem} />
    {/each}
</div>