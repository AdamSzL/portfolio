<script lang="ts">
	import type { Certificate } from '$lib/model/Certificate';

    export let certificate: Certificate;
</script>

<div class="flex flex-col grid-item items-center justify-between rounded-sm aspect-square shadow-2xl animate-fade-in">
    <div class="flex flex-col flex-1 justify-between items-center gap-3 p-3">
        <div class="text-center">
            <a href="/certificates/{certificate.id}">
                <p class="text-2xl font-semibold">{certificate.course}</p>
            </a>
            <p>{certificate.issuedBy}</p>
        </div>
        <img width={certificate.iconWidth} src={certificate.icon} alt={certificate.issuedBy} />
        <p>{certificate.issuedOn}</p> 
    </div>
    <div class="flex flex-row bg-blue-500 w-full">
        <a class="flex flex-1 justify-center text-lg text-white bg-slate-700 hover:bg-slate-800 focus:ring-2 focus:ring-blue-300 px-3 py-1" href="/certificates/{certificate.id}">
            View Details
        </a>
        <a class="flex flex-1 justify-center text-lg text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-2 focus:ring-emerald-300 px-3 py-1" href={certificate.link} target="_blank">
            See Certificate
        </a>
    </div>
</div>

<style>
    .grid-item {
        width: clamp(300px, 30%, 400px);
    }
</style>