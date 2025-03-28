<script lang="ts">
    import EducationListItem from './EducationListItem.svelte';
    import educationItems from '$lib/data/educationItems.json';
</script>

<div class="content-container">
    {#each educationItems as educationItem}
        <EducationListItem educationItem={educationItem} />
    {/each}
</div>