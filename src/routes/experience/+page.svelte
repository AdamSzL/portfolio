<script lang="ts">
    import WorkExperienceList from '$lib/components/experience/WorkExperienceList.svelte';
</script>

<svelte:head>
    <title>Experience</title>
</svelte:head>

<div class="flex flex-col w-full items-center gap-5 px-10 py-10">
    <p class="text-2xl">Work Experience</p>
    <WorkExperienceList />
</div>