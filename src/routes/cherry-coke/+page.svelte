<script type="text/javascript">
  import SectionWrap from '$lib/components/SectionWrap.svelte';
  import LayerWrap from '$lib/components/LayerWrap.svelte';
  import Layer from '$lib/components/Layer.svelte';
  import Textblock from '$lib/components/Textblock.svelte';
  import NextPage from '$lib/components/NextPage.svelte';
  import BgTrack from '$lib/components/BgTrack.svelte';
  import { mediaPaused } from '$lib/stores.js';
  import { onDestroy } from 'svelte';
      onDestroy(() => {
            $mediaPaused = true;
      });

</script>

<BgTrack src="/img/cherrycoke/hastings" />
<BgTrack src="/img/cherrycoke/comfort"  />

<SectionWrap rootMargin="0%">

<Layer fixed class="anim" style="
  --parallax-speed: 2;
">
      <img style="
        width:100vw; 
        height:100lvh;
        object-position: 35% 50%;  
        object-fit: cover; 
         " src="/img/cherrycoke/bus.jpg" />
</Layer>
<Layer fixed x="1" y="0.2" class="anim" style="
  mix-blend-mode: darken; 
/*  --parallax-speed: 1;*/
">
      <img style="
        width:12rem; 
        max-width: 50vw;
         " src="/img/cherrycoke/coke.gif" />
</Layer>

<Layer y="1" colEnd="7" fixed class="anim" style="
/*  --parallax-speed: 1.25;*/
  --fade-duration:2s;
  mix-blend-mode: hard-light;
">
      <img style="
        width:100vw;
         " src="/img/cherrycoke/decollage.png" />
</Layer>
<Layer x=".25" y=".5" minHeight="100lvh" style="position: relative;">
  <img src="/img/cherrycoke/reciept.webp" style="height:min(80lvh, calc(1445/1207 * 95vw));">
</Layer>

<Layer y=".9" x=".7" overlap class="anim" style="
  --parallax-speed: 1.5;
">      
      <img style="
        width:10rem; 
        max-width: 50vw;
            image-rendering: pixelated;
         " src="/img/cherrycoke/pizzaslice.gif" />
</Layer>
</SectionWrap>
<SectionWrap rootMargin="0%">

<Layer fixed class="anim" style="
  --transform-y-end: -10lvh;
  z-index: -100;
">
  <img src="/img/cherrycoke/treea.jpg" style="
    width: 100vw;
    height: 110lvh;
    object-fit: cover;
  " />
</Layer>

<LayerWrap toggleVis rootMargin="0%">
  <Layer fixed colEnd="10" class="fade anim" style="
    --transform-y-end: -50lvh;
    z-index: -80;
    --fade-duration:1s;
  ">
        <img style="
          width: 100vw;
          height: 150lvh;
          object-position: 40% 50%;
          object-fit: cover;
          " src="/img/cherrycoke/store.jpg">
  </Layer>

  <Layer x=".7" y=".7" minHeight="80lvh">
    <Textblock lines="{[
      {indent:0, text:`When I first met him, `},
      {indent:1, text:`I hid myself in a stairwell and stared `},
      {indent:1, text:`until he spotted me. `},
    ]}" />
  </Layer>
</LayerWrap>

<Layer colStart="7" class="anim" style="
  --parallax-speed: 1.2;
">
    <img style="
      width:100vw; 
      max-width:100%; 
    " src="/img/cherrycoke/clubhouse.webp" />
</Layer>

<Layer minHeight="170lvh" y=".4">
  <Textblock lines="{[
    {indent:0, text:`He was a new transplant from a town of less than 100`},
    {indent:1, text:`somewhere in Quebec, I think.`},
    {indent:0, text:`He had gotten a job as a horse handler `},
    {indent:1, text:`for a circus act that was in town.`},
  ]}" />
</Layer>

<LayerWrap>
  <Layer overlap colEnd="10" class="anim" style="
    mix-blend-mode: multiply; 
    --transform-y-end: -100lvh;
  ">
      <img style="
          width:100vw; 
          max-width: 100%;
          height:calc(150lvh + 50lvh * var(--scroll-anim-toggle));
          object-position: 35% 50%;  
          object-fit: cover; 
           " src="/img/cherrycoke/signs_crop.jpg" />
  </Layer>
  <Layer overlap colStart="10" mColStart="8" class="anim" style="
    --transform-y-end: -50lvh;
  ">
      <img style="
          width:100vw; 
          max-width: 100%;
        height:calc(125lvh + 25lvh * var(--scroll-anim-toggle));
        object-position: 48% 50%;  
        object-fit: cover; 
         " src="/img/cherrycoke/hostel.jpg" />
  </Layer>
<Layer minHeight="80lvh" colEnd="10">
  <Textblock lines="{[
    {indent:0, text:`We decided to move into a shared room at the hostel to save money`},
  ]}" />
</Layer>
</LayerWrap>
</SectionWrap>
   
<SectionWrap rootMargin="0%">   
<Layer fixed class="anim fade" style="
  --transform-y-end: -20lvh;
  z-index: -100;
  --fade-duration: 1s;

  ">    
      <img style="
        width: 100vw; 
        height: calc(100lvh + 20lvh * var(--scroll-anim-toggle));
        object-position: 40% 50%;  
        object-fit: cover; 
         " src="/img/cherrycoke/orpheum.jpg" />
