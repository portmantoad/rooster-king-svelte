<script>

if ('IntersectionObserver' in window) {
  let textblocks = document.querySelectorAll('.textblock');
  let observerOptions = {
      rootMargin: '0px',
      threshold: 0.5
  }
  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.classList.remove('hidden');
          }
      });
  };

  let observer = new IntersectionObserver(observerCallback, observerOptions);

  textblocks.forEach((i) => {
      i.classList.add('hidden');
      if (i) {
          observer.observe(i);
      }
  });
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:ital@1&display=swap');    

    body,html{ 
      padding:0; 
      margin:0; 
      height: 100%;
      overflow: hidden;
      --line-height: 1.5;
      line-height: var(--line-height);
    }

    html {
      box-sizing: border-box !important;
      font-size: max(calc(13px * var(--line-height)), calc((9px + .6vw) * var(--line-height)));
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }

    body{
      font-size: calc(1rem / var(--line-height));
    }

    img{
      max-width: 100%;
      height: auto;
      justify-self: stretch;
    }

    .textblock{
      font-family: 'IBM Plex Sans Condensed', sans-serif;
      font-style: italic;
      font-size: max(13px, calc(9px + .6vw));
      display: flex;
      flex-direction: column;
      align-items: start;
      margin: auto;
      grid-column: 1 / 15;
    }
    .textblock span{
      padding: .5em;
      margin-bottom: 2px;
      position: relative;
      z-index: 1000;
    }

    .textblock span.indented{
      transform: translateX(2em);
    }

    .textblock span.spacer{
      visibility: hidden;
    }
    .textblock span.spacer:before{
      content: " ";
    }


/*logic for fading in the text */
/*--------------------------------------*/

    .textblock.hidden{
      filter: blur(2px);
      opacity:0;
      
    }
    .textblock.hidden span{
      transform: translateX(.25em);
      
    }

    .textblock.hidden span.indented{
      transform: translateX(2em);
      opacity:0;
    }

    .textblock:not(.hidden){
      transition: opacity 600ms ease-in, filter 1000ms ease-out;
      opacity:1;
      filter: blur(0px);
    }

    .textblock:not(.hidden) span{
      transition: opacity 800ms ease-in, transform 1400ms ease-out;
      transform: translateX(0);
    }

    .textblock:not(.hidden) span.indented{
      transform: translateX(3em);
      opacity:1;
    }

/*--------------------------------------*/

@media only screen and (max-width: 600px) {
  .textblock{
    grid-column: 2 / 14 !important;
  }
}


.stroked:before{
  content:"";
  display: block;
  position: absolute;
  top:0; left:0; bottom: 0; right:0;
  border: 9px solid #fff;
  border-image: url('/img/strokes/555.png') 20 18 fill;
  border-image-outset: 2.5 1;
  background-color: initial !important;
  z-index: -1;
  /*filter: invert();*/
}

