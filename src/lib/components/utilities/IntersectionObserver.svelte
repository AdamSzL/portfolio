<script lang="ts">
	import { onMount } from 'svelte';

	export let once = true;
    export let top = 50;

	let intersecting = false;
	let container: HTMLDivElement;

	onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const rootMargin = `0px 0px ${top}px 0px`;

			const observer = new IntersectionObserver(entries => {
				intersecting = entries[0].isIntersecting;
				if (intersecting && once) {
					observer.unobserve(container);
				}
			}, {
				rootMargin
			});

			observer.observe(container);
			return () => observer.unobserve(container);
		}

		function handler() {
			const bcr = container.getBoundingClientRect();
			intersecting = (
				(bcr.bottom) > 0 &&
				(bcr.right) > 0 &&
				(bcr.top - top) < window.innerHeight &&
				(bcr.left) < window.innerWidth
			);

			if (intersecting && once) {
				window.removeEventListener('scroll', handler);
			}
		}

		window.addEventListener('scroll', handler);
		return () => window.removeEventListener('scroll', handler);
	});
</script>

<div bind:this={container}>
	<slot {intersecting}></slot>
</div>