</Layer>

<Layer minHeight="80lvh" x=".3">
  <Textblock lines="{[
    {indent:0, text:`A few months later the circus was moving to Calgary,`},
    {indent:1, text:`he decided to go with them.`},
  ]}" />
</Layer>

<Layer minHeight="80lvh" x=".7">
  <Textblock lines="{[
    {indent:0, text:`I pretended nothing was happening all the way to the end.`},
    {indent:1, text:`I walked him to the bus stop `},
    {indent:1, text:`and gave him a final kiss goodbye.`},
  ]}" />
</Layer>

</SectionWrap>
<SectionWrap>
  <Layer fixed class="fade" style="
    mix-blend-mode: plus-lighter;
    --fade-duration:1s;
  ">
      <!-- <img style="
        width:100vw; 
        height:100lvh;
        object-position: 27% 50%;  
        object-fit: cover; 
         " src="/img/cherrycoke/plane_dark.jpg" /> -->
      <video class="autoplay" muted="muted" autoplay loop playsinline style="
        width: 100vw;
        height: 100lvh;
        object-fit: cover;
        object-position: 0 50%;
      "><source src="/img/cherrycoke/nightstreaks_silent.mp4" type="video/mp4" /></video>
  </Layer>

<Layer minHeight="100lvh" x=".7">
  <Textblock lines="{[
    {indent:0, text:`I moved to a city that had Cherry Coke Zero in every corner store`},
    {indent:1, text:`and I had enough money to buy it by the case.`},
    {indent:1, text:`I quickly lost my taste for it.`},
  ]}" />
</Layer>

<Layer minHeight="100lvh">
  <audio controls bind:paused={$mediaPaused} >
      <source src="/img/cherrycoke/seaglass.opus" type="audio/ogg; codecs=opus" />
      <source src="/img/cherrycoke/seaglass.mp3" type="audio/mpeg" />
  </audio>  
</Layer>
<!-- <Layer colStart="2" colEnd="13">

      <Clowntales md="{`# Clown talez part three

An old woman saw my craigslist plea and took pity on me: she was willing to rent out a small room in her basement to me for $550 (~150 less than market rate) + yardwork.

Clown school was only a 10 minute walk away through a large cemetery.

The ceiling was low. At first I thought this was charming, like a little hobbit house, but my back quickly began to ache. The bed felt somehow stiffer than the floor. I found that I couldn’t sleep for more than 4 hours without needing a hot shower to calm the pain. 

I was surprised by the sheer physical effort that was involved in trimming my landlady’s large hedge. Specks of green flew into my eyes and mouth, and my shoulders burned raising the electric trimmer above my head. I’d never really done anything like this before. The work I was used to involved emotional humiliation, forcing myself to care about things. Nothing so real and direct as physical pain.

When I was making six figures working at startups, I would eat out for every single meal. I was running out of money. Every day I walked by a balloon store with a help wanted sign in the window but I decided that was too on the nose, even for real life, so I took a web development job that ended up working out to less than minimum wage and cried every day instead.

I bought cans of Chef Boyardee, and packs of ramen, and slowly re-taught myself how to cook. 

I found a reddit thread about how poor people ate ketchup sandwiches, so I brought home some white bread and a bottle of ketchup. Ketchup sandwiches are a delicacy if you did not know: they taste almost exactly like a BLT. just waiting to be _elevated_ with ciabatta bread and homemade artisanal catsup.

---

_Alright everybody, wash your hands._

We all went to the sinks, and then sat in chairs around the room with our eyes closed, where we were led one by one to an unknown partner. We were told to feel this other person’s face and try to imagine what they looked like. The expressions they were making. The person I was sat with smelled like a woman (and lemon-scented dish soap), and she ran her warm hands gently over my cheeks as I felt along the ridges of her eyebrows. When we were told to open our eyes, I discovered that it was actually Lisa.

She smiled and told me that she was glad we had been paired together: she wasn’t sure if she would have been able to do the exercise with anyone else. She had no trouble identifying me, because I was the only one in the class with a beard.

We were asked to do the same exercise again, but this time with a lump of clay: feeling it, trying to discover a face that was already there. We donned our blindfolds, and the teachers went around the room, whispering a word to meditate on as we worked:

_North_

I was vibrating with the strain of holding myself up as I knelt next to the clay, huffing and puffing. After a few minutes of this they tapped me on the shoulder and led me to a table, where I was sat in a chair next to the old woman.

When I opened my eyes, the clay face looked almost nothing like I had pictured. In fact it almost looked like nothing at all. Eyebrows and a nose: the rest almost entirely smooth. I looked around the room and saw fully fleshed out faces with looks of surprise, joy, and disdain: horns, tusks, and tongues jutting out. I began to wonder if I’d done something wrong.

I wasn’t the only one who felt this way: Lisa was nearly in tears with her shredded and mangled clay in front of her. _Can I try again?_
`}" />

</Layer> -->
  <NextPage title="4. Dog Bed" link="/dog-bed" />
</SectionWrap>