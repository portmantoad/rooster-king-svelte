<script type="text/javascript">
  import Textblock from '$lib/components/Textblock.svelte';
  import SectionWrap from '$lib/components/SectionWrap.svelte';
  import LayerWrap from '$lib/components/LayerWrap.svelte';
  import Layer from '$lib/components/Layer.svelte';
  import Clowntales from '$lib/components/Clowntales.svelte';
  import NextPage from '$lib/components/NextPage.svelte';
  import { isMuted } from '$lib/stores.js';
  
  let paused = true;
  let bgTrackVolume = 1;
  let trainVolume = .25;
  $ : { 
    bgTrackVolume = (!$isMuted && paused) ? 1 : 0;
    trainVolume = bgTrackVolume * .25;
  }

  let bgAudio;
  let bgAudio2;

  isMuted.subscribe((muted) => {
    if (!muted) {
      bgAudio && bgAudio.play();
      bgAudio2 && bgAudio2.play();
    }
  })
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





<audio hidden bind:this={bgAudio} src="/img/train/forwardmarch.m4a" bind:volume={bgTrackVolume} autoplay loop></audio>

<audio hidden bind:this={bgAudio2} bind:volume={trainVolume} src="/img/train/skytrain.mp3" autoplay loop></audio>


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
    --filter-end: brightness(0);
    --filter-range: contain 0% cover 100%;
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

  <Layer fixed class="anim" style="
    z-index: -50; 
    --transform-y-end:-100lvh;
    --range:cover 0% cover 60%;
    ">
    <img src="/img/train/sunset.jpg" style="width: 100vw; height:175lvh; object-fit:cover;" />
  </Layer>

<!--   <Layer fixed class="anim" y="1" style="
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
  </Layer> -->

  <Layer class="anim" style="
    mix-blend-mode: multiply; 
    --transform-scale-end: 1.2; 
    --transform-x-end:10%;
  ">
    <img src="/img/train/raven.png" style="width:100vw" />
  </Layer>

  <Layer fixed x="0" y=".8" class="anim" style="
    mix-blend-mode: multiply; 
    --transform-x-start:-100%;
    --transform-x-end:150vw;
    --transform-y-start: 50lvh;
    --transform-y-end: -150lvh;
    --transform-scale-end: 1.75;
/*    --ease: ease-in;*/
    --fade-duration: 1s;
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
    <video class="video--withcontrols" bind:paused style="width: calc(min(100vw, 100lvh/480*757*.75 - 2rem))" src="/img/train/bananabread_compressed.mp4" controls></video>
  </Layer><!-- 
  <Layer colStart="2" colEnd="13">

      <Clowntales md="{`# Clown talez part two

On the boat ride over a random woman struck up a conversation with me. She asked my age, and with a sage look told me that I was in my _Saturn Return:_ as long as I stayed on the path of destiny, everything would work itself out. 

There is, apparently, a two year wait list to get into clown school. But as luck would have it someone dropped out at the last second, leaving me with 24 hours notice to move myself to a new city without a place to stay lined up and basically no savings.

Tyrell had vaguely agreed to let me sleep on his floor for the first few weeks, but he was at a music festival for the weekend with no cell service. I got his address from a mutual friend–a condemned building that was being turned into a temporary living space as an art project– and I knocked on the door and politely asked the stranger inside to let me in.

The house next door, which was run by the same artists, was covered in rainbow murals, plants, and a series of charming whimsical sculptures. but this house was just derelict. The previous tenant had left rotting fish inside of the fridge, and there was no furniture to speak of. His roommate graciously helped me scavenge some foam and a dirt-caked sleeping bag, which I fashioned into a rock hard makeshift bed. 

I tethered to my phone's internet and burned through my data for the month in a half hour: frantically emailing everyone I knew.

---

The class took place at the #55 Elk's lodge: a run down old building with no heating and broken tiles that reminded me of the church basement where I used to go to catechism: drinking watered down grape juice and memorizing prayers in exchange for oversized chocolate bars. 

Everyone except for me and an old woman was incredibly athletic and flexible. The exercises pushed us to bend, fall to the floor, writhe, crawl. Up again, down again. I was determined not to fall behind. As we neared the end of the class I was exhausted, sweaty, and my knees were bruised.

David, our instructor--who despite his misleadingly sober voice on the phone looked about as kooky as you might expect--called me over to demonstrate a concept: I lied on my back at the center of the circle as the rest of the class creeped in close. _Good, now i want you to breathe in and out normally. In and out. Just like that. Notice the pattern that your breath makes. In. Out. In. Out._ 

_Now try interrupting that pattern._

I started breathing chaotically, keenly aware of the eyes all around me: watching my heaving stomach, and the bottom of my belly poking out of my shirt. I started to laugh.

_See, you’re doing it already_
---  

There was no other furniture in the house, and after a few days of awkwardly leaning against walls and laying on the hard ground, I took to spending my time in the McDonalds down the road, nursing on small Diet Cokes next to a Ronald McDonald statue and using their wifi to reassure my mom that everything was going great. 

I accompanied Tyrell on a scavenging expedition where we broke into an abandoned portable classroom outside of an elementary school and claimed a row of wooden cubbies for the entranceway. 

Zander was in town for one week to sell all of his life posessions before flying out to Japan to teach english. He laid out his life collection of videogames and consoles, and sold them one by one at bargain prices on craigslist to make room on his maxed out credit cards for his journey.

On his last day in town, Zander agreed to sell me one of his final possessions—an outdoor folding chair—for 5 dollars. 

I sat in that chair as a throne; eating dry cereal and french fries in the height of luxury.
`}" />

</Layer> -->
  <NextPage title="3. Cherry Coke" link="/cherry-coke" />
</SectionWrap>
