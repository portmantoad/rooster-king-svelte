<script>
	import '../global.css'
	import { fade } from 'svelte/transition';
	export let data;
</script>

{#key data.pathname}
	<div in:fade={{ duration: 900, delay: 400 }} out:fade={{ duration: 200 }}>
		<slot />
	</div>
{/key}