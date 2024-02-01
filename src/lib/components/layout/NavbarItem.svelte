<script lang="ts">
    export let text: string;
    export let link: string;
    export let active: boolean;
</script>

<li>
    <a class={active ? 'underline' : ''} href={link}>{text}</a>
</li>