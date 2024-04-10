<script type="text/javascript">
    import { onMount } from 'svelte';
  import SectionWrap from '$lib/components/SectionWrap.svelte';
  import LayerWrap from '$lib/components/LayerWrap.svelte';
  import Layer from '$lib/components/Layer.svelte';
  import Textblock from '$lib/components/Textblock.svelte';
  import Clowntales from '$lib/components/Clowntales.svelte';
  import NextPage from '$lib/components/NextPage.svelte';
  import BgTrack from '$lib/components/BgTrack.svelte';

    let speed = 1;
    let noiseLevel = 0;
    let noiseVol = 0;
    let laughVol = 1;
    let noiseMuted = 0;
    let laughMuted = 1;

  let scrollY = 0;
  let mounted = false;
  let holdmusic;

  $: {
    if (mounted) {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(Math.max(scrollY / totalScroll, 0),1);
        speed = Math.max(1 - progress, 0.1);

        if (progress > 0.98) {
            noiseLevel = 0;
            noiseVol = 0;
            laughVol = 0;
        } else{
            noiseLevel = Math.min(Math.max((progress - .5) * 2, 0), 1)
            noiseVol = noiseLevel;
            laughVol = (1 - noiseVol);
        }

        noiseMuted = (noiseVol === 0) ? true : false;
        laughMuted = (laughVol === 0) ? true : false;
    }
  }

  onMount(async () => {
    holdmusic.preservesPitch = false;
    mounted = true;
  });

</script>

<svelte:window bind:scrollY />

<BgTrack bind:audioRef={holdmusic} volume={laughVol} muted={laughMuted} playbackRate={speed} src="/img/factory/holdmusic" />
<BgTrack volume={laughVol} muted={laughMuted} src="/img/factory/clown" />
<BgTrack volume={noiseVol} muted={noiseMuted} src="/img/factory/static" />


    <style type="text/css">
        .noizz{
          --fps:12;
          --width:64px;
          position:fixed; 
          top:calc(var(--width) * -1); 
          left:calc(var(--width) * -1); 
          right:calc(var(--width) * -1); 
          height: calc(var(--width) * 2 + 100lvh); 
          z-index: 100;
          background-image: url("/img/bluenoise.png");
          pointer-events: none;
          animation: 
          calc(1s/var(--fps)*2) steps(2, end) infinite alternate noizz-scalex both,
          calc(1s/var(--fps)*3) steps(3, end) infinite alternate noizz-scalex both,
          calc(1s/var(--fps)*5) steps(5, end) infinite alternate noizz-scalex both,
          calc(1s/var(--fps)*7) steps(7, end) infinite alternate noizz-scalex both,
          calc(1s/var(--fps)*2) steps(2, end) infinite alternate noizz-scaley both,
          calc(1s/var(--fps)*3) steps(3, end) infinite alternate noizz-scaley both
          ;
          animation-composition: add;
          mix-blend-mode: overlay;
          background-size: calc(var(--width)) auto;
          transform-origin: top left;
    }

    @keyframes noizz-x {
      0% { transform: translateX(calc(var(--width)/4 * -1)); }
      100%  { transform: translateX(calc(var(--width)/4)); }
    }

    @keyframes noizz-y {
      0% { transform: translateY(calc(var(--width)/4 * -1)); }
      100%  { transform: translateY(calc(var(--width)/4)); }
    }

    @keyframes noizz-scalex {
      0% { transform: scaleX(1); }
      100% { transform: scaleX(1.5); }
    }
    @keyframes noizz-scaley {
      0% { transform: scaleY(1); }
      100% { transform: scaleY(1.1); }
    }
  </style>
<!-- <div class="noizz" style={`--fps:20; --width:2rem; opacity:calc( 0.75 + 0.5 * ${noiseLevel})`}></div> -->
<!-- <div class="noizz" style={`--fps:24; --width:47px; opacity:calc( 0.5 + 0.5 * ${noiseLevel})`}></div> -->
<div class="noizz" style={`--fps:36; --width:3rem; image-rendering: pixelated; mix-blend-mode: hard-light; opacity:${noiseLevel}; ${!noiseLevel ? 'display:none;' : ''}`}></div>

