<script type="text/javascript">
  import { inview } from 'svelte-inview';
  import Textblock from '$lib/components/Textblock.svelte';

  let toggleVisClass = (event) => {
      const { inView, node} = event.detail;
      inView ? node.classList.add('isInView') : node.classList.remove('isInView')
  }

  let audioRef;
</script>

<div>
<style type="text/css">

    section{
      view-timeline-name: --section;
      --isInView: 0; /* this reflects the child elements opacity */
    }

    section.isInView{
      --isInView: 1;
    }

    section:not(.isInView){
      --isInView: 0;
    }

    .fade{
      --fade-duration: 500ms;
      transition: opacity var(--fade-duration);
      opacity: var(--isInView);
    }

    .intro__panorama{
      height:80vh;
      position: fixed;
      top:0; left:0; bottom:0; right:0;
      margin: auto;
      z-index: -10;
      background: #fff;
      overflow: hidden;
      --timeline:--section; 
      --filter-end: brightness(0.25) sepia(1) hue-rotate(180deg) saturate(4.5);
      --filter-range:cover 65%; 
      --filter-ease: ease-out;
      --bonus-animation: ease-out intro__panorama both;
      --bonus-animation-range: contain 0% contain 30%;
      --fade-duration: 1s;

    }

    @keyframes intro__panorama {
              0% {
                height:90vh;
                max-height: 90vh;
              }
              100% {
                height:90vh;
                max-height: 75vh;
              }
            }

    .intro__sky{
      position:absolute;
      image-rendering: pixelated; 
      bottom:0; 
      height:90vh;
      right:0;
/*      width: 100%; */
      --timeline:--section; 
      --transform-x-end:4vh;
    }


    .intro__lighthouse{
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
    }

                .intro__glitchwrap{
              min-height: max(60lvh, 50vw);
              position: relative;
              padding-bottom: 20lvh;
            }
            .intro__glitch{
              position:absolute;
              z-index: -1;
              width:80vw;
              height: calc(100% + 40vh);
              object-fit: cover;
              object-position: top left;
              right:0;
              top:-40vh;
              mix-blend-mode: multiply;
            }


            @supports (animation-range: cover) {
            .intro__glitch{
              position:fixed;
              top:70vh;
              height: 130lvh;
              --timeline: --section;
              --range: exit-crossing;
              --transform-y-end: -100%;
              }
            }

        .whalevid{
           margin-bottom: 25lvh;
        }

        .whalevid__text{
          grid-column: 2 / 7;
        }
        .whalevid__video{
          grid-column: 7 / 14; width: 100%;
        }

        @media only screen and (max-width: 600px) {
          .whalevid__text{grid-column: 2 / 14;}
          .whalevid__video{grid-column: 2 / 14; margin-top: 4rem;}
        }

   .pixelwaves{
      min-height: max(80lvh, 50vw); 
      background: url('/img/lighthouse/pixelsort_waves.png'); 
      background-size: cover;
      position: relative;
    }

    .pixelwaves__orca{
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
    }

    .pixelwaves__text{
          grid-column: 2 / 7;
          margin-top: 30lvh;
        }
        .pixelwaves__rpgisland{
          grid-column: 7 / 15; width: 100%;
        }

        @media only screen and (max-width: 600px) {
          .pixelwaves__text{grid-column: 2 / 14;}
          .pixelwaves__rpgisland{grid-column: 1 / 15; margin-top: 1rem;}
        }

    .pixelwaves__rpgisland{
      image-rendering: pixelated; 
      display: block;
      transform: translateY(calc(50%));
      --parallax-speed:1.2;
      --transform-skew-start:-2deg;
      --transform-skew-end:2deg;

    }




    .darkroom__bg{
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
    }


        .boys{min-height: 100vh; position: relative;}
        .boys__text{grid-column: 9 / 14}
        .boys__image{
          grid-column: 2 / 10; 
          width: 100%; 
          margin: auto; 
        }
        .boys__image--wrap{
          position: absolute;
          top:0; left:0; bottom:0; right:0;
          mix-blend-mode: plus-lighter;
          pointer-events: none;
          --timeline:--section;
          --transform-scale-end:1.1;
          --transform-ease: ease-out;
/*          transform-origin: left;*/
          --fade-duration: 1s;
    }


        @media only screen and (max-width: 600px) {
          .boys__image--wrap{display:block; position: relative; grid-column: 1 / 15; --transform-scale-end:1; --parallax-speed:1.2;}
          .boys__text{}
          .boys__image{grid-column: 2 / 14; margin-bottom: 4rem;}
        }
        
        .moonwhale{}
        .moonwhale__text{}
        .moonwhale__text{
          grid-column: 2 / 9;
        }
        .moonwhale__photo{
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          --parallax-speed:1.5;
          pointer-events: none;
    }
    .moonwhale__photo img{
      grid-column: 9 / 14; width: 100%;
    }

        @media only screen and (max-width: 600px) {
          .moonwhale__text{grid-column: 2 / 14;}
          .moonwhale__photo{display: none;}
        }

        .moonwhale__highway{
          position: fixed;
          top:0;
          left:0;
          bottom:0;
          right:0;
          width: 100%;
          height:100%;
          object-fit: cover;
          mix-blend-mode: screen;
          pointer-events: none;
          --fade-duration: 1000ms;
          --timeline:--section;
          --parallax-speed:1.05;
          --filter-start:brightness(0);
          --filter-range: entry;
          --filter-ease: ease-in;
    }
    


        .moonwhale__whale{
          position: fixed;
          top:100%;
          right: calc((100vw - min(120lvh, 100vw)) * .3);
          height: 120lvh;
          width: 120lvh;
          object-fit: cover;
          object-position: 30% 0%;
          mix-blend-mode: screen;
      --transform-y-start:-100lvh;
      --transform-y-end:-100lvh;
      --parallax-speed:1.1;
      pointer-events: none;
    }
      .endvid{
        position: relative;
      }
      .endvid__bg{
        position: fixed;
        top:50%;
        left:0;
        right:0; 
        transform:translateY(-50%);
        z-index: -500;
        place-self:stretch; 
        width:100%; 
        height:100lvh; 
        object-fit: cover; 
        object-position: 40% top; 
        display: block;
        --fade-duration:500ms;

    }
  </style>

