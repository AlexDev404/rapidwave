<script lang="ts">
	import Loader from '$lib/Loader.svelte';
	import CleanSplashScreen from '$lib/CleanSplash.svelte';
</script>

<Loader timer={550} this={() => import('$lib/app/chat.svelte')}>
	<!-- <p>some slotted content</p> -->

	<p slot="fallback">
		<CleanSplashScreen/>
	</p>
</Loader>
