<script lang="ts">
	import projects from '$lib/data/projects.json';
	import ProjectSection from '$lib/components/projects/ProjectSection.svelte';
</script>

<section class="content-container">
	{#each projects as section}
		<ProjectSection section={section.section} description={section.description} projects={section.projects} />
	{/each}
</section>