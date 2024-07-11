<script lang="ts">
    import Paragraph from './Paragraph.svelte';

    const texts = ["Hi there! I'm Adam", "A Passionate Native Android Developer"]
</script>

<div class="w-full flex flex-row flex-wrap">
    <div class="flex flex-1 justify-center">
        <Paragraph texts={texts} />
    </div>
    <div class="flex flex-1 justify-center items-center p-5 min-w-fit">
        <img width="800" src="images/personal_photo.png" alt="personal" />
    </div>
</div>