<script lang="ts">
	import type { EducationItem } from '$lib/model/EducationItem';

    export let educationItem: EducationItem;
</script>

<div class="animate-slide-in w-full flex flex-row gap-7 border-b-1 p-5">
    <a href={educationItem.link} target="_blank">
        <img width="150" src={educationItem.logo} alt={educationItem.logo} />
    </a>
    <div class="w-full flex flex-col justify-between">
        <div class="flex flex-col">
            <p class="text-lg font-bold">{educationItem.name_pl}</p>
            <p class="text-lg font-bold">{educationItem.name_en}</p>
            <p class="mt-1">{educationItem.specialty}</p>
        </div>
        <p class="text-right mt-5">{educationItem.from} - {educationItem.to}</p>
    </div>
</div>