.stroked.small-1:before{   border-image-source: url('/img/strokes/80.png');}
.stroked.small-2:before{   border-image-source: url('/img/strokes/98.png');}
.stroked.small-3:before{   border-image-source: url('/img/strokes/115.png');}
.stroked.small-4:before{   border-image-source: url('/img/strokes/139.png');}
.stroked.small-5:before{   border-image-source: url('/img/strokes/164.png');}
.stroked.small-6:before{   border-image-source: url('/img/strokes/205.png');}
.stroked.small-7:before{   border-image-source: url('/img/strokes/257.png');}
.stroked.small-8:before{   border-image-source: url('/img/strokes/260.png');}
.stroked.small-9:before{   border-image-source: url('/img/strokes/265.png');}
.stroked.small-10:before{  border-image-source: url('/img/strokes/266.png');}
.stroked.small-11:before{  border-image-source: url('/img/strokes/289.png');}
.stroked.small-12:before{  border-image-source: url('/img/strokes/303.png');}
.stroked.small-13:before{  border-image-source: url('/img/strokes/317.png');}
.stroked.small-14:before{  border-image-source: url('/img/strokes/329.png');}
.stroked.small-15:before{  border-image-source: url('/img/strokes/375.png');}
.stroked.medium-1:before{  border-image-source: url('/img/strokes/377.png');}
.stroked.medium-2:before{  border-image-source: url('/img/strokes/386.png');}
.stroked.medium-3:before{  border-image-source: url('/img/strokes/400.png');}
.stroked.medium-4:before{  border-image-source: url('/img/strokes/442.png');}
.stroked.medium-5:before{  border-image-source: url('/img/strokes/461.png');}
.stroked.medium-6:before{  border-image-source: url('/img/strokes/492.png');}
.stroked.medium-7:before{  border-image-source: url('/img/strokes/501.png');}
.stroked.medium-8:before{  border-image-source: url('/img/strokes/530.png');}
.stroked.medium-9:before{  border-image-source: url('/img/strokes/545.png');}
.stroked.medium-10:before{ border-image-source: url('/img/strokes/555.png');}
.stroked.medium-11:before{ border-image-source: url('/img/strokes/578.png');}
.stroked.medium-12:before{ border-image-source: url('/img/strokes/632.png');}
.stroked.medium-13:before{ border-image-source: url('/img/strokes/675.png');}
.stroked.medium-14:before{ border-image-source: url('/img/strokes/725.png');}
.stroked.medium-15:before{ border-image-source: url('/img/strokes/818.png');}
.stroked.large-1:before{   border-image-source: url('/img/strokes/830.png');}
.stroked.large-2:before{   border-image-source: url('/img/strokes/850.png');}
.stroked.large-3:before{   border-image-source: url('/img/strokes/860.png');}
.stroked.large-4:before{   border-image-source: url('/img/strokes/908.png');}
.stroked.large-5:before{   border-image-source: url('/img/strokes/929.png');}
.stroked.large-6:before{   border-image-source: url('/img/strokes/935.png');}
.stroked.large-7:before{   border-image-source: url('/img/strokes/958.png');}
.stroked.large-8:before{   border-image-source: url('/img/strokes/977.png');}
.stroked.large-9:before{   border-image-source: url('/img/strokes/983.png');}
.stroked.large-10:before{  border-image-source: url('/img/strokes/990.png');}
.stroked.large-11:before{  border-image-source: url('/img/strokes/1117.png');}
.stroked.large-12:before{  border-image-source: url('/img/strokes/1196.png');}
.stroked.large-13:before{  border-image-source: url('/img/strokes/1322.png');}
.stroked.large-14:before{  border-image-source: url('/img/strokes/1378.png');}
.stroked.large-15:before{  border-image-source: url('/img/strokes/1391.png');}
.stroked.large-16:before{  border-image-source: url('/img/strokes/1430.png');}
.stroked.large-17:before{  border-image-source: url('/img/strokes/1537.png');}



/*--grid-inner: repeat(12, 1fr);
--grid-max-width: 50rem;
--grid: calc((100vw - var(--grid-max-width)) / 2) var(--grid-inner) calc((100vw - var(--grid-max-width)) / 2);
--grid-gap: 0px min(2rem, 7vw);*/


.parallax-wrapper{
  position: absolute; 
  top:0; left:0; bottom:0;
  width: 100vw;
  display: grid;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  grid-auto-rows: minmax(min-content, auto);
}

.site-section {
    position: relative;
    padding: 9rem 0;
    z-index: 0;
    width: 100%;
    max-width: 100%;
    /*min-height: 38vw;*/
    grid-column: 1 / 15;
    align-items: center;
  }

.site-section:nth-of-type(1){grid-row-start: 1;}
.site-section:nth-of-type(2){grid-row-start: 2;}
.site-section:nth-of-type(3){grid-row-start: 3;}
.site-section:nth-of-type(4){grid-row-start: 4;}
.site-section:nth-of-type(5){grid-row-start: 5;}
.site-section:nth-of-type(6){grid-row-start: 6;}
.site-section:nth-of-type(7){grid-row-start: 7;}
.site-section:nth-of-type(8){grid-row-start: 8;}
.site-section:nth-of-type(9){grid-row-start: 9;}
.site-section:nth-of-type(10){grid-row-start: 10;}
.site-section:nth-of-type(11){grid-row-start: 11;}
.site-section:nth-of-type(12){grid-row-start: 12;}
.site-section:nth-of-type(13){grid-row-start: 13;}
.site-section:nth-of-type(14){grid-row-start: 14;}
.site-section:nth-of-type(15){grid-row-start: 15;}
.site-section:nth-of-type(16){grid-row-start: 16;}
.site-section:nth-of-type(17){grid-row-start: 17;}
.site-section:nth-of-type(18){grid-row-start: 18;}
.site-section:nth-of-type(19){grid-row-start: 19;}
.site-section:nth-of-type(20){grid-row-start: 20;}
.site-section:nth-of-type(21){grid-row-start: 21;}
.site-section:nth-of-type(22){grid-row-start: 22;}
.site-section:nth-of-type(23){grid-row-start: 23;}
.site-section:nth-of-type(24){grid-row-start: 24;}
.site-section:nth-of-type(25){grid-row-start: 25;}
.site-section:nth-of-type(26){grid-row-start: 26;}
.site-section:nth-of-type(27){grid-row-start: 27;}
.site-section:nth-of-type(28){grid-row-start: 28;}
.site-section:nth-of-type(29){grid-row-start: 29;}

