<script lang="ts">
	import { page } from '$app/stores';
	import MenuIcon from '$lib/components/icons/MenuIcon.svelte';
	import CloseIcon from '$lib/components/icons/CloseIcon.svelte';
	import SocialIcons from '$lib/components/layout/SocialIcons.svelte';

	export let className = "";
	let open = false;

	const navItems = [
		{ link: '/', text: 'Home' },
		{ link: '/projects', text: 'Projects' },
		{ link: '/education', text: 'Education' },
		{ link: '/experience', text: 'Experience' },
		{ link: '/certificates', text: 'Certificates' }
	];
</script>

<header class={`w-full h-16 bg-white fixed z-50 flex items-center gap-5 px-3 lg:px-10 py-3 border-b-1 ${className}`}>
	<!-- Mobile nav button -->
	<button
	  class="lg:hidden p-2 rounded focus:outline-none"
	  on:click={() => (open = true)}
	  aria-label="Open menu"
	>
		<MenuIcon />
	</button>

	<!-- Overlay -->
	{#if open}
		<div
		  class="fixed inset-0 bg-black/50 z-40"
		  on:click={() => (open = false)}
		/>
	{/if}

	<!-- Sliding menu -->
	<div
	  class="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden"
	  class:translate-x-0={open}
	  class:-translate-x-full={!open}
	>
		<div class="flex items-center justify-between p-4 border-b">
			<span class="text-lg font-semibold">Menu</span>
			<button on:click={() => (open = false)} aria-label="Close menu">
				<CloseIcon />
			</button>
		</div>
		<nav class="flex flex-col p-4 space-y-2">
			{#each navItems as navItem}
				<a
				  href={navItem.link}
				  class="text-sm font-medium px-3 py-2 rounded hover:bg-gray-100 transition"
				  class:bg-gray-100={(navItem.link === "/") ? $page.url.pathname === navItem.link : $page.url.pathname.includes(navItem.link)}
				  on:click={() => (open = false)}
				>
					{navItem.text}
				</a>
			{/each}
		</nav>
	</div>
	<SocialIcons />
</header>

<style>
    .translate-x-0 {
        transform: translateX(0);
    }
    .-translate-x-full {
        transform: translateX(-100%);
    }
</style>