<script lang="ts">
    import '../app.css';
    import Navbar from '$lib/components/layout/Navbar.svelte';
    import MobileNav from '$lib/components/layout/MobileNav.svelte';
</script>

<div class="flex flex-col min-h-screen font-montserrat">
    <MobileNav className="lg:hidden" />
    <Navbar className="hidden lg:flex" />
    
    <main class="flex flex-1 mt-16">
        <slot />
    </main>
</div>