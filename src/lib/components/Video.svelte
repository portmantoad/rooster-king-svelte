<script type="text/javascript">
      import { mediaPaused } from '$lib/stores.js';
      export let src;
      export let volume = 1;
      export let muted = false;

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

</script>


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
      style={`
      aspect-ratio: ${videoWidth} / ${videoHeight};
      width: calc(min(100vw, 75lvh/${videoHeight}*${videoWidth}));
      max-width: 100%;

      `} 
      src={src} 
      controls>
            
      </video>