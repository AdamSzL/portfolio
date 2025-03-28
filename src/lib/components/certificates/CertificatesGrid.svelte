<script lang="ts">
    import certificates from '$lib/data/certificates.json';
	import CertificateGridItem from './CertificateGridItem.svelte';
</script>

<div class="flex flex-row flex-wrap w-full xl:w-3/4 justify-center gap-32 py-10">
    {#each certificates as certificate}
        <CertificateGridItem
            certificate={certificate}
        />
    {/each}
</div>