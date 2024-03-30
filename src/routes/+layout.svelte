<script>
	import '../global.css'
	import { fade } from 'svelte/transition';
	export let data;
	import { isMuted } from '$lib/stores.js';
    import ScrollNag from '$lib/components/ScrollNag.svelte';
    import { onMount } from 'svelte';



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

	let clickModal = (data.pathname == '/') ? false : true;
	let clickModalDismissable = false;
	let clickModalEscalations = 0;

	let canaryPaused = true;

	$ : {
			$isMuted = canaryPaused;
	}

	$isMuted = true;

	let navVisible;

	const playVids = () => {
		document.querySelectorAll(".autoplay").forEach((vid) => {
	      vid.setAttribute("autoplay", "true");
	      vid.play();
	    });
	}

	const playVidsDelayed = (delay = 0) => setTimeout(() => {playVids()}, delay);

	onMount(async () => {
        setTimeout(() => {clickModalDismissable = true} , 900)
    });

</script>


<style type="text/css">

nav{
	background: #000;
	color:#fff;
	position: fixed;
	top:0;
	left:0;
	font-size: 12px;
	padding:.5rem;
	line-height: 1rem;
	z-index: 2000;
}

.hamburger{display: none;}

nav ul{display: inline-flex; margin:0;}

nav li{ display: block; margin-right: .5rem;}

nav a{ color: #fff; text-decoration:none }

nav a.active{ text-decoration:underline; }

@media (max-width: 980px) {

	nav ul{display: block; padding: 0;}

	nav li:first-of-type{
		border-top: 1px dotted currentColor;
		padding-top: .5rem;
	}

	nav li:last-of-type{
		border-top: 1px dotted currentColor;
		padding-top: .5rem;

	}

	nav li{margin: .5rem 0 0; width: 100%;}

	nav li a{display: block;}

	nav{
		width:12rem;
		transform: translateX(-12rem);
		transition: transform 400ms ease;
	}

	.navScrim{
		position: fixed; 
		inset: 0; 
		background: rgba(0, 0, 0); 
		opacity:0; 
		transition: opacity 600ms ease;
		z-index: 1999;
		pointer-events: none;
	}
	.navScrim.open{
		opacity:.75; 
		pointer-events: all;
	}

	nav.open{
		transform: translateX(0);
	}

	.hamburger{
		background: #000; 
		color: #fff;
		position: absolute; 
		top:0; 
		left:100%;
		width:2rem;
		height:2rem;
		display:flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	.hamburger .icon{
		display: block;
		width: 1rem;
		height:1rem;
	}

}

.muted{
	background: #000; 
	color: #fff;
	position: fixed; 
	top:0; 
	right:0;
	width:2rem;
	height:2rem;
	display:flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
}

.muted .icon{
	display: block;
	width: 1rem;
	height:1rem;
}

.clickModal{
	position:fixed;
	inset:0;
	background: rgba(0,0,0,0.95);
	z-index: 10000;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10000;
}
.clickModal__inner{
	position: absolute;
	width: 40em;
	background: #fff;
	font-family: monospace;
	padding:3rem;
	max-width: calc(100vw - 4rem);
}

</style>

<div class="navScrim" class:open={navVisible} on:click={()=>{navVisible = false; playVidsDelayed(400);}} ></div>
<nav class:open={navVisible} on:click={()=>{navVisible = !navVisible; playVidsDelayed(400);}}><a href="/">ROOSTER KING</a>
	<ul>
		{#each pages as page}
	        <li><a class:active={data.pathname == page.route} href={page.route}>{page.name}</a></li>
	    {/each}
	</ul>
	<div class="hamburger">
		<svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 -960 960 960" width="1rem"><path fill="currentColor" d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
	</div>
</nav>

<div class="muted" on:click={() => {
	$isMuted = !$isMuted
}}>
	<svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 24 24" width="1rem" fill="#fff">
	{#if $isMuted} 
		<path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
	{:else}
		<path d="M0 0h24v24H0z" fill="none"/><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
	{/if}
	</svg>
</div>

{#key data.pathname}
	<div 
		in:fade={{ duration: 0, delay: 400 }} 
		out:fade={{ duration: 200 }} 
		style="overflow-x: clip;" 
		on:click={() => {playVidsDelayed(400);}}
	>
		<slot />
	</div>
	<ScrollNag></ScrollNag>
	<video src="/img/lighthouse/title3.mp4" class="canary autoplay" loop bind:paused={canaryPaused} style="display: none;"></video>
{/key}


{#if clickModal}
<div class="clickModal" out:fade={{ duration: 200 }} on:click={() => {

	if (clickModalDismissable){
	
	    $isMuted = false;
	    clickModal = false;
	    playVids();
	} else {
		clickModalEscalations = clickModalEscalations + 1;
	}
}}>
	<div class="clickModal__inner">
		{#if clickModalEscalations === 0}
		<p>Halt! By virtue of the divine edict set forth by the Apple Corporation, you must surrender one click.</p>
		<button>Of course, my leige...</button> <button>Away, scoundrel!</button>
		{:else}
			<p>Another!</p>
			<button>fiend, is {clickModalEscalations} not enough!?</button>
		{/if}
	</div>
</div>
{/if}
