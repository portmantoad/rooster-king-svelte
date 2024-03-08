<script type="text/javascript">
  import Textblock from '$lib/components/Textblock.svelte';
  import SectionWrap from '$lib/components/SectionWrap.svelte';
  import LayerWrap from '$lib/components/LayerWrap.svelte';
  import Layer from '$lib/components/Layer.svelte';
  import NextPage from '$lib/components/NextPage.svelte';

  let audioRef;
</script>

<style type="text/css">
.traintitle{
    color: #fffdc1;
    padding: 1em;
    font-size: min(.9vw, calc(13px + .1vw));
    --timeunit: 1ms;
    --strength: .1em;
    transform: skew(30deg, -8deg);
    animation: calc(var(--timeunit) * 997) steps(3) infinite traintitle_blur both, 
    calc(var(--timeunit) * 1609) steps(5) infinite traintitle_blur both, 
    calc(var(--timeunit) * 2243) ease infinite traintitle_blur both;
    animation-composition: add;
/*    letter-spacing: 0.2em; line-height: 1.25;*/
}

@keyframes traintitle_blur {
  0% { filter: blur(var(--strength)); }
  50% { filter: blur(0.01em); }
  100%  { filter: blur(var(--strength)); }
}
</style>



<audio controls bind:this={audioRef} src="/img/train/skytrain.mp3" style="position: fixed; right: 0; z-index: 10000;" autoplay loop></audio>


<SectionWrap class="intro" rootMargin="0%">
<LayerWrap toggleVis>
  <Layer minHeight="100lvh" style=" mix-blend-mode: screen;" >
    <img src="/img/train/nightbus_contrasty.jpg" style="width:100vw; height:100lvh; object-fit:cover;" />
  </Layer>

  <Layer fixed style="mix-blend-mode: screen; background: rgb(9 24 64); --fade-duration:2s;" />

  <Layer fixed class="anim" style="--parallax-speed:1.6; z-index: 5; mix-blend-mode: lighten;">
    <img src="/img/train/paintey.png" style="width:100vw; height:100lvh; object-fit:cover;" />
  </Layer>

  <Layer fixed x=".9" y=".9" class="anim" style="
    background:#000;
    mix-blend-mode: color-dodge; 
    --parallax-speed:1.3;
    --fade-duration:2s;
    z-index: 6;
  ">

  <pre class="traintitle">
  ██     ██ ██   ██ ███████ ███    ██     ██     ███████ ██ ██████  ███████ ████████      ██████  █████  ███    ███ ███████ 
  ██     ██ ██   ██ ██      ████   ██     ██     ██      ██ ██   ██ ██         ██        ██      ██   ██ ████  ████ ██      
  ██  █  ██ ███████ █████   ██ ██  ██     ██     █████   ██ ██████  ███████    ██        ██      ███████ ██ ████ ██ █████   
  ██ ███ ██ ██   ██ ██      ██  ██ ██     ██     ██      ██ ██   ██      ██    ██        ██      ██   ██ ██  ██  ██ ██      
   ███ ███  ██   ██ ███████ ██   ████     ██     ██      ██ ██   ██ ███████    ██         ██████ ██   ██ ██      ██ ███████ 
                                                                                                                            
                                                                                                                            
                      ████████  ██████      ████████ ██   ██ ███████      ██████ ██ ████████ ██    ██                       
                         ██    ██    ██        ██    ██   ██ ██          ██      ██    ██     ██  ██                        
                         ██    ██    ██        ██    ███████ █████       ██      ██    ██      ████                         
                         ██    ██    ██        ██    ██   ██ ██          ██      ██    ██       ██                          
                         ██     ██████         ██    ██   ██ ███████      ██████ ██    ██       ██                          
                                                                                                                            
                                                                                                                            
  ██     ██     ██  █████  ███████      █████  ███████ ██████   █████  ██ ██████                                            
  ██     ██     ██ ██   ██ ██          ██   ██ ██      ██   ██ ██   ██ ██ ██   ██                                           
  ██     ██  █  ██ ███████ ███████     ███████ █████   ██████  ███████ ██ ██   ██                                           
  ██     ██ ███ ██ ██   ██      ██     ██   ██ ██      ██   ██ ██   ██ ██ ██   ██                                           
  ██      ███ ███  ██   ██ ███████     ██   ██ ██      ██   ██ ██   ██ ██ ██████                                            
                                                                                                                            
                                                                                                                            
                   ██████  ███████     ████████ ██   ██ ███████      ██████  █████  ██████  ███████                         
                  ██    ██ ██             ██    ██   ██ ██          ██      ██   ██ ██   ██ ██                              
                  ██    ██ █████          ██    ███████ █████       ██      ███████ ██████  ███████                         
                  ██    ██ ██             ██    ██   ██ ██          ██      ██   ██ ██   ██      ██                         
                   ██████  ██             ██    ██   ██ ███████      ██████ ██   ██ ██   ██ ███████                         
  </pre>
  </Layer>
