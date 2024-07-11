<script lang="ts">
    const options = ["Summary", "Demo"]
    let selectedOption = options[0];

    function changeOption(newOption: string) {
        selectedOption = newOption;
    }
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<div class="w-full flex flex-col">
    <div class="flex flex-row">
        {#each options as option}
            <button 
                class="flex flex-1 items-center justify-center py-3 border-b-2 {selectedOption == option && 'border-dark-blue'}"
                on:click={() => changeOption(option)}>
                {option}
            </button>
        {/each}
    </div>
</div>