.parallax-elem{ 
  --offset-y:0%;
  --offset-x:0%;
  --speed:-2;
  --blend: initial;
  --row: 1;
  grid-row: var(--row);
  grid-column: 1 / 15;
  position: relative;
  transform: translateX(var(--offset-x)) translateY(var(--offset-y));
  transform-origin: calc(100% - var(--scrollbar-width)) bottom;
  mix-blend-mode: var(--blend);
  z-index: calc(var(--speed) * 10000); /* accounting for decimals up to 5 places */
  min-width: 0; min-height: 0;
  overflow: hidden;
  grid-auto-rows: minmax(0, 1fr); 
}

.gridlayout{
  display: grid;
  grid-template-columns: calc((100vw - 50rem) / 2) repeat(12, 1fr) calc((100vw - 50rem) / 2); 
  gap: 0px min(2rem, 7vw); 
}
  

  html,body{overflow:hidden;}

  .parallax-wrapper {
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 8px;
    -moz-perspective-origin: 100% 50%;
    -webkit-perspective-origin: 100% 50%;
    perspective-origin: 100% 50%;
  }

  .parallax-elem{ 
    -moz-transform-origin: 100% 50%;
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    transform: translateX(calc(var(--offset-x) + 2px * var(--speed))) translateY(calc(var(--offset-y) + (0vh * var(--speed)))) translateZ(calc(var(--speed) * 1px)) scale(calc(1 + (var(--speed) * -1) / 8));
  }

.autolayout{
  --left: 1fr;
  --right: 1fr;
  --top: 1fr;
  --bottom: 1fr;
  display: grid;
  grid-template-columns: var(--left) minmax(0,auto) var(--right); 
  grid-template-rows: var(--top) minmax(0,auto) var(--bottom);
  gap:0;
}

  .autolayout > *{
    grid-column: 2 / span 1; 
    grid-row: 2 / span 1;
    margin:0;
  }
</style>

<audio controls src="/img/cherrycoke/hastings.mp3" style="float:right; position: relative; z-index: 10000;" autoplay loop></audio>

<div class="parallax-wrapper">

<div class="parallax-elem autolayout" style=" --speed: -4; --row: 1;">
      <img style="
        width:100vw; 
        height:100vh;
        object-position: 35% 50%;  
        object-fit: cover; 
         " src="/img/cherrycoke/bus.jpg" />
</div>

<div class="parallax-elem autolayout" style=" --speed: 4; --row: 1; --top:1rem; --right:1rem; --blend:darken;">
      <img style="
        width:10rem; 
        max-width: 50vw;
         " src="/img/cherrycoke/coke.gif" />
</div>

<div class="parallax-elem autolayout" style=" --speed: 2; --row: 1; --top:1.5fr; --left:2fr;">
      <img style="
        width:10rem; 
        max-width: 50vw;
            image-rendering: pixelated;
         " src="/img/cherrycoke/pizzaslice.gif" />
</div>

<div class="parallax-elem autolayout" style=" --speed: -2; --row: 1; --top:0; --left:0; --blend: hard-light;">
      <img style="
        width:min(90vh, 90vw); 
        max-width: 50vw;
         " src="/img/cherrycoke/decollage.png" />
</div>


<section class="site-section autolayout" style="padding: 0; --right:3fr; --bottom: 2fr;">
  <img src="/img/cherrycoke/reciept.png" style="height:min(80vh, calc(1445/1207 * 95vw));">
</section>


<div class="parallax-elem gridlayout" style=" --speed: -10; --row: 2;">
      <img style="
        width: 100%;
        height: 150vh;
        grid-column: 1 / 14;
        object-position: 40% 50%;
        object-fit: cover;
        " src="/img/cherrycoke/store.jpg">
</div>

