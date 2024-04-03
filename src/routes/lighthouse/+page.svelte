<script type="text/javascript">
  import SectionWrap from '$lib/components/SectionWrap.svelte';
  import LayerWrap from '$lib/components/LayerWrap.svelte';
  import Layer from '$lib/components/Layer.svelte';
  import Textblock from '$lib/components/Textblock.svelte';
  import Clowntales from '$lib/components/Clowntales.svelte';
  import NextPage from '$lib/components/NextPage.svelte';
  import BgTrack from '$lib/components/BgTrack.svelte';
  import Video from '$lib/components/Video.svelte';

  
</script>

<BgTrack src="/img/lighthouse/luna" />


<SectionWrap class="intro">
      <Layer fixed class="fade" style="z-index: -10; background: black; --fade-duration: 1s;">
        <div class="intro__panorama anim" style="
          width: 100vw;
          background: #fff;
          overflow: hidden;
          height: 90lvh;
          position: relative;
          
          --timeline:--section;
          --filter-end: brightness(0.25) sepia(1) hue-rotate(180deg) saturate(4.5);
          --filter-range:cover 65%; 
          --filter-ease: ease-out;
          --bonus-animation: ease-out intro__panorama both;
          --bonus-animation-range: contain 0% contain 30%;
        ">
          <style type="text/css">
            @keyframes intro__panorama {
              0% {
                max-height: calc(100svh - 4rem);
              }
              100% {
                max-height: 75lvh;
              }
            }
          </style>
          <img class="intro__sky anim" src="/img/lighthouse/sky_dithering.png" style="
            position:absolute;
            image-rendering: pixelated; 
            bottom:0; 
            height:90lvh;
            right:0;
            --timeline:--section;
            --transform-x-end:4lvh;
          " />
          <img class="intro__lighthouse anim" src="/img/lighthouse/lighthouse_bw.png" style="
            position:absolute;
            height: calc(50lvh + 20vw);
            width: auto;
            max-width: calc(100vw + 5lvh);
            left:0;
            bottom:0;
            object-fit: cover;
            object-position: 5% 50%;
            mix-blend-mode: multiply;
            --timeline:--section;
            --transform-x-end:-5lvh;
            --transform-y-end:2lvh;
            --transform-scale-end:1.05;
          " />  
        </div>
      </Layer>
      
      <Layer minHeight='100vh' x='.8' y='.2' style="mix-blend-mode: multiply;">
        <video style="width: calc(55lvh * 800/496); max-width: 100%;" src="/img/lighthouse/title3.mp4" class="autoplay" muted autoplay playsinline loop></video>

        <!-- {@html '<video muted autoplay loop defaultmuted playsinline src="/img/lighthouse/title3.mp4" style="width: calc(55lvh * 800/496); max-width: 100%;"/>'} -->
      </Layer> 

      <LayerWrap>
        <img class="intro__glitch anim fade" src="/img/lighthouse/wavesglitch.jpg" />
        <style type="text/css">
          .intro__glitch{
            position:absolute;
            z-index: -1;
            width:80vw;
            height: calc(100% + 40lvh);
            object-fit: cover;
            object-position: top left;
            right:0;
            top:-40lvh;
            mix-blend-mode: multiply;
          }
          @supports (animation-range: cover) {
            .intro__glitch{
              position:fixed;
              top:70lvh;
              height: 130lvh;
              --timeline: --section;
              --transform-y-end: -100lvh;
            }
          }
        </style>
        <Layer minHeight="50lvh">
          <Textblock lines="{[
            {indent:0, text:`He told the seller he needed to “try it on for size”`},
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
          <Layer overlap colStart="5" colEnd="13" mColStart="1" mColEnd="14" class="anim fade" style="--parallax-speed:1.5;">
            <video class="autoplay whalevid__video" style="width: 100vw; max-width: 100%;" src="/img/lighthouse/luna.mp4" autoplay muted loop playsinline></video>
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
    background: url('/img/lighthouse/pixelsort_waves.png'); 
    background-size: cover;
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
        <Layer minHeight="80lvh" x=".2">
          <Textblock class="pixelwaves__text" lines="{[
            {indent:0, text:`Only me and one other boy wanted to fish again the next day`},
            {indent:0, text:`The others planned to collect sticks and explore.`},
            {indent:1, text:`We left our friends in their tents `},
            {indent:1, text:`and set out towards the lighthouse.`},
          ]}" />
        </Layer>
        <Layer overlap colStart="6" colEnd="14">
          <img class="pixelwaves__rpgisland anim" src="/img/lighthouse/rpg_island_trans.png" style="
            image-rendering: pixelated; 
            display: block;
            transform: translateY(calc(40lvh - 18%));
            width: 100vw;
            --parallax-speed:1.1;
            --transform-skew-start:-2deg;
            --transform-skew-end:2deg;
          " />
        </Layer>
      </LayerWrap>
  </SectionWrap>

  <SectionWrap rootMargin="-50% 0% -10% 0%" class="darkroom">
    <Layer fixed class="darkroom__bg anim fade" style="
        height: 110lvh;
        z-index: -100;
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

    <Layer minHeight="80lvh" x=".3">
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
          --transform-scale-end:1.1;
          --transform-ease: ease-out;
          --parallax-speed: 1.5;
        " />
      </Layer>
      <Layer minHeight="80lvh" x=".8">
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
          --parallax-speed:1.05;
          --filter-start:brightness(0);
          --filter-range: entry;
          --filter-ease: ease-in;
      ">
        <img src="/img/lighthouse/highway.gif" style="
          width: 100vw;
          height:100lvh;
          object-fit: cover;
        " />
      </Layer>

      <Layer minHeight="100lvh" x=".5">
          <Textblock class="moonwhale__text" lines="{[
            {indent:0, text:`It wasn't until the ride home`},
            {indent:1, text:`that I heard the family dog had been run over.`},
          ]}" />
      </Layer>

    </LayerWrap>
  </SectionWrap>

  <SectionWrap rootMargin="0%" class="endvid">
    <Layer fixed class="endvid__bg fade" style="z-index: -500;">
      <video class="autoplay" src="/img/lighthouse/sunset-small.mp4" autoplay muted loop playsinline style="
          width: 100vw;
          height:100lvh;
          object-fit: cover; 
          display: block;
      "></video>
    </Layer>

    <LayerWrap toggleVis class="moonwhale">
      <Layer fixed class="anim fade" colStart="3" style="
          mix-blend-mode: plus-lighter;
          --parallax-speed:1.2;
            --filter-start:brightness(0.5);
            --filter-end:brightness(0);
            --filter-range: exit;
            --filter-ease: ease-in;
            --fade-duration: 1s;
        ">
          <img class="anim" src="/img/lighthouse/moonwhale.jpg" style="
            width: 100vw;
          " />
      </Layer>

      <Layer minHeight="100lvh" x=".2">
          <Textblock class="moonwhale__text" lines="{[
            {indent:0, text:`When I was in college I learned that Luna died too,`},
            {indent:1, text:`caught in the motor of some other boat.`},
          ]}" />
      </Layer>
    </LayerWrap>
    

    <Layer minHeight="100lvh" style=" mix-blend-mode: plus-lighter; pointer-events: all;">
      <Video src="/img/lighthouse/something_lyrics.mp4" />

    </Layer>

    <!-- <Layer colStart="2" colEnd="13"> -->

