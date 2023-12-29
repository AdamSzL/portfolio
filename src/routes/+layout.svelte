<script lang="ts">
    import '../app.css';
    import Navbar from '$lib/components/layout/Navbar.svelte';
</script>

<div class="flex flex-col min-h-screen font-montserrat">
    <Navbar />
    
    <main class="flex flex-1 mt-16">
        <slot />
    </main>
</div>