<script lang="ts">
    import NavbarItem from './NavbarItem.svelte';
    import navItems from '$lib/data/navItems.json';
    import MailIcon from '../icons/MailIcon.svelte';
    import GitHubIcon from '../icons/GitHubIcon.svelte';
	import LinkedinIcon from '../icons/LinkedinIcon.svelte';
	import FacebookIcon from '../icons/FacebookIcon.svelte';
	import GoogleIcon from '../icons/GoogleIcon.svelte';

    const mail = 'adam@szlosarczyk.dev';
    const copyMailHint = 'Click to copy the e-mail';

    function copyMail() {
        navigator.clipboard.writeText(mail);
    }
</script>

<header class="w-full h-16 bg-white fixed z-50 flex items-center justify-between px-10 py-3 border-b-1">
    <div class="flex flex-row gap-10 items-center">
        <a href="/">
            <p class="font-bold text-3xl">Adam Szlósarczyk</p>
        </a>
        <div class="flex flex-row gap-5">
            <button on:click={copyMail} title={copyMailHint}>
                <MailIcon />
            </button>
            <GitHubIcon link="https://github.com/AdamSzL" />
            <LinkedinIcon link="https://www.linkedin.com/in/adam-szl%C3%B3sarczyk-34891025b/" />
            <GoogleIcon link="https://g.dev/adamszl" />
            <FacebookIcon link="https://www.facebook.com/adam.szlosarczyk.5/" />
        </div>
    </div>
    <nav>
        <ul class="flex flex-row gap-6">
            {#each navItems as navItem}
                <NavbarItem link={navItem.link} text={navItem.text} />
            {/each}
        </ul>
    </nav>
</header>