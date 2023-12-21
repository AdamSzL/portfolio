<script lang="ts">
    import certificates from '$lib/data/certificates.json';
	import CertificateGridItem from './CertificateGridItem.svelte';
</script>

<div class="flex flex-row flex-wrap justify-center gap-10">
    {#each certificates as certificate}
        <CertificateGridItem
            certificate={certificate}
        />
    {/each}
</div>