<SectionWrap>
    <Layer fixed class="anim" style="
        z-index: -100;
        background: #000;
    ">
        <style type="text/css">
            @keyframes factory__cowboy {
              0% {
                max-height: 85lvh;
              }
              100% {
                max-height: 40lvh;
              }
            }
          </style>

        <div class="anim" style="
            position: relative;
            width: calc(100vw + 6lvh);
            height:85lvh;
            overflow: hidden;
/*            --transform-y-end: -15lvh;*/
            --transform-range: contain 0% cover 50%;
            --transform-x-end: -6lvh;
            --bonus-animation: ease-out factory__cowboy both;
            --bonus-animation-range: contain 0% cover 50%;
            --timeline:--section;
        ">
            <img src="/img/factory/cowboy.jpg" style="
                min-width: 100vw;
                min-height: 85lvh;
                object-fit: cover;
                position: absolute;
                top:50%;
                left:0;
                transform:translateY(-50%);
            "/>
        </div>
    </Layer>

    <Layer fixed colStart="6" colEnd="9" mColStart="4" mColEnd="11"  class="anim" style="
        mix-blend-mode: plus-lighter;
        --range: contain 0% cover 50%;
        --transform-y-end: -75lvh;
        --transform-skew-end: 45deg;
        --filter-end: brightness(0) sepia(5) saturate(5);
    ">
        <img src="/img/factory/netflix.jpg" style="
        width:100vw
        "/>
    </Layer>

    <Layer minHeight="60lvh" x=".2" y=".6">
        <Textblock lines="{[
            {indent:0, text:`By keeping my playlist on shuffle,`},
            {indent:2, text:`I reasoned,`},
            {indent:0, text:""},
            {indent:1, text:`he would be able to hack the algorithm`},
            {indent:0, text:`to present me with specific songs`},
        ]}" />
    </Layer>

    <LayerWrap>
        <Layer overlap colStart="4" colEnd="9" class="anim" style="
            --parallax-speed:1.1; 
            z-index: -10; 
            mix-blend-mode: hard-light;
        ">
            <img src="/img/factory/meatplate.jpg" style="width: 100vw;"/>
        </Layer>

        <Layer overlap colStart="3" colEnd="7" mColEnd="7" class="anim" style="
            --parallax-speed:1.6; 
            z-index: -9; 
        ">
            <div style="color: #fff; letter-spacing: .2em; font-family: monospace;">Ingredients: Farm fresh arugula lettuce, organic whipping cream, ethically sourced corn flakes, hormone free human meat</div>
        </Layer>
        <Layer minHeight="100lvh" x=".8">
            <Textblock lines="{[
                {indent:0, text:`Through the music he told me`},
                {indent:1, text:`the government, `},
                {indent:0, text:""},
                {indent:2, text:`a cabal of my old employers,`},
                {indent:0, text:`and an underground army of internet trolls`},
                {indent:0, text:""},
                {indent:3, text:`were conspiring to kill me `},
                {indent:0, text:""},
                {indent:0, text:`and make it look like a suicide`},
                {indent:0, text:""},
                {indent:1, text:`unless I did everything exactly right.`},
            ]}" />
        </Layer>
    </LayerWrap>

    <LayerWrap>
        <Layer overlap colStart="6" colEnd="14" style=" mix-blend-mode: plus-lighter;">
            <img src="/img/factory/facebook.png" style="width: 100vw;"/>
        </Layer>
        <Layer minHeight="100lvh" x=".1">
            <Textblock lines="{[
                {indent:0, text:`I joyfully gave away my prized possessions `},
                {indent:1, text:`to loved ones around me.`},
            ]}" />
        </Layer>
    </LayerWrap>