<section class="site-section autolayout" style="min-height: 150vh; --left: 3fr; --top:3fr;">
  <div class="textblock">
    <span class="stroked medium-11">When I first met him, </span>
    <span class="stroked medium-11 indented">I hid myself in a stairwell and stared </span>
    <span class="stroked medium-11 indented">until he spotted me. </span>
  </div>
</section>

  <div class="parallax-elem autolayout" style=" --speed: -4; --row: 3; height: min-content; --right: 0; --blend: lighten;">
    <img style="width:45em; max-width:95vw; position: relative; margin: 0 auto; display: block;" src="/img/cherrycoke/clubhouse_masked.jpg" />
  </div>

<div class="parallax-elem" style=" --speed: -60; --row: 3; background:url('/img/cherrycoke/treea.jpg'); background-size: auto 200vh; background-repeat: repeat-x; background-position: 100% 50%;">
</div>

<section class="site-section gridlayout" style="min-height: 450vh;">
  <div class="textblock">
    <span class="stroked medium-11">He was a new transplant from a town of less than 100</span>
    <span class="stroked medium-11 indented">somewhere in Quebec, I think.</span>
    <span class="stroked medium-11">He had gotten a job as a horse handler </span>
    <span class="stroked medium-11 indented">for a circus act that was in town.</span>
  </div>
</section>

<div class="parallax-elem gridlayout" style=" --speed: -12; --row: 4; --blend: multiply">
      <img style="
        grid-column: 1 / 13;
        width:100%; 
        height:200vh;
        object-position: 35% 50%;  
        object-fit: cover; 
         " src="/img/cherrycoke/signs.jpg" />
</div>

<div class="parallax-elem gridlayout" style=" --speed: -2; --row: 4;">
      <img style="
        grid-column: 12 / 15;
        width:100%; 
        height:200vh;
        object-position: 35% 50%;  
        object-fit: cover; 
         " src="/img/cherrycoke/hostel.jpg" />
</div>

<section class="site-section autolayout" style="min-height: 100vh; --right:3fr; --bottom:5fr;">
  <div class="textblock">
    <span class="stroked medium-11">We decided to move into a shared room at the hostel to save money</span>
  </div>
</section>

<div class="parallax-elem autolayout" style=" --speed: -4; --row: 5 / span 2;">
      <img style="
        width:100vw; 
        height:200vh;
        object-position: 40% 50%;  
        object-fit: cover; 
         " src="/img/cherrycoke/orpheum.jpg" />
</div>


<section class="site-section autolayout" style="min-height: 100vh; --right:2fr;">
  <div class="textblock">
    <span class="stroked medium-11">A few months later the circus was moving to Calgary,</span>
    <span class="stroked medium-11 indented">and he wanted to go with them.</span>
  </div>
</section>


<section class="site-section autolayout" style="min-height: 100vh; --left:2fr;">
  <div class="textblock">
    <span class="stroked medium-11">I pretended nothing was happening all the way to the end.</span>
    <span class="stroked medium-11 indented">I walked him to the bus stop </span>
    <span class="stroked medium-11 indented">and gave him a final kiss goodbye.</span>
  </div>
</section>

<div class="parallax-elem autolayout" style=" --speed: -20; --row: 7; --top:1.3fr;">
      <img style="
        width:100vw; 
        height:120vh;
        object-position: 27% 50%;  
        object-fit: cover; 
         " src="/img/cherrycoke/plane_dark.jpg" />
</div>


<section class="site-section gridlayout" style="min-height: 250vh;">
  <div class="textblock">
    <span class="stroked medium-11">In New York they had Cherry Coke Zero in every corner store</span>
    <span class="stroked medium-11 indented">and I had enough money to buy it by the case.</span>
    <span class="stroked medium-11 indented">I quickly lost my taste for it.</span>
  </div>
</section>

<div class="parallax-elem" style="--speed: -8; --row: 8; --blend:screen;">
  <video style="place-self:stretch; width:100%; height:100%; object-fit: cover; object-position: 40% top; display: block;" src="/img/cherrycoke/nightstreaks.mp4" muted autoplay loop></video>
</div>

<section class="site-section gridlayout" style="min-height: 100vh; mix-blend-mode: screen;">
  <video class="video--withcontrols" style="grid-column: 2 / 14; width:100%; margin:auto;" src="/img/train/bananabread_compressed.mp4" controls></video>
</section> 
</div>
