<script lang="ts">
    import certificates from '$lib/data/certificates.json';
	import CertificateGridItem from './CertificateGridItem.svelte';
</script>

<div class="grid grid-cols-3 gap-10">
    {#each certificates as certificate}
        <CertificateGridItem
            certificate={certificate}
        />
    {/each}
</div>