<LayerWrap toggleVis>
    <Layer overlap colEnd="10" y="0">
        <img src="/img/factory/streetend.jpg" style="width:100vw; height:140lvh; object-fit:cover;"/> 
    </Layer>

    <LayerWrap>
        <Layer overlap y="1" colStart="9" colEnd="13" mColStart="6" style=" mix-blend-mode: hard-light;">
            <img src="/img/factory/bloodegg2.jpg" style="width:100vw;"/>
        </Layer>

        <Layer overlap y="0.3" colStart="6" colEnd="10" mColStart="4" mColEnd="13" class="anim" style="--parallax-speed:1.2">
            <img src="/img/factory/bloodegg.jpg" style="width:100vw;"/>
        </Layer>

        <Layer minHeight="100lvh" x=".3">
            <Textblock lines="{[
                {indent:0, text:`I realized love is a precious thing`},
                {indent:1, text:`It is simple and good`},
                {indent:0, text:`and even if unreturned`},
                {indent:0, text:""},
                {indent:2, text:`even if unwanted`},
                {indent:1, text:`it has dignity all its own`},
            ]}" />
        </Layer>
    </LayerWrap>
    <LayerWrap>
        <Layer colEnd="11" overlap style=" mix-blend-mode: multiply; z-index: 10;">
            <img src="/img/factory/bird.jpg" style="width:100vw"/>
        </Layer>
        <Layer minHeight="50lvh" x=".8">
            <Textblock lines="{[
                {indent:1, text:`I cried over a coffee mug `},
                {indent:1, text:`with a bird on it`},
                {indent:0, text:`that I’d never quite noticed before`},
            ]}" />
        </Layer>
    </LayerWrap>
    <LayerWrap>
        <Layer colStart="5" colEnd="14">
            <img src="/img/factory/scribbles.jpg" style="width:100vw; min-height:100lvh; object-fit:cover; object-position: top;"/>
        </Layer>
        <Layer overlap colStart="0" colEnd="8" class="anim" style="--parallax-speed:1.2; mix-blend-mode: hard-light;">
            <img src="/img/factory/scribbles-2.jpg" style="width:100vw; min-height:50lvh; object-fit:cover; object-position: top;"/>
        </Layer>
        <Layer overlap x=".5" style=" mix-blend-mode:difference;">
              <audio controls >
                  <source src="/img/factory/trump.opus" type="audio/ogg; codecs=opus" />
                  <source src="/img/factory/trump.mp3" type="audio/mpeg" />
              </audio>  
        </Layer>
    </LayerWrap>
<LayerWrap toggleVis style="margin-top:-50lvh;">
    <Layer overlap colStart="2" colEnd="10" mColEnd="10" class="anim" style="
        --parallax-speed:1.25;
        mix-blend-mode: exclusion;
    ">
        <img src="/img/factory/messbed.jpg" style="width:100vw; height:80lvh; object-fit:cover;"/> 
    </Layer>
    <Layer overlap colStart="7" colEnd="14" y=".6" style=" mix-blend-mode: hard-light;">
        <img src="/img/factory/poem-1.jpg" style="width:100vw"/>
    </Layer>
    <Layer minHeight="100lvh" x=".2" y=".4" >
        <Textblock lines="{[
            {indent:0, text:`I wrote poems on my phone`},
            {indent:0, text:`with deeply encrypted meanings`},
            {indent:0, text:`and a defiant stance`},
            {indent:0, text:`for the world to see:`},
        ]}" />
    </Layer>
</LayerWrap>
</LayerWrap>
</SectionWrap>

<SectionWrap>
<Layer fixed colStart="1" colEnd="10" class="fade" style=" --fade-duration:2s; mix-blend-mode: screen;">
    <img src="/img/factory/spin.webp" style="width:100vw; height: 100lvh; object-fit:cover;"/>
</Layer>



