<script>
import BackIcon from '$lib/components/icons/BackIcon.svelte';
</script>

<div class="relative w-full h-[90vh]">
	<a class="flex flex-row items-center gap-1 absolute left-10 top-10" href="/projects">
		<BackIcon />
		All Projects
	</a>

	<iframe
	  src="/mayhem-in-monsterland/index.html"
	  class="w-full h-full"
	  loading="lazy"
	  title="Mayhem in Monsterland browser game"
	/>
</div>
