<script lang="ts">
	import type { ProjectData } from '$lib/model/ProjectData';
	import GitHubIcon from '$lib/components/icons/GitHubIcon.svelte';

	export let projectData: ProjectData;
</script>

<div class="animate-slide-in p-6 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition">
	<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
		<h4 class="text-xl font-semibold flex items-center gap-3">
			{#if projectData.demo}
				<a href={projectData.demo} target="_blank" rel="noopener" class="text-blue-700 hover:underline">
					{projectData.title}
				</a>
			{:else if projectData.github}
				<a href={projectData.github} target="_blank" rel="noopener" class="text-blue-700 hover:underline">
					{projectData.title}
				</a>
			{:else}
				{projectData.title}
			{/if}
			{#if !projectData.finished}
				<span class="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md font-medium">In Progress</span>
			{/if}
		</h4>
		<span class="text-sm text-gray-500 mt-2 md:mt-0">{projectData.dates}</span>
	</div>
	<p class="text-gray-700 mb-3">{projectData.description}</p>

	<div class="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
		{#each projectData.tech as tech}
			<span class="px-2 py-1 bg-gray-100 rounded-md">{tech}</span>
		{/each}
	</div>

	{#if projectData.github}
		<a
		  href={projectData.github}
		  target="_blank"
		  rel="noopener"
		  class="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"
		>
			<GitHubIcon link={projectData.github} />
			View on GitHub →
		</a>
	{/if}
</div>
