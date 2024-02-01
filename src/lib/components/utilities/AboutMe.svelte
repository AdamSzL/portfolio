<script lang="ts">
    import Paragraph from './Paragraph.svelte';
    import paragraphs from '$lib/data/paragraphs.json';
    import IntersectionObserver from './IntersectionObserver.svelte';
    import type { ParagraphData } from '$lib/model/ParagraphData';

    const paragraphsData = paragraphs as ParagraphData[];
</script>

<div class="w-full flex flex-col items-center justify-center gap-5">
    {#each paragraphsData as paragraphData, index}
        <IntersectionObserver snappingEnabled={true} let:intersecting top={50}>
            <Paragraph 
                intersecting={intersecting} 
                paragraphData={paragraphData} 
                shouldIncludeScrollDownIcon={index !== paragraphsData.length - 1} />
        </IntersectionObserver>
    {/each}
</div>