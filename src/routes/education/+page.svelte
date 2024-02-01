<script lang="ts">
    import EducationList from '$lib/components/education/EducationList.svelte';
</script>

<svelte:head>
    <title>Education</title>
</svelte:head>

<div class="flex flex-col w-full items-center gap-5 px-10 py-10">
    <p class="text-2xl">Education</p>
    <EducationList />
</div>