<!-- Well, here I am. Back in this town where I grew up. Where I can walk past the house that was reclaimed by the bank after my parent's startup failed, and complain about how the new owners cut down fruit bearing trees in the driveway to make room for more parking. 

This town is kind of a shithole, but it's… pretty. To pass itself off as a quaint seaside village, the businesses along the town’s main commercial strip are forced to follow strict bylaws that mandate the materials of their signs: even international chains like subway and scotiabank are a pastiche of a mom and pop store, spelled out in driftwood.

Nobody with any sense or any options chooses to stay here but, for whatever it says about me, I somewhat frequently find myself returning. After I came back from Seattle in the summer of 2019, I spent my days writing gut-wrenchingly pathetic songs, and languidly moping around in various states of despair. 

--- -->
<!-- 
      <Clowntales md="{`# Clown talez part one

I ran out of money and had to move back in with my mom again. 

After a full week of becoming familiar with the ceiling of my room, my high school friend Zander invited me out to karaoke with his older brother, Tyrell. 

They pulled up to my house in a piece of shit car. I jammed my knees into the seat in front of me as I slid in next to a 12 pack of lucky brand beer and some discarded fast food wrappers.

_Would you like some zucchini bread?_

Tyrell was sporting a scruffy moustache, a wry grin, and what appeared to be a full-on devil costume—complete with horns, a red cape, and a pitchfork. I accepted his offering.

 > _So what have you been up to Tyrell?_

The tone in the car noticably shifted: I had unknowingly committed a grave faux pas. Zander, himself dressed as a unicorn, changed out the mixtape CD.

_Well... I've been living on a small island in a house full of witches recently. But at the end of the week I'm moving to Vancouver to help teach a clown course..._

---

We arrived at the dive bar and took a table near the back. It didn't really seem like the kind of place that you'd wear a costume to. I was told we'd probably only get to sing once, so we had to make our song selection count. I wrote down “One Headlight” by the wallflowers, Zander selected a relatively obscure showtune deep-cut I was surprised was in the catalogue. Tyrell, for his part, chose “where have all the cowboys gone?” by Paula Cole. 

 > _So clown school?_

_Yeah. It's life changing._

 > _Really? In what way._

He took a swig from his beer

_Well… you sculpt six masks out of clay, each corresponding to a different direction of the medicine wheel. But the masks are all you… like if you dumped a box of legos out onto the floor to take a look at all the pieces…_ 

**_Thank you… Max, that was really something. Is there a_** **_“Drew”_** **_out there? Drew please come to the stage_**
  
Tyrell smirked. _You better get up there_

`}" />

</Layer>
 -->

    <NextPage title="2. Train" link="/train" />
  </SectionWrap>