<LayerWrap>
    <Layer overlap colStart="3" colEnd="6" mColStart="2" mColEnd="10">
        <img src="/img/factory/bunny.webp" style="width:100vw;"/>
    </Layer>
    <Layer minHeight="50lvh">
        <Textblock lines="{[
            {indent:0, text:`He began to grow furious that I kept contacting him,`},
            {indent:1, text:`and I danced in staccato rhythms to cast a spell`},
            {indent:0, text:`to keep his soul trapped in my phone.`},
        ]}" />
    </Layer>
</LayerWrap>

<LayerWrap>
<Layer overlap colStart="5" colEnd="14" style=" mix-blend-mode: screen;">
    <img src="/img/factory/Family Photos.jpg" style="width:100vw; height: 80lvh; object-fit:cover;"/>
</Layer>

<Layer overlap colStart="0" colEnd="7" class="anim" style="--parallax-speed:1.4;">
    <img src="/img/factory/poem-2.jpg" style="width:100vw; object-fit:cover;"/>
</Layer>
<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`I came to realize that I was a god,`},
        {indent:1, text:`and the shows on the television were all about me.`},
        {indent:0, text:`I painstakingly organized the books on my shelf`},
        {indent:1, text:`To represent the intuitive knowledge granted to each class in a perfect system:`},
    ]}" />
</Layer>
</LayerWrap>

<LayerWrap>
    <Layer overlap colStart="5" colEnd="10" class="anim" style="--filter-end:hue-rotate(1000deg);">
        <img src="/img/factory/bookshelf.jpg" style="width:100vw; height: 27rem;"/>
    </Layer>
    <Layer minHeight="75lvh">
        <Textblock lines="{[
            {indent:0, text:`Gods`},
            {indent:0, text:""},
            {indent:0, text:`Elite`},
            {indent:0, text:""},
            {indent:0, text:`Merchant`},
            {indent:0, text:""},
            {indent:0, text:`Proletariat`},
            {indent:0, text:""},
            {indent:0, text:`Insane`},
        ]}" />
    </Layer>
</LayerWrap>

<LayerWrap toggleVis>
    <Layer fixed style="mix-blend-mode: difference;">
        <img src="/img/factory/time.jpg" style="width:100vw; height:100lvh; object-fit:cover;"/>
    </Layer>
    <Layer minHeight="50lvh">
        <Textblock lines="{[
            {indent:0, text:`I was trapped in a time loop`},
            {indent:1, text:`where the universe repeated over and over again`},
            {indent:0, text:`and only I was aware.`},
        ]}" />
    </Layer>

    <Layer minHeight="100lvh" x=".2">
        <Textblock lines="{[
            {indent:0, text:`He begged me to let the universe end.`},
        ]}" />
    </Layer>
    <Layer minHeight="100lvh" class="anim" style="--parallax-speed:1.4; mix-blend-mode: color-burn; position:relative; z-index: 1000;">
        <img src="/img/factory/poem-3_cropped.png" style="width:min(50vw, 100vw);"/>
    </Layer>

<LayerWrap toggleVis rootMargin="100%">
    <Layer fixed class="anim" style={`
        z-index:9; 
        background: rgba(127,127,127, ${noiseLevel}); 
    `}></Layer>

    <Layer minHeight="100lvh">
        <Textblock lines="{[
            {indent:0, text:`As the world collapsed around`},
            {indent:0, text:`me, I was trapped in`},
            {indent:0, text:`an eternal`},
            {indent:0, text:`sta`},
            {indent:0, text:`t`},
            {indent:0, text:`i`},
            {indent:0, text:`c`},
        ]}" />
    </Layer>

<LayerWrap toggleVis>

    <Layer fixed style="background: rgb(255,255,255);"></Layer>


    <Layer minHeight="100lvh" style="position:relative; z-index:900; ba">
        <iframe style="aspect-ratio: 560 / 315; width: min(100vw, calc(75lvh/315*560));" src="https://www.youtube.com/embed/RAfHYaXmZEs?si=BndGvzg0KqJvyr5m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Layer>

    <NextPage title="7. Sky Writing" link="/sky" />
</LayerWrap>

</LayerWrap>
</LayerWrap>
</SectionWrap>

