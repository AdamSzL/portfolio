<script>
	import SkillsList from '$lib/components/skills/SkillsList.svelte';
    import SkillsSummary from '$lib/components/skills/SkillsSummary.svelte';

</script>
<svelte:head>
    <title>Skills</title>
</svelte:head>

<div class="flex flex-col w-full items-center gap-10 px-10 py-10 animate-fade-in">
    <p class="text-2xl">My Skills</p>
    <div class="flex flex-row justify-center w-full px-5 gap-16">
        <SkillsSummary />
        <SkillsList />
    </div>
</div>