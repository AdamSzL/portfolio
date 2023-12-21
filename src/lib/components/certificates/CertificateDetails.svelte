<script lang="ts">
	import type { Certificate } from '$lib/model/Certificate';
	import BackIcon from '../icons/BackIcon.svelte';

    export let certificate: Certificate;
</script>

<svelte:head>
    <title>Certificates</title>
</svelte:head>

<div class="w-full flex flex-col px-10 py-10 gap-5">
    <div class="flex flex-row items-center justify-center relative">
        <a class="flex flex-row items-center gap-1 absolute left-0" href="/certificates">
            <BackIcon />
            All Certificates
        </a>
        <p class="text-2xl">
            {certificate.course}
        </p>
    </div>
    <div class="flex flex-col items-center gap-3">
        <embed width="1000" height="500" src={certificate.embedLink}>
        <a class="text-white text-lg bg-slate-700 hover:bg-slate-800 focus:ring-2 focus:ring-blue-300 px-3 py-1" href={certificate.link} target="_blank">
            Open in your browser
        </a>
    </div>
    <div class="flex flex-row text-xl">
        Issued by&nbsp;<span class="font-bold">{certificate.issuedBy}</span>&nbsp;on&nbsp;<span class="font-bold">{certificate.issuedOn}</span>
    </div>
    <div class="flex flex-row items-center gap-5">
        <p class="text-xl">Skills</p>
        <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i={certificate.skills}" alt="{certificate.skills}" />
        </a>
    </div>
</div>