<script type="text/javascript">
  import SectionWrap from '$lib/components/SectionWrap.svelte';
  import LayerWrap from '$lib/components/LayerWrap.svelte';
  import Layer from '$lib/components/Layer.svelte';
  import Textblock from '$lib/components/Textblock.svelte';
  import NextPage from '$lib/components/NextPage.svelte';
  

  let audioRef;
</script>

<audio controls bind:this={audioRef} src="/img/cherrycoke/hastings.mp3" style="position: fixed; right: 0; z-index: 10000; width:7rem;" autoplay loop></audio>

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

<Layer y="1" x="0" fixed class="anim" style="
  --parallax-speed: 1.25;
  mix-blend-mode: hard-light;
">
      <img style="
        width:min(90lvh, 90vw); 
        max-width: 50vw;
         " src="/img/cherrycoke/decollage.png" />
</Layer>
<Layer x=".25" y=".5" minHeight="100lvh" style="position: relative;">
  <img src="/img/cherrycoke/reciept.png" style="height:min(80lvh, calc(1445/1207 * 95vw));">
</Layer>

<Layer y=".6" x=".7" overlap class="anim" style="
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
  --transform-y-end: -100lvh;
  z-index: -100;
">
  <img src="/img/cherrycoke/treea.jpg" style="
    width: 100vw;
    height: 200lvh;
  " />
</Layer>

<LayerWrap toggleVis rootMargin="0%">
  <Layer fixed colEnd="10" class="anim" style="
    --transform-y-end: -50lvh;
    z-index: -80;
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
  mix-blend-mode: plus-lighter; 
  --parallax-speed: 1.5;
">
    <img style="
      width:100vw; 
      max-width:100%; 
    " src="/img/cherrycoke/clubhouse_masked.jpg" />
</Layer>

<Layer minHeight="80lvh">
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
          height:200lvh;
          object-position: 35% 50%;  
          object-fit: cover; 
           " src="/img/cherrycoke/signs_crop.jpg" />
  </Layer>
<Layer minHeight="80lvh" colEnd="10">
  <Textblock lines="{[
    {indent:0, text:`We decided to move into a shared room at the hostel to save money`},
  ]}" />
</Layer>
  <Layer overlap colStart="10" class="anim" style="
    --transform-y-end: -50lvh;
  ">
      <img style="
        width:100%; 
        height:150lvh;
        object-position: 35% 50%;  
        object-fit: cover; 
         " src="/img/cherrycoke/hostel.jpg" />
  </Layer>
</LayerWrap>
</SectionWrap>
   
<SectionWrap rootMargin="0%">   
<Layer fixed class="anim" style="
  --transform-y-end: -100lvh;
  z-index: -100;

  ">    
      <img style="
        width: 100vw; 
        height: 200lvh;
        object-position: 40% 50%;  
        object-fit: cover; 
         " src="/img/cherrycoke/orpheum.jpg" />
</Layer>

<Layer minHeight="80lvh" x=".3">
  <Textblock lines="{[
    {indent:0, text:`A few months later the circus was moving to Calgary,`},
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
  <Layer fixed class="anim" style="
    mix-blend-mode: plus-lighter;
    --transform-y-start: 100vh;
    --transform-y-end: 0vh;
    --range:entry;
    --ease:ease-out;
  ">
      <img style="
        width:100vw; 
        height:100lvh;
        object-position: 27% 50%;  
        object-fit: cover; 
         " src="/img/cherrycoke/plane_dark.jpg" />
  </Layer>

<Layer minHeight="100lvh" x=".7">
  <Textblock lines="{[
    {indent:0, text:`I moved to a city that had Cherry Coke Zero in every corner store`},
    {indent:1, text:`and I had enough money to buy it by the case.`},
    {indent:1, text:`I quickly lost my taste for it.`},
  ]}" />
</Layer>

<Layer minHeight="100lvh">

</Layer>

  <NextPage title="4. Dog Bed" link="/dog-bed" />
</SectionWrap>