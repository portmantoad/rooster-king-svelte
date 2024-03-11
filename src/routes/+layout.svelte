<script>
	import '../global.css'
	import { fade } from 'svelte/transition';
	export let data;
	// import { page } from '$app/stores';

	// $: path = $page.url.pathname;

	let pages = [
		{route: '/lighthouse', name:'1. Lighthouse'},
		{route: '/train', name:'2. Sky Train'},
		{route: '/cherry-coke', name:'3. Cherry Coke'},
		{route: '/dog-bed', name:'4. Dog Bed'},
		{route: '/machine', name:'5. Machine'},
		{route: '/factory', name:'6. The Factory That Produces Factories'},
		{route: '/sky', name:'7. Sky Writing'}
	];
</script>


<style type="text/css">

nav{
	background: #000;
	color:#fff;
	position: fixed;
	top:0;
	left:0;
	font-size: 12px;
	padding:10px;
	z-index: 2000;
}

nav ul{display: inline-flex;}

nav li{ display: block;margin-right: .5rem;}

nav a{ color: #fff; text-decoration:none }

nav a.active{ text-decoration:underline; }


</style>

<nav><a href="/">ROOSTER KING</a>
	<ul>
		{#each pages as page}
	        <li><a class:active={data.pathname == page.route} href={page.route}>{page.name}</a></li>
	    {/each}
	</ul>
</nav>

{#key data.pathname}
	<div in:fade={{ duration: 900, delay: 400 }} out:fade={{ duration: 200 }}>
		<slot />
	</div>
{/key}


		

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