<script type="text/javascript">
      import { isMuted, mediaPaused } from '$lib/stores.js';

      export let src;
      export let volume = 1;
      export let muted = false;

      export let audioRef;
      export let duration;
      export let buffered;
      export let played;
      export let seekable;
      export let seeking;
      export let ended;
      export let readyState;
      export let currentTime;
      export let playbackRate;

      let combinedMutedState = muted;

      $: {
            combinedMutedState = ($isMuted || !$mediaPaused || muted) ? true : false;

            if (!combinedMutedState) {
                  audioRef && audioRef.play();
            }
      }
</script>


<audio 
      bind:this={audioRef} 
      class="autoplay" 
      hidden 
      bind:volume={volume} 
      bind:muted={combinedMutedState} 
      bind:duration
      bind:buffered
      bind:played
      bind:seekable
      bind:seeking
      bind:ended
      bind:readyState
      bind:currentTime
      bind:playbackRate
      autoplay 
      loop
>
        <source src={`${src}.opus`} type="audio/ogg; codecs=opus" />
        <!-- <source src={`${src}.ogg`} type="audio/ogg; codecs=vorbis" /> -->
        <source src={`${src}.m4a`} type="audio/mp4" />
        <source src={`${src}.mp3`} type="audio/mpeg" />
</audio>