<script lang="ts">
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import type { ProjectData } from '$lib/model/ProjectData';

	export let section: string;
	export let description: string | undefined;
	export let projects: ProjectData[];
</script>

<div class="w-full mb-12">
	<h3 class="text-2xl font-semibold mb-6 border-b pb-2">{section}</h3>
	{#if description}
		<p class="text-gray-600 text-md mb-6">{description}</p>
	{/if}

	<div class="grid gap-6">
		{#each projects as project}
			<ProjectCard projectData={project} />
		{/each}
	</div>
</div>
