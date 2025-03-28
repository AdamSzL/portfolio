<script lang="ts">
    import { SkillIconData } from '$lib/model/SkillIconData';

    export let icons: SkillIconData[]
    export let section: string
    export let text: string

</script>

<div class="flex flex-col gap-3 border-b-1 py-5 w-full">
    <div class="flex flex-row">
        {#each icons as icon}
            <img src={icon.icon} alt={icon.alt} />
        {/each}
    </div>
    <div>{text}</div>
    {#if section === 'achievements' }
        <p>
            Want to know more? Check out my player profile on
            <a class="text-blue-600 hover:underline" href="https://liquipedia.net/worldoftanks/Panzfury" target="_blank" rel="noopener">
                Liquipedia
            </a>
        </p>
    {/if}
</div>