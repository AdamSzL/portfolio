<script type="ts">
    import WorkExperienceListItem from './WorkExperienceListItem.svelte';
    import workExperienceItems from '$lib/data/workExperienceItems.json';
</script>

<div class="content-container">
    {#each workExperienceItems as workExperienceItem}
        <WorkExperienceListItem workExperienceItem={workExperienceItem} />
    {/each}
</div>