<script lang="ts">
    import Paragraph from '../utilities/Paragraph.svelte';
    import ResumeRow from '$lib/components/home/ResumeRow.svelte';

    const texts = ["Hi there! I'm Adam", "A Passionate Android App Developer"]
</script>

<div class="w-full flex flex-col 2xl:flex-row">
    <div class="flex flex-1 flex-col center justify-center items-center">
        <Paragraph texts={texts} />
        <ResumeRow />
    </div>
    <div class="flex flex-1 justify-center items-start 2xl:items-center p-5">
        <img class="w-[400px] md:w-[600px] 3xl:w-[800px]" src="images/personal_photo.png" alt="personal" />
    </div>
</div>