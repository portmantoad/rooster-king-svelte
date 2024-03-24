<script type="text/javascript">
  import SectionWrap from '$lib/components/SectionWrap.svelte';
  import LayerWrap from '$lib/components/LayerWrap.svelte';
  import Layer from '$lib/components/Layer.svelte';
  import Textblock from '$lib/components/Textblock.svelte';
  import Clowntales from '$lib/components/Clowntales.svelte';
  import NextPage from '$lib/components/NextPage.svelte';

    let paused = true;
  let bgTrackVolume = 1;
  $ : { 
    bgTrackVolume = paused ? 1 : 0;
  }


</script>

  <audio controls src="/img/funnel/liquiddreams.mp3" bind:volume={bgTrackVolume} style="position: fixed; right: 0; z-index: 10000;" autoplay loop></audio>

<SectionWrap rootMargin="20%">

    <Layer fixed class="anim" style="--transform-y-end:-20lvh; z-index:-200;">
        <img src="/img/funnel/spaceneedle.jpg" style="width:100vw; height:120lvh; object-fit:cover; object-position: top right;" />
    </Layer>

    <Layer fixed x=".95" y=".66" class="anim" style="--parallax-speed:1.1; z-index:500;">
        <img src="/img/funnel/dollar.gif" style="width:5rem; image-rendering: pixelated; object-fit:cover; translate: -94% -46%;" />
    </Layer>

    <Layer fixed x=".4" y=".2" class="anim" style="--parallax-speed:1.1; mix-blend-mode: multiply;">
        <img src="/img/funnel/funnel.png" style="width:80lvh;" />
    </Layer>

    <Layer fixed x="1" y="1" class="fade" style="--fade-duration:1s;">
        <img src="/img/funnel/desktop.webp" style="
            width: 100vw;
            height:100lvh;
            object-fit: cover;
            object-position: 95% 66%;
        " />
    </Layer>

    <Layer minHeight="100lvh" colStart="3" colEnd="8" y=".2">
        <img src="/img/funnel/text.webp" style="width:100vw; position:relative;" />
        <!-- <Textblock lines="{[
            {indent:0, text:`We were trying to build an engine`},
            {indent:0, text:`I applied the same logic to my life.`},
            {indent:1, text:`I carefully selected every piece of furniture,`},
            {indent:0, text:`A/B tested my tinder sales funnel,`},
            {indent:1, text:`and waited for my life to begin`},
        ]}" /> -->
    </Layer>

    <Layer minHeight="50lvh" x=".75">
        <Textblock lines="{[
            {indent:1, text:`We saw a movie about a pair of arms dealers`},
            {indent:0, text:`He told me that had been his childhood dream`},
            {indent:0, text:`I told him I would sell guns with him`},
            {indent:1, text:`if he asked me to`},
        ]}" />
    </Layer>

</SectionWrap>

<SectionWrap style="padding-bottom: 50lvh;">
    <Layer fixed class="anim" style="--transform-y-end:-20lvh; z-index: -100;">
        <img src="/img/funnel/cars.jpg" style="width:100vw; height:120lvh; object-fit:cover;" />
    </Layer>

    <Layer minHeight="50lvh" x=".25">
        <Textblock lines="{[
            {indent:0, text:`he wanted to strong-arm our investors `},
            {indent:1, text:`for a seat on the board.`},
        ]}" />
    </Layer>


    <Layer minHeight="50lvh">
        <Textblock lines="{[
            {indent:0, text:`A few weeks later he was forced out of the company`},
            {indent:1, text:`He told me it was only a matter of time `},
            {indent:0, text:`and to just quit without saying anything `},
            {indent:0, text:`as a final fuck you`},
        ]}" />
    </Layer>

</SectionWrap>

<SectionWrap>
    <Layer fixed class="anim fade" style="--transform-y-end:-20lvh; z-index: -100; --fade-duration:1s;">
        <img src="/img/funnel/livingroom.jpg" style="width:100vw; height:120lvh; object-fit:cover;" />
    </Layer>

    <Layer minHeight="50lvh" x=".7">
        <Textblock lines="{[
            {indent:0, text:`He came back to my apartment`},
            {indent:0, text:`and passed out on my expensive sofa`},
            {indent:1, text:`I watched him for a minute `},
            {indent:1, text:`before putting a blanket over him`},
        ]}" />
    </Layer>

    <Layer minHeight="50lvh" x=".3">
        <Textblock lines="{[
            {indent:0, text:`In the morning he called his wife `},
            {indent:0, text:`and told her I was quitting.`},
            {indent:1, text:`was that what I was doing?`},
            {indent:1, text:`my hand was swelling`},
        ]}" />
    </Layer>

