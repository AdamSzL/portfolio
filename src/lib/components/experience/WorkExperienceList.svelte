<script type="ts">
    import WorkExperienceListItem from './WorkExperienceListItem.svelte';
    import workExperienceItems from '$lib/data/workExperienceItems.json';
</script>

<div class="flex flex-col items-center w-full px-10 py-5 gap-5">
    {#each workExperienceItems as workExperienceItem}
        <WorkExperienceListItem workExperienceItem={workExperienceItem} />
    {/each}
</div>