</div>


  <audio controls bind:this={audioRef} src="/img/lighthouse/luna.mp3" style="float:right; position: relative; z-index: 10000;" autoplay loop></audio>

  <section use:inview="{{ rootMargin: '-50%'}}" on:inview_change={toggleVisClass} class="intro">
      <div class="intro__panorama anim fade" >
        <img class="intro__sky anim" src="/img/lighthouse/sky_dithering.png" />
        <img class="intro__lighthouse anim" src="/img/lighthouse/lighthouse_bw.png" />  
      </div>
      
      <div class="spanheight autolayout" style="--left:9fr; --bottom: 9fr; mix-blend-mode: multiply;">   
        <video style="width: calc(55lvh * 800/496); max-width: 100%;" src="/img/lighthouse/title3.mp4" autoplay muted loop></video>
      </div> 

      <div class="intro__glitchwrap" >
        <img class="intro__glitch anim fade fade--strong-inherit" src="/img/lighthouse/wavesglitch.jpg" />
      <div class="autolayout" style="--left:.6fr; margin-bottom: 25lvh;">
        <Textblock lines="{[
          {indent:0, text:`He told the seller he needed to \x22try it on for size\x22`},
          {indent:1, text:`He borrowed a boat and brought six middle school boys out to camp`},
        ]}" />
      </div>
      <div class="whalevid gridlayout">
        <Textblock class="whalevid__text" lines="{[
          {indent:0, text:`A killer whale named Luna kept swimming up to us`},
          {indent:1, text:`driving away the fish`},
          {indent:0, text:`he must have been lonely.`},
        ]}" />
      <video use:inview="{{ rootMargin: '-30%'}}" on:inview_change={toggleVisClass} class="whalevid__video anim fade" src="/img/lighthouse/luna.mp4" autoplay muted loop></video>

 </div>
     <div class="autolayout" style="--right:.6fr;">
        <Textblock lines="{[
          {indent:0, text:`I resisted pressing my hand against his thick slick skin`},
          {indent:1, text:`as a boat full of sightseers`},
          {indent:-1, text:`snapped pictures of us on disposable cameras`},
        ]}" />
      </div>
      <div class="autolayout" style="--right:.3fr;">
        <img class="anim" style="--transform-skew-start:-5deg; --transform-skew-end:5deg; --transform-rotate-end:10deg;  mix-blend-mode: color-burn;" src="/img/lighthouse/fujifilm.webp">
      </div>
    </div>

  </section>
  <section use:inview="{{ rootMargin: '-50%'}}" on:inview_change={toggleVisClass} class="pixelwaves" >
      <img class="pixelwaves__orca anim" src="/img/lighthouse/orcawhale.webp" />
      <div class="gridlayout">
        <Textblock class="pixelwaves__text" lines="{[
          {indent:0, text:`Only me and one other boy wanted to fish again the next day`},
          {indent:0, text:`The others planned to collect sticks and explore.`},
          {indent:1, text:`We left our friends in their tents `},
          {indent:1, text:`and set out towards the lighthouse.`},
        ]}" />
        <img class="pixelwaves__rpgisland anim" src="/img/lighthouse/rpg_island_trans.png" />
      </div>
  </section>
  <section use:inview="{{ rootMargin: '-30% 0% -50% 0%'}}" on:inview_change={toggleVisClass} class="darkroom">
      <div class="darkroom__bg anim fade"></div>

    <div class="autolayout" style="min-height: 100lvh; --right:2fr">
        <Textblock lines="{[
          {indent:0, text:`Our chaperone slept alone on the floor below`},
          {indent:0, text:`as we laid in sleeping bags side by side`},
          {indent:1, text:`whispering, staring into each other`},
          {indent:0, text:``},
          {indent:0, text:`I wanted to kiss him.`},
        ]}" />
    </div>

    <section use:inview="{{ rootMargin: '-50%'}}" on:inview_change={toggleVisClass} class="gridlayout boys">
      <div class="gridlayout boys__image--wrap anim fade">
        <img class="boys__image" src="/img/lighthouse/boys.jpg" />
      </div>

        <Textblock class="boys__text" lines="{[
          {indent:0, text:`When I got up to use the bathroom`},
          {indent:0, text:`I thought I saw a look flash across his face.`},
          {indent:1, text:`When I returned he was asleep.`},
        ]}" />
      
    </section>

    <section use:inview="{{ rootMargin: '-30% 0% -50% 0%'}}" on:inview_change={toggleVisClass} class="moonwhale">
      <img class="moonwhale__highway anim fade" src="/img/lighthouse/highway.gif" />

      <!-- <img class="moonwhale__whale anim fade" src="/img/lighthouse/moonwhale.jpg" /> -->
    <div class="autolayout" style="--right:5fr">
        <Textblock class="moonwhale__text" lines="{[
          {indent:0, text:`It wasn't until the ride home that I heard the family dog had been run over.`},
          {indent:0, text:`When I was in college I learned that Luna died too,`},
          {indent:1, text:`caught in the motor of some other boat.`},
        ]}" />
    </div>

    </section>
  </section>
  <section use:inview="{{ rootMargin: '-50%'}}" on:inview_change={toggleVisClass} class="endvid">
    <video class="endvid__bg fade" src="/img/lighthouse/sunset-small.mp4" autoplay muted loop></video>
    <div class="gridlayout" style="min-height:100lvh; mix-blend-mode: screen;">
      <video use:inview on:inview_change={toggleVisClass} class="video--withcontrols" style="grid-column: 2 / 14; max-width:100%; margin:auto;" src="/img/lighthouse/something_lyrics.mp4"></video>
    </div>
  </section>