<script lang="ts">
    import MailIcon from '../icons/MailIcon.svelte';
    import GitHubIcon from '../icons/GitHubIcon.svelte';
	import LinkedinIcon from '../icons/LinkedinIcon.svelte';
	import FacebookIcon from '../icons/FacebookIcon.svelte';
	import GoogleIcon from '../icons/GoogleIcon.svelte';

    export let snappingEnabled: boolean;
</script>

<footer class="flex flex-row justify-between px-10 py-7 text-white bg-zinc-800 {snappingEnabled && 'snap-y snap-end'}">
    <div class="flex flex-col gap-2">
        <p class="text-2xl">Contact</p>
        <a class="flex flex-row items-center gap-2" href="mailto:adam@szlosarczyk.dev">
            <MailIcon />
            <span>adam@szlosarczyk.dev</span>
        </a>
    </div>
    <div class="flex flex-row items-center gap-5">
        <GitHubIcon link="https://github.com/AdamSzL" />
        <LinkedinIcon link="https://www.linkedin.com/in/adam-szl%C3%B3sarczyk-34891025b/" />
        <GoogleIcon link="https://g.dev/adamszl" />
        <FacebookIcon link="https://www.facebook.com/adam.szlosarczyk.5/" />
    </div>
</footer>