<script type="text/javascript">
  import { inview } from 'svelte-inview';
  import Textblock from '$lib/components/Textblock.svelte';
  import SectionWrap from '$lib/components/SectionWrap.svelte';
  import LayerWrap from '$lib/components/LayerWrap.svelte';
  import Layer from '$lib/components/Layer.svelte';

  let toggleVisClass = (event) => {
      const { inView, node} = event.detail;
      inView ? node.classList.add('isInView') : node.classList.remove('isInView')
  }

  let audioRef;
</script>

<div>
<style type="text/css">
    .fade{
      --fade-duration: 500ms;
      transition: opacity var(--fade-duration);
      opacity: var(--isInView);
    }
  </style>

</div>


  <audio controls bind:this={audioRef} src="/img/lighthouse/luna.mp3" style="position: fixed; right: 0; z-index: 10000;" autoplay loop></audio>

<SectionWrap class="intro">
      <Layer fixed class="intro__panorama anim fade" style="
        background: #fff;
        overflow: hidden;
        height: 90vh;
        z-index: -10;

        --timeline:--section; 
        --filter-end: brightness(0.25) sepia(1) hue-rotate(180deg) saturate(4.5);
        --filter-range:cover 65%; 
        --filter-ease: ease-out;
        --bonus-animation: ease-out intro__panorama both;
        --bonus-animation-range: contain 0% contain 30%;
        --fade-duration: 1s;
      ">
        <style type="text/css">
          @keyframes intro__panorama {
            0% {
              max-height: 90vh;
            }
            100% {
              max-height: 75vh;
            }
          }
        </style>
        <img class="intro__sky anim" src="/img/lighthouse/sky_dithering.png" style="
          position:absolute;
          image-rendering: pixelated; 
          bottom:0; 
          height:90vh;
          right:0;
          --timeline:--section; 
          --transform-x-end:4vh;
        " />
        <img class="intro__lighthouse anim" src="/img/lighthouse/lighthouse_bw.png" style="
          position:absolute;
          height: calc(50vh + 20vw);
          width: auto;
          max-width: calc(100vw + 5vh);
          left:0;
          bottom:0;
          object-fit: cover;
          object-position: 5% 50%;
          mix-blend-mode: multiply;
          --timeline:--section; 
          --transform-x-end:-5vh;
          --transform-y-end:2vh;
          --transform-scale-end:1.05;
        " />  
      </Layer>
      
      <Layer minHeight='100vh' x='.8' y='.2' style="mix-blend-mode: multiply;">
        <video style="width: calc(55lvh * 800/496); max-width: 100%;" src="/img/lighthouse/title3.mp4" autoplay muted loop></video>
      </Layer> 

      <LayerWrap>
        <img class="intro__glitch anim fade" src="/img/lighthouse/wavesglitch.jpg" style="
          position:absolute;
          z-index: -1;
          width:80vw;
          height: calc(100% + 40vh);
          object-fit: cover;
          object-position: top left;
          right:0;
          top:-40vh;
          mix-blend-mode: multiply;
        " />
        <style type="text/css">
          @supports (animation-range: cover) {
            .intro__glitch{
              position:fixed;
              top:70vh;
              height: 130lvh;
              --timeline: --section;
              --transform-y-end: -100%;
            }
          }
        </style>
        <Layer minHeight="50lvh">
          <Textblock lines="{[
            {indent:0, text:`He told the seller he needed to \x22try it on for size\x22`},
            {indent:1, text:`He borrowed a boat and brought six middle school boys out to camp`},
          ]}" />
        </Layer>
        <LayerWrap toggleVis rootMargin="-30%">
          <Layer minHeight="50lvh" colStart="2" colEnd="7">
            <Textblock class="whalevid__text" lines="{[
              {indent:0, text:`A killer whale named Luna kept swimming up to us`},
              {indent:1, text:`driving away the fish`},
              {indent:0, text:`he must have been lonely.`},
            ]}" />
          </Layer>
          <Layer overlap colStart="5" colEnd="13" mColStart="1" mColEnd="14">
            <video class="whalevid__video anim fade" style="width: 100vw; max-width: 100%; --parallax-speed:1.5;" src="/img/lighthouse/luna.mp4" autoplay muted loop></video>
          </Layer>
        </LayerWrap>

        <Layer x=".7" >
          <Textblock lines="{[
            {indent:0, text:`I resisted pressing my hand against his thick slick skin`},
            {indent:1, text:`as a boat full of sightseers`},
            {indent:-1, text:`snapped pictures of us on disposable cameras`},
          ]}" />
        </Layer>

        <Layer x=".9" class="anim" style="--transform-skew-start:-5deg; --transform-skew-end:5deg; --transform-rotate-end:10deg;  mix-blend-mode: color-burn;">
          <img src="/img/lighthouse/fujifilm.webp">
        </Layer>

      </LayerWrap>
  </SectionWrap>

  <SectionWrap class="pixelwaves" style="
    min-height: max(80lvh, 50vw); 
    background: url('/img/lighthouse/pixelsort_waves.png'); 
    background-size: cover;
    position: relative;
  " >
      <img class="pixelwaves__orca anim" src="/img/lighthouse/orcawhale.webp" style="
       position: absolute;
       top: 0;
       left: 50%;
       image-rendering: pixelated; 
       display: block;
       width:max(50lvh, 40vw);
       transform: translateY(calc(-50%)) translateX(calc(-50%));
       --transform-x-start: -30%;
       --transform-x-end: 30%;
       --parallax-speed: 1.05;
       --transform-scale-end:1.25;
      " />
      <LayerWrap>
        <Layer minHeight="80vh" x=".3">
          <Textblock class="pixelwaves__text" lines="{[
            {indent:0, text:`Only me and one other boy wanted to fish again the next day`},
            {indent:0, text:`The others planned to collect sticks and explore.`},
            {indent:1, text:`We left our friends in their tents `},
            {indent:1, text:`and set out towards the lighthouse.`},
          ]}" />
        </Layer>
        <Layer overlap colStart="5" colEnd="13">
          <img class="pixelwaves__rpgisland anim" src="/img/lighthouse/rpg_island_trans.png" style="
            image-rendering: pixelated; 
            display: block;
            transform: translateY(calc(50%));
            --parallax-speed:1.2;
            --transform-skew-start:-2deg;
            --transform-skew-end:2deg;
          " />
        </Layer>
      </LayerWrap>
  </SectionWrap>

  <SectionWrap rootMargin="-30% 0% -10% 0%" class="darkroom">
      <div class="darkroom__bg anim fade" style="
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom:-10lvh;
        z-index: -1000;
        display: block;  
        background-position: bottom left;
        background-image: url('/img/lighthouse/darktexture.jpg'); 
        background-size: 100% auto;

        --timeline: --section;
        --transform-y-end: -10lvh;
        --transform-scale-end: 1.1;
        --transform-rotate-end:4deg;
        --filter-start: brightness(0);
        --filter-end: brightness(1.5);
        --filter-ease: cubic-bezier(0.100, -0.005, 0.015, 0.985);

        --fade-duration: 3s;
      " />

    <Layer minHeight="80vh" x=".3">
        <Textblock lines="{[
          {indent:0, text:`Our chaperone slept alone on the floor below`},
          {indent:0, text:`as we laid in sleeping bags side by side`},
          {indent:1, text:`whispering, staring into each other`},
          {indent:0, text:``},
          {indent:0, text:`I wanted to kiss him.`},
        ]}" />
    </Layer>

    <LayerWrap toggleVis class="boys">
      <Layer overlap colStart="1" colEnd="8">
        <img class="boys__image anim" src="/img/lighthouse/boys.jpg" style="
          mix-blend-mode: plus-lighter;
          --timeline:--section;
          --transform-scale-end:1.1;
          --transform-ease: ease-out;
          --parallax-speed: 1.5;