</LayerWrap>

  <Layer fixed class="anim" style="
    z-index: -10; 
    --filter-start: brightness(0.2) contrast(1.5);
    --filter-end: brightness(0.8) contrast(0.8);
    --range: contain;
    --ease: ease-in;
    --fade-duration:2s;
  ">
    <img src="/img/train/library_bw.jpg" style="width:100vw; height:100lvh; object-fit:cover;" />
  </Layer>

<LayerWrap>
  <Layer y="0" overlap colStart="2" colEnd="8" class="anim" style="mix-blend-mode: hard-light; --parallax-speed:1.4;">
    <img src="/img/train/potato.png" />
  </Layer>

  <Layer x=".8" y=".3" minHeight="120lvh">
    <Textblock lines="{[
      {indent:1, text:`I was 17 years old`},
      {indent:0, text:`I had a basement suite, bus pass`},
      {indent:0, text:`and $150 left for everything else each month.`},
      {indent:1, text:`I got so lonely that I hung out in the library all day.`},
      {indent:1, text:`I mostly ate potatoes.`},
    ]}" /> 
  </Layer>
</LayerWrap>
</SectionWrap>

<SectionWrap rootMargin="0%">
    <img src="/img/train/painttracks_bg.png" style="
      position: absolute;
      min-height: 100lvh;
      min-width: 100vw;
      object-fit: cover;
      aspect-ratio: 1024 / 1156;
      top:50%;
      transform: translateY(-50%);
      mix-blend-mode: screen;
    " />
    <img src="/img/train/painttracks.jpg" style="
      position: absolute;
      min-height: 100lvh;
      min-width: 100vw;
      object-fit: cover;
      aspect-ratio: 1024 / 1156;
      top:50%;
      transform: translateY(-50%);
      mix-blend-mode: multiply;
    " />

  <Layer minHeight="100lvh" class="anim" style="--parallax-speed:1.2;">
    <Textblock lines="{[
      {indent:0, text:`One day I stood by the side of the tracks`},
      {indent:1, text:`and thought of the skytrain barreling over me,`},
      {indent:0, text:`crushing my bones and spreading my gore along the rails`},
      {indent:1, text:`like raspberry jam over toast.`},
    ]}" /> 
  </Layer>
</SectionWrap>

