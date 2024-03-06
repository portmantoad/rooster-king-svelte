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

  <style type="text/css">
    .noizz{
      --fps:12;
      --width:64px;
      --opacity: 1;
      position:fixed; top:-10lvh; left:-10lvh; right:-10lvh; height: 120lvh; z-index: 1000;
      background-image: url("/img/bluenoise.png");
      pointer-events: none;
      animation: calc(1s/var(--fps)*3) steps(3) infinite alternate noizz-x both,     
      calc(1s/var(--fps)*2) steps(2) infinite alternate noizz-x both,
      calc(1s/var(--fps)*5) steps(5) infinite alternate noizz-x both,
      calc(1s/var(--fps)*7) steps(7) infinite alternate noizz-x both,
      calc(1s/var(--fps)*3) steps(3) infinite alternate noizz-y both,     
      calc(1s/var(--fps)*2) steps(2) infinite alternate noizz-y both,
      calc(1s/var(--fps)*5) steps(5) infinite alternate noizz-y both,
      calc(1s/var(--fps)*7) steps(7) infinite alternate noizz-y both
      ;
      animation-composition: add;
      mix-blend-mode: color-dodge;
      background-size: var(--width) auto;
      opacity:calc(var(--opacity) / 4);
}

@keyframes noizz-x {
  0% { transform: translateX(-2.5lvh); }
  100%  { transform: translateX(2.5lvh); }
}

@keyframes noizz-y {
  0% { transform: translateY(-2.5lvh); }
  100%  { transform: translateY(2.5lvh); }
}
  </style>
<div class="noizz" style="--fps:5; --width:64px; --opacity:.5; mix-blend-mode: color-dodge;"></div>
<div class="noizz" style="--fps:7; --width:89px; --opacity:.3; mix-blend-mode: overlay;"></div>
<div class="noizz" style="--fps:9; --width:121px; --opacity:.2; mix-blend-mode: color-dodge;"></div>