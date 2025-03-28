<script>
	import SkillsList from '$lib/components/skills/SkillsList.svelte';
    import SkillsSummary from '$lib/components/skills/SkillsSummary.svelte';

</script>
<svelte:head>
    <title>Skills</title>
</svelte:head>

<div class="outer-container animate-fade-in mb-20">
    <p class="text-3xl font-bold">My Skills</p>
    <div class="flex flex-col xl:flex-row justify-center w-full 2xl:w-5/6 px-10 gap-16">
        <SkillsSummary />
        <SkillsList />
    </div>
</div>