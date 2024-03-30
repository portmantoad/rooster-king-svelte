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

      onDestroy(() => {
            $mediaPaused = true;
      });
</script>

<style type="text/css">
      video{
            max-width: 100%;
            object-fit: cover;
      }
</style>

<video 
      bind:this={videoRef} 
      bind:paused={$mediaPaused} 
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
      style={
      // `aspect-ratio: ${videoWidth} / ${videoHeight};`
      `width: calc(75lvh/${videoHeight}*${videoWidth});
      height: 75lvh;
      max-height: calc(100vw * ${minRatio});
      `} 
      src={src} 
      controls>
            
      </video>