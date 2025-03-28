<script lang="ts">
    import type { WorkExperienceItem } from '$lib/model/WorkExperienceItem';

    export let workExperienceItem: WorkExperienceItem;
</script>

<div class="animate-slide-in w-full flex flex-row gap-7 border-b-1 p-5">
    <a href={workExperienceItem.link} target="_blank">
        <img width="150" src={workExperienceItem.logo} alt={workExperienceItem.logo} />
    </a>
    <div class="w-full flex flex-col justify-between">
        <div class="flex flex-col">
            <p class="text-lg font-bold">{workExperienceItem.company}</p>
            <p class="text-md">{workExperienceItem.description}</p>
            <p class="mt-1">{workExperienceItem.type}</p>
        </div>
        <p class="text-right mt-5">{workExperienceItem.from} - {workExperienceItem.to}</p>
    </div>
</div>