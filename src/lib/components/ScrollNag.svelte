<script type="text/javascript">
  import { onMount } from 'svelte';

    let scrollY;
    let scrollable = false;
    let tagVisible = false;

    $: {
      tagVisible = scrollable && scrollY === 0;
    }

  onMount(async () => {
      setTimeout(()=>{
          scrollable = (document.documentElement.scrollHeight > window.innerHeight);
    }, 3000)
  });

</script>

<style type="text/css">
      .tag{
            --color: #fff;
            --arrow-width: .4rem;
            --arrow-height: .6rem;
            --padding-x: 1.5rem;
            --padding-y: .75rem;
            --padding-gutter: .75rem;
            background: #222; 
            color:var(--color); 
            text-decoration:none; 
            padding: var(--padding-y) calc(var(--padding-x) + var(--padding-gutter) + var(--arrow-width)) var(--padding-y) var(--padding-x); 
            display:block;
            position: fixed;
            bottom:0;
            left:50%; 
            translate: -50% 0;
            transition: all 1000ms;
            z-index: 10000;
      }

      .tag:not(.visible){
            translate: -50% 100%;
            opacity: 0;
      }

      .arrow{
            --duration:750ms;
            width: .4rem; 
            height: .4rem; 
            border-bottom: 2px solid currentColor;
            border-right: 2px solid currentColor;
            rotate:45deg;
            position: absolute;
            left: auto;
            right: var(--padding-x);
            top: 50%;
            translate: 0 -50%;
            animation: calc(var(--duration)) ease infinite scrollnag both;
            }

            @keyframes scrollnag {
              0% { translate: 0 -30% }
              100%  { translate: 0 -150%; opacity:0;}
            }

</style>
<svelte:window bind:scrollY />

<div class="tag" class:visible={tagVisible}>
      Scroll 
      <div class="arrow" style="--duration:900ms"></div>
      <div class="arrow" style="--duration:800ms"></div>
      <div class="arrow" style="--duration:700ms"></div>
</div>