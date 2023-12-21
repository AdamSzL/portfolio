<script lang="ts">
    import NavbarItem from './NavbarItem.svelte';
    import navItems from '$lib/data/navItems.json';
</script>

<header class="w-full h-16 bg-white fixed flex items-center justify-between px-10 py-3 border-b-1">
    <a href="/">
        <p class=" font-bold text-3xl">Adam Szlósarczyk</p>
    </a>
    <nav>
        <ul class="flex flex-row gap-6">
            {#each navItems as navItem}
                <NavbarItem link={navItem.link} text={navItem.text} />
            {/each}
        </ul>
    </nav>
</header>