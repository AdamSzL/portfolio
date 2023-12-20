<script lang="ts">
    import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="container-fluid">

    <Navbar />
    
    <main>
        <slot />
    </main>

    <Footer />

</div>