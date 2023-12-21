<script lang="ts">
    import NavbarItem from './NavbarItem.svelte';
    import navItems from '$lib/data/navItems.json';
</script>

<header class="w-full flex items-center justify-between px-10 py-3 font-opensans">
    <a href="/">
        <p class="font-opensans text-3xl">Adam Szlósarczyk</p>
    </a>
    <nav>
        <ul class="flex flex-row gap-6">
            {#each navItems as navItem}
                <NavbarItem link={navItem.link} text={navItem.text} />
            {/each}
        </ul>
    </nav>
</header>