</SectionWrap>

<SectionWrap>
    <Layer fixed class="anim" style="--transform-y-end:-20lvh; z-index: -200;">
        <img src="/img/funnel/nipples.jpg" style="width:100vw; height:120lvh; object-fit:cover;" />
    </Layer>

    <Layer fixed class="anim" style="--transform-y-start:-20lvh; mix-blend-mode: color-burn;">
        <img src="/img/funnel/skin.jpeg" style="width:100vw; height:120lvh; object-fit:cover;" />
    </Layer>

    <Layer minHeight="100lvh">
        <Textblock lines="{[
            {indent:0, text:`At my gym I went to a wrestling class `},
            {indent:0, text:`for a “very special training session” `},
            {indent:0, text:`We took off our shirts and covered ourselves in`},
            {indent:1, text:` grease and my body was `},
            {indent:1, text:` slammed on the dirty, sticky, sweat`},
            {indent:2, text:`  filled ground over and over until `},
            {indent:2, text:`  I puked`},
        ]}" />
    </Layer>

</SectionWrap>

<SectionWrap rootMargin="">
    <Layer fixed class="anim" style="--transform-rotate-end: calc(3deg * pow(3, 0)); mix-blend-mode: difference;">
        <img src="/img/funnel/lobby.jpg" style="width:100vw; height:100lvh; object-fit:cover;" />
    </Layer>
    <Layer fixed class="anim" style="--transform-rotate-end: calc(3deg * pow(3, 1)); mix-blend-mode: difference;">
        <img src="/img/funnel/lobby.jpg" style="width:80vw; height:80lvh; object-fit:cover;" />
    </Layer>
    <Layer fixed class="anim" style="--transform-rotate-end: calc(3deg * pow(3, 2)); mix-blend-mode: difference;">
        <img src="/img/funnel/lobby.jpg" style="width:60vw; height:60lvh; object-fit:cover;" />
    </Layer>
    <Layer fixed class="anim" style="--transform-rotate-end: calc(3deg * pow(3, 3)); mix-blend-mode: difference;">
        <img src="/img/funnel/lobby.jpg" style="width:40vw; height:40lvh; object-fit:cover;" />
    </Layer>
    <Layer fixed class="anim" style="--transform-rotate-end: calc(3deg * pow(3, 4)); mix-blend-mode: difference;">
        <img src="/img/funnel/lobby.jpg" style="width:20vw; height:20lvh; object-fit:cover;" />
    </Layer>
<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`I called in sick`},
        {indent:0, text:`I started walking around aimlessly`},
        {indent:1, text:`Playing the same song over`},
        {indent:2, text:`and over`},
        {indent:3, text:`and over`},
        {indent:4, text:`and over`},
        {indent:5, text:`and over`},
    ]}" />
</Layer>

<Layer minHeight="50lvh" x=".7">
    <Textblock lines="{[
        {indent:0, text:`I began to lose track of time`},
        {indent:1, text:`I messaged him again and again deep into the night `},
        {indent:2, text:`until he threatened me`},
    ]}" />
</Layer>
</SectionWrap>

<SectionWrap>
      <Layer fixed style="z-index: -100;">
      <video muted="muted" autoplay loop style="
        width: 100vw;
        height: 100lvh;
        object-fit: cover;
      "><source src="/img/funnel/rain2.mp4" type="video/mp4" /></video>
  </Layer>
<Layer minHeight="50lvh" x=".9">
    <Textblock lines="{[
        {indent:0, text:`My mother came to town to get me`},
        {indent:1, text:`They emailed to let me know I had been let go`},
        {indent:0, text:`My mom fed me sleeping pills and drove me home`},
    ]}" />
</Layer>

<Layer minHeight="100lvh">
</Layer>

</SectionWrap>

<SectionWrap>
<Layer colStart="2" colEnd="13">

<Clowntales crazy md="{`# clown talez
# clown talez
# clown talez
# clown talez

In less than 10 seconds, 
      
a man who steps into 
      
flowing corn can 
      
sink up to 
      
his chest, becoming immobilized, 
      
said Robert Aherin, agriculture safety leader in the 
      
agricultural engineering 
      
department at the University of Illinois 
      
at Urbana-Champaign. Within another 10 seconds, 
      
he can be submerged and unable to breathe, 
      
essentially drowned in corn.
`}" />

</Layer>

<NextPage title="6. The Factory That Produces Factories" link="/factory" />
</SectionWrap>