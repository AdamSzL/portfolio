<script lang="ts">
    import CertificateDetails from '$lib/components/certificates/CertificateDetails.svelte';
	import type { Certificate } from '$lib/model/Certificate';

    export let data: Certificate;
</script>

<CertificateDetails certificate={data} />