/*          --fade-duration: 1s;*/
        " />
      </Layer>
      <Layer minHeight="80vh" x=".8">
        <Textblock class="boys__text" lines="{[
          {indent:0, text:`When I got up to use the bathroom`},
          {indent:0, text:`I thought I saw a look flash across his face.`},
          {indent:1, text:`When I returned he was asleep.`},
        ]}" />
      </Layer>
    </LayerWrap>

    <LayerWrap toggleVis rootMargin="-30% 0% -10% 0%" class="moonwhale">
      <Layer fixed class="moonwhale__highway anim fade" style="
          mix-blend-mode: screen;
          --fade-duration: 1000ms;
          --timeline:--section;
          --parallax-speed:1.05;
          --filter-start:brightness(0);
          --filter-range: entry;
          --filter-ease: ease-in;
      ">
        <img src="/img/lighthouse/highway.gif" style="
          width: 100vw;
          height:100vh;
          object-fit: cover;
        " />
      </Layer>

      <!-- <img class="moonwhale__whale anim fade" src="/img/lighthouse/moonwhale.jpg" /> -->
      <Layer minHeight="100vh" x=".2">
          <Textblock class="moonwhale__text" lines="{[
            {indent:0, text:`It wasn't until the ride home that I heard the family dog had been run over.`},
            {indent:0, text:`When I was in college I learned that Luna died too,`},
            {indent:1, text:`caught in the motor of some other boat.`},
          ]}" />
      </Layer>

    </LayerWrap>
  </SectionWrap>

  <SectionWrap class="endvid">
    <Layer fixed class="endvid__bg fade" style="z-index: -500;">
      <video  src="/img/lighthouse/sunset-small.mp4" autoplay muted loop style="
          width: 100vw;
          height:100vh;
          object-fit: cover; 
          display: block;
      "></video>
    </Layer>
    <Layer minHeight="100vh" style="mix-blend-mode: plus-lighter; pointer-events: all;">
      <video use:inview on:inview_change={toggleVisClass} class="video--withcontrols" style="width: calc(min(100vw, 100vh/480*757) *.75)" controls src="/img/lighthouse/something_lyrics.mp4"></video>
    </Layer>
  </SectionWrap>