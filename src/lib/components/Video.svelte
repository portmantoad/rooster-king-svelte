<script type="text/javascript">
      import { mediaPaused } from '$lib/stores.js';
      import { onDestroy } from 'svelte';
      export let src;
      export let volume = 1;
      export let muted = false;
      export let minRatio = .75;

      let videoRef;
      let duration;
      let buffered;
      let played;
      let seekable;
      let seeking;
      let ended;
      let readyState;
      let currentTime;
      let playbackRate;
      let videoWidth;
      let videoHeight;
      let paused = true;

      $: {
            $mediaPaused = paused;
      }

      onDestroy(() => {
            $mediaPaused = true;
      });
</script>

<style type="text/css">
      video{
            max-width: 100%;
            object-fit: cover;
      }

      video:not(.paused){
            position: fixed;
            top:50%;
            left:50%;
            translate: -50% -50%;
      }

      .wrap{
            position: relative;
      }

      .playbutton{
            transition: opacity 200ms;
            opacity: 0;
            position: absolute;
            top:50%;
            left:50%;
            translate: -50% -50%;
            width:4rem;
            height:4rem;
            border:1px solid rgba(255,255,255,0.2);
            border-radius: 50%;
            background: #222;
            --color:#fff;
            --arrow-height: 2rem;
            --arrow-width: 1.75rem;
            pointer-events: all;

      }

      .playbutton.visible{
            opacity: 1;
      }

      .playbutton:after{
            content:"";
            display: block;
            width: 0; 
            height: 0; 
            border-top: calc(var(--arrow-height)/2) solid transparent;
            border-bottom: calc(var(--arrow-height)/2) solid transparent;
            border-left: var(--arrow-width) solid var(--color);
            position: absolute;
            left:50%;
            top: 50%;
            translate: -40% -50%;
      }
</style>

<!-- <div class="wrap"> -->
<video 
      bind:this={videoRef} 
      bind:paused
      bind:duration
      bind:buffered
      bind:played
      bind:seekable
      bind:seeking
      bind:ended
      bind:readyState
      bind:currentTime
      bind:playbackRate
      bind:volume
      bind:muted
      bind:videoWidth
      bind:videoHeight

      class:paused={paused}
      style={
      // `aspect-ratio: ${videoWidth} / ${videoHeight};`
      `width: calc(75lvh/${videoHeight}*${videoWidth});
      height: 75lvh;
      max-height: calc(100vw * ${minRatio});
      `} 
      src={src}
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
>
      
      </video>

<!-- <div class="playbutton" class:visible={paused} on:click={() => {videoRef.play()}}></div>
<div class="playingUI">{currentTime}</div>
</div> -->