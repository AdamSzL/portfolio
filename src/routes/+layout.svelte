<script lang="ts">
    import '../app.css';
    import Navbar from '$lib/components/layout/Navbar.svelte';
    import Footer from '$lib/components/layout/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">

    <Navbar />
    
    <main class="flex flex-1 font-opensans">
        <slot />
    </main>

    <Footer />

</div>