<script>
	import '../global.css'
	import { fade } from 'svelte/transition';
	export let data;
	import { isMuted } from '$lib/stores.js';
	// import { page } from '$app/stores';

	// $: path = $page.url.pathname;

	let pages = [
		{route: '/lighthouse', name:'1. Lighthouse'},
		{route: '/train', name:'2. Sky Train'},
		{route: '/cherry-coke', name:'3. Cherry Coke'},
		{route: '/dog-bed', name:'4. Dog Bed'},
		{route: '/funnel', name:'5. Funnel'},
		{route: '/factory', name:'6. The Factory That Produces Factories'},
		{route: '/sky', name:'7. Sky Writing'},
		{route: '/about', name:'/// about'}
	];

	let mutedStateActivelySet = false;
	let canaryIsNotPlaying = true;

	$ : {
		if (!mutedStateActivelySet) {
			$isMuted = canaryIsNotPlaying;
		}
	}
	
</script>


<style type="text/css">

nav{
	background: #000;
	color:#fff;
	position: fixed;
	top:0;
	left:0;
	font-size: 12px;
	padding:0rem .5rem;
	line-height: 1rem;
	z-index: 2000;
}

nav ul{display: inline-flex;}

nav li{ display: block; margin-right: .5rem;}

nav a{ color: #fff; text-decoration:none }

nav a.active{ text-decoration:underline; }

.muted{
	background: #000; 
	color: #fff;
	position: fixed; 
	top:0; 
	right:0;
	padding: .5rem;
	z-index: 1000;
}

.muited svg{
	display: block;
}

</style>

<nav><a href="/">ROOSTER KING</a>
	<ul>
		{#each pages as page}
	        <li><a class:active={data.pathname == page.route} href={page.route}>{page.name}</a></li>
	    {/each}
	</ul>
</nav>

<div class="muted" on:click={() => {
	$isMuted = !$isMuted
}}>
	<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 24 24" width="1rem" fill="#fff">
	{#if $isMuted} 
		<path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
	{:else}
		<path d="M0 0h24v24H0z" fill="none"/><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
	{/if}
	</svg>
</div>

{#key data.pathname}
	<div in:fade={{ duration: 900, delay: 400 }} out:fade={{ duration: 200 }}>
		<slot {isMuted} />
	</div>
	<video src="/img/lighthouse/title3.mp4" autoplay loop class="canary" bind:paused={canaryIsNotPlaying} style="display: none;"></video>
{/key}



<div style="position: fixed; bottom:0; right:0; background:#fff; z-index: 1000;">{canaryIsNotPlaying}</div>



		

<!--   <style type="text/css">
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
      opacity:calc(var(--opacity) / 3);
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
<div class="noizz" style="--fps:5; --width:64px; --opacity:.5;"></div>
<div class="noizz" style="--fps:7; --width:89px; --opacity:.3;"></div>
<div class="noizz" style="--fps:9; --width:121px; --opacity:.2;"></div>

 -->