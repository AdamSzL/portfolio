<script>
	const files = [
		{
			label: 'Download Résumé (EN)',
			file: '/cv/resume_en.pdf'
		},
		{
			label: 'Pobierz CV (PL)',
			file: '/cv/resume_pl.pdf'
		}
	];
</script>

<div class="flex flex-col md:flex-row gap-4 mt-4">
	{#each files as { label, file }}
		<a
			href={file}
			download
			target="_blank"
			rel="noopener"
			class="inline-flex items-center gap-2 px-5 py-3 text-md lg:text-xl rounded-lg bg-dark-blue text-white font-semibold hover:bg-blue-800 transition"
		>
		<img class="w-[30px] lg:w-[40px]" src="images/download.png" alt="Download" />
			{label}
		</a>
	{/each}
</div>