<SectionWrap rootMargin="0%">
  <Layer fixed class="anim" style="
    --transform-y-end:-50lvh; 
    --transform-ease:ease-out;
    z-index: -10;

    --filter-end: contrast(2) brightness(.7);
    --filter-range: exit;
    --filter-ease:ease-in;
    ">
    <img src="/img/train/blurtrees.JPG" style="width: 100vw; height: 150lvh; object-fit: cover; object-position: top;" />
  </Layer>

  <Layer minHeight="110lvh" x=".8">
    <Textblock lines="{[
      {indent:0, text:`I tiptoed to the edge `},
      {indent:1, text:`just to see how close I could get.`},
    ]}" /> 
  </Layer>

  <LayerWrap toggleVis rootMargin="0%" >
    <Layer fixed colEnd="9" style="mix-blend-mode: color-burn; z-index: -10; --fade-duration: 2s;">
      <style type="text/css">
        @keyframes glitch-x {
          from { background-position-x: 0; }
          to { background-position-x: calc(100vh / (var(--x-frames) + 1) * var(--x-frames) ); } 
        }

        @keyframes glitch-y {
          from { background-position-y: 0; }
          to { background-position-y: calc(100vh / (var(--y-frames) + 1) * var(--y-frames) ); } 
        }

        .glitchy{
          --time: 4s;
          --x-frames:7;
          --y-frames:11;
          position: absolute;
          top:0; left:0; bottom:0; right: 0;
          background-image: url('/img/train/glitch.png'); 
          background-size: cover;
          animation: calc(var(--time)/13*var(--x-frames)) steps(var(--x-frames)) infinite glitch-x both, calc(var(--time)/17*var(--y-frames)) steps(var(--y-frames)) infinite glitch-y both;
        }  
      </style>
      <div class="glitchy"></div>
    </Layer>
    <Layer x=".3">
      <Textblock lines="{[
        {indent:1, text:`an alarm rang out and the train stopped cold,`},
        {indent:0, text:`I jumped back.`},
      ]}" /> 
    </Layer>

    <Layer minHeight="100lvh" x=".6" y=".8">
      <Textblock lines="{[
        {indent:1, text:`“It was a child”`},
        {indent:0, text:`an apologetic woman's voice informed us,`},
        {indent:1, text:`“she saw a bird land on the track and pushed the emergency stop button”`},
        {indent:1, text:`“We’re sorry for the inconvenience”`},
      ]}" /> 
    </Layer>
  </LayerWrap>
</SectionWrap>
<SectionWrap rootMargin="0%">

  <Layer fixed class="anim" style="z-index: -50; --transform-y-end:-100vw;">
    <img src="/img/train/sunset.jpg" style="width: 100vw; height:175lvh; object-fit:cover;" />
  </Layer>

  <Layer fixed class="anim" y="1" style="
    mix-blend-mode: multiply; 
/*    --transform-y-start: 100%;*/
/*  transform: scale(-1, 1);*/
    --transform-y-end: 100%;
    --transform-x-end: 50%;
    --range: cover 0% cover 50%;
    --ease: ease-in;
    --fade-duration: 1s;
  ">
    <img src="/img/train/gantrain.jpg" style="width:100vw" />
  </Layer>

  <Layer class="anim" style="
    mix-blend-mode: multiply; 
    --transform-scale-end: 1.2; 
    --transform-x-end:10%;
  ">
    <img src="/img/train/raven.png" style="width:100vw" />
  </Layer>

  <Layer fixed x="0" y=".8" class="anim" style="
    mix-blend-mode: multiply; 
    --transform-x-start:-20vw;
    --transform-x-end:150vw;
    --transform-y-start: 50%;
    --transform-y-end: -100%;
    --transform-scale-end: 1.75;
    --ease: ease-in;
    --fade-duration: 2s;
    --range: cover 0% cover 75%; 
  ">
    <img src="/img/train/ganbird.jpg" />
  </Layer>

  <Layer minHeight="100lvh" x=".3">
    <Textblock lines="{[
      {indent:0, text:`A tall man walked up to me,`},
      {indent:0, text:`leaned in close and spat through gritted teeth:`},
      {indent:1, text:`“I hope they fucking beat that kid.”`},
    ]}" /> 
  </Layer>
  <Layer minHeight="100lvh" x=".8">
      <Textblock lines="{[
      {indent:0, text:`I stood silently until he walked away,`},
      {indent:0, text:`until the train finally came`},
      {indent:0, text:`and rode on to my destination`},
    ]}" /> 
  </Layer>

  <Layer minHeight="100lvh" style="mix-blend-mode: plus-lighter;">
    <video class="video--withcontrols" style="width: calc(min(100vw, 100lvh/480*757*.75 - 2rem))" src="/img/train/bananabread_compressed.mp4" controls></video>
  </Layer>
  <NextPage title="3. Cherry Coke" link="/cherry-coke" />
</SectionWrap>
