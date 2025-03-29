<script lang="ts">
    import NavbarItem from './NavbarItem.svelte';
    import navItems from '$lib/data/navItems.json';
    import { page } from '$app/stores';
    import SocialIcons from '$lib/components/layout/SocialIcons.svelte';

    export let className = "";
</script>

<header class={`w-full h-16 bg-white fixed z-50 flex items-center justify-between px-3 lg:px-10 py-3 border-b-1 ${className}`}>
    <div class="flex flex-row gap-10 items-center">
        <a class="hidden xl:inline-block" href="/">
            <p class="font-bold text-3xl">Adam Szlósarczyk</p>
        </a>
        <SocialIcons />
    </div>
    <nav>
        <ul class="flex flex-row gap-6">
            {#each navItems as navItem}
                <NavbarItem active={$page.url.pathname === navItem.link} link={navItem.link} text={navItem.text} />
            {/each}
        </ul>
    </nav>
</header>