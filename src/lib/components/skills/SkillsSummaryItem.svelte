<script lang="ts">
    import { SkillIconData } from '$lib/model/SkillIconData';

    export let icons: SkillIconData[]
    export let text: string

</script>

<div class="flex flex-col gap-3 border-b-1 py-5 w-full">
    <div class="flex flex-row">
        {#each icons as icon}
            <img src={icon.icon} alt={icon.alt} />
        {/each}
    </div>
    <div>{text}</div>
</div>