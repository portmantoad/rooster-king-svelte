<script type="text/javascript">
  import { inview } from 'svelte-inview';

  let audioRef;
</script>


  <audio controls bind:this={audioRef} src="/img/lighthouse/luna.mp3" style="float:right; position: relative; z-index: 10000;" autoplay loop></audio>

<div>
  <style type="text/css">

    .intro__panorama{
/*      aspect-ratio: 6 / 3;*/
      height:90vh;
      position: fixed;
      top:0; left:0; bottom:0; right:0;
      margin: auto;
      z-index: -10;
      background: #fff;
      overflow: hidden;
      --timeline:--section; 
      --parallax-speed: 1.02;
      --opacity-end:0; 
      --opacity-range:exit; 
      --opacity-ease: ease-out;
      --bonus-animation: ease-out intro__panorama both;
      --bonus-animation-range: contain 0% contain 30%;
    }

    @keyframes intro__panorama {
              0% {
                max-height: 90vh;
              }
              100% {
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
      --transform-x-end:4%;
    }


    .intro__lighthouse{
      position:absolute;
      height: calc(50vh + 20vw);
      width: auto;
      max-width: 100vw;
      left:0;
      bottom:0;
      object-fit: cover;
      object-position: 5% 50%;
      mix-blend-mode: multiply;
      --timeline:--section; 
      --transform-x-end:-5%;
      --transform-y-end:2%;
      --transform-scale-end:1.05;
    }
    
  </style>

  <section class="intro">
      <div class="intro__panorama anim" style="" >
        <img class="intro__sky anim" src="/img/lighthouse/sky_dithering.png" />
        <img class="intro__lighthouse anim" src="/img/lighthouse/lighthouse_bw.png" />  
      </div>
      <div class="spanheight autolayout" style="--left:9fr; --bottom: 9fr; mix-blend-mode: multiply;">   
        <video style="width: calc(55lvh * 800/496); max-width: 100%;" src="/img/lighthouse/title3.mp4" autoplay muted loop></video>
      </div> 

      <div class="intro__glitchwrap">
          <style type="text/css">
            .intro__glitchwrap{
              min-height: max(60lvh, 50vw);
              position: relative;
              padding-bottom: 50lvh;
            }
            .intro__glitch{
              position:absolute;
              z-index: -1;
              width:80vw;
              height: 100%;
              object-fit: cover;
              object-position: top left;
              right:0;
              top:70vh;
              mix-blend-mode: multiply;

              position:fixed;
              height: 130lvh;
              --timeline: --section;
              --range: exit-crossing;
              --transform-y-end: -100%;
              --opacity-end:0;
              --opacity-range: exit-crossing 70%;
              --opacity-ease: ease-in;
              }
            }

          </style>
            <img class="intro__glitch anim" src="/img/lighthouse/wavesglitch.jpg" />
        
      <div class="autolayout" style="--left:.6fr; margin-bottom: 25lvh;">
        <div class="textblock">
          <span class="stroked medium-11"> He told the seller he needed to "try it on for size"</span>
          <span class="stroked large-4 indented">He borrowed a boat and brought six middle school boys out to camp</span>
        </div>
      </div>
      <div class="whalevid gridlayout">
      <style type="text/css">

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
      </style>

        <div class="textblock whalevid__text">
          <span class="stroked medium-13">A killer whale named Luna kept swimming up to us</span>
          <span class="stroked small-12 indented">driving away the fish</span>
          <span class="stroked small-15">he must have been lonely.</span>
        </div>
      <video class="whalevid__video" src="/img/lighthouse/luna.mp4" autoplay muted loop></video>

 </div>
     <div class="autolayout" style="--right:.6fr;">
        <div class="textblock">
          <span class="stroked medium-15">I resisted pressing my hand against his thick slick skin </span>
          <span class="stroked large-8 indented">as a boat full of sightseers snapped pictures of us on disposable cameras</span>
        </div>
      </div>
    </div>
  </section>

  <style type="text/css">
    .pixelwaves{
      min-height: max(75lvh, 50vw); 
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
    }

  </style>

  <section class="pixelwaves" >
      <img class="pixelwaves__orca anim" src="/img/lighthouse/orcawhale.gif" />
      <div class="gridlayout">
        <div class="pixelwaves__text textblock">
          <span class="stroked large-1">Only me and one other boy wanted to fish again the next day</span>
          <span class="stroked medium-12">The others planned to collect sticks and explore.</span>
          <span class="stroked medium-2 indented">We left our friends in their tents </span>
          <span class="stroked medium-6 indented">and set out towards the lighthouse.</span>
        </div>
        <img class="pixelwaves__rpgisland anim" src="/img/lighthouse/rpg_island_trans.png" />
      </div>
  </section>


 <style type="text/css">
    .darkroom{
/*      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));*/
      min-height: 100lvh;
      padding-top: 30lvh;
      margin-top: -10lvh;
      position: relative;
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
      --transform-scale-end: 1.05;
      --transform-skew-end:1deg;
      --filter-end: brightness(.15);
    }



  </style>

  <section class="darkroom">
    <div class="darkroom__bg anim"></div>

    <div class="autolayout" style="min-height: 100lvh; --right:2fr">
        <div class="textblock">
          <span class="stroked medium-9">Our chaperone slept alone on the floor below</span>
          <span class="stroked medium-7">as we laid in sleeping bags side by side</span>
          <span class="stroked medium-4 indented">whispering, staring into each other</span>
          <span class="spacer"></span>
          <span class="stroked small-13">I wanted to kiss him.</span>
        </div>
    </div>

    <div class="gridlayout boys">
      <style type="text/css">
        .boys{margin-bottom: 50lvh;}
        .boys__text{grid-column: 8 / 14}
        .boys__image{
          grid-column: 2 / 8; 
          width: 100%; 
          margin: auto; 
    }

    @supports (animation-range: cover) {
      .boys__image{
        animation: linear boys__image both;
        animation-timeline: view();
        animation-range: cover 0% cover 100%;
      }
    }

    @keyframes boys__image {
      0% {
        transform: translateY(calc(0% + 100%));
      }
      100% {
        transform: translateY(calc(0% - 100%));
      }
    }

        @media only screen and (max-width: 600px) {
          .boys__text{grid-column: 2 / 14;}
          .boys__image{grid-column: 2 / 14; margin-bottom: 4rem;}
        }
      </style>

      <img class="boys__image" src="/img/lighthouse/boys.jpg" />

      <div class="boys__text textblock">
        <span class="stroked medium-5">When I got up to use the bathroom</span>
        <span class="stroked medium-10">I thought I saw a look flash across his face.</span>
        <span class="stroked medium-3 indented">When I returned he was asleep.</span>
      </div>
      
    </div>

    <section class="moonwhale">

            <style type="text/css">
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
          
      animation: linear moonwhale__photo both;
      animation-timeline: --section;
      animation-range: cover 0% exit-crossing 50%;
    }
    .moonwhale__photo img{
      grid-column: 9 / 14; width: 100%;
    }
    @keyframes moonwhale__photo {
      0% { transform: translateY(50%); opacity: 0;}
      10%{ opacity: 1;}
      90%{ opacity: 1;}
      100% {transform: translateY(-50%); opacity: 0;}
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
      animation: linear moonwhale__highway both;
      animation-timeline: --section;
      animation-range: cover 0% cover 100%;
    }
    

    @keyframes moonwhale__highway {
      0% { opacity:0;}
      50% { opacity:1;}
      60% { opacity:1;}
      80% {opacity:0;}
      100% {opacity:0;}
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
      animation: linear moonwhale__whale both;
      animation-timeline: --section;
      animation-range: cover 0% exit-crossing 50%;
    }
    

    @keyframes moonwhale__whale {
      0% { opacity:0; transform: translateY(-100lvh);}
      50% { opacity:1;}
      80% {opacity:1;}
      100% { opacity:0; transform: translateY(-120lvh);}
    }
      </style>
      <img class="moonwhale__highway" src="/img/lighthouse/highway.gif" />
    <div class="moonwhale__photo gridlayout">
      <img src="/img/lighthouse/family_photo.jpg" />
    </div>
      <img class="moonwhale__whale" src="/img/lighthouse/moonwhale.jpg" />
    <div class="gridlayout" style="min-height: 100lvh;">
      <div class="moonwhale__text textblock">
        <span class="stroked large-9">It wasn't until the ride home that I heard the family dog had been run over.</span>
        <span class="stroked medium-14 indented">When I was in college I learned that Luna died too,</span>
        <span class="stroked medium-8 indented">caught in the motor of some other boat.</span>
      </div>
    </div>

    </section>
  </section>
  <section class="endvid">
    <style type="text/css">
      .endvid{
        position: relative;
      }
      .endvid__bg{
        position: absolute;
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

    }

    @supports (animation-range: cover) {
      .endvid__bg{
        position:fixed;
        animation: linear endvid__bg both;
        animation-timeline: --section;
        animation-range: entry-crossing 0% entry-crossing 100%;
      }
    }
    

    @keyframes endvid__bg {
      0% { opacity:0; filter: hue-rotate(-15deg) brightness(.15);}
      50% { opacity:1;}
      100% {filter: hue-rotate(0);}
    }
    </style>
    <video class="endvid__bg" src="/img/lighthouse/sunset-small.mp4" autoplay muted loop></video>
    <div class="gridlayout" style="min-height:100lvh; mix-blend-mode: screen;">
      <video use:inview
    on:inview_enter={() => audioRef.pause()}
    on:inview_leave={() => audioRef.play()} class="video--withcontrols" style="grid-column: 2 / 14; max-width:100%; margin:auto;" src="/img/lighthouse/something_lyrics.mp4"></video>
    </div>
  </section>

</div>