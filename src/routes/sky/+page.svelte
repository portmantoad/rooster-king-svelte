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

  <BgTrack src="/img/sky/shuffle" />

<SectionWrap>

<Layer fixed class="anim" style="--transform-y-end:-5lvh; z-index: -100;">
    <img src="/img/sky/night.jpg" style="width:100vw; height:105lvh; object-fit: cover;">
</Layer>
<Layer minHeight="100lvh" x=".3">
    <Textblock lines="{[
        {indent:0, text:`It took me months to think clearly again`},
        {indent:1, text:`unable to read words on a page or make jokes`},
    ]}" />
</Layer>

<Layer minHeight="100lvh" x=".7">
    <Textblock lines="{[
        {indent:0, text:`living in the shame of my cryptic status updates`},
    ]}" />
</Layer>

<LayerWrap toggleVis>
    <Layer fixed class="anim fade" colStart="5" colEnd="14" y="1" style="--parallax-speed:1.05; --fade-duration:2s; mix-blend-mode: screen;">
        <img src="/img/sky/fire.jpg" style="width:100vw; ">
    </Layer>

<Layer minHeight="100lvh">
    <Textblock lines="{[
        {indent:0, text:`The doctor told me it would take years to regain myself`},
        {indent:1, text:`that some may be lost forever`},
    ]}" />
</Layer>

<LayerWrap toggleVis>
    <Layer fixed class="anim fade" colStart="2" colEnd="10" y=".4" style="--parallax-speed:1.1; --fade-duration:2s; mix-blend-mode: lighten;">
        <img src="/img/sky/fog.jpg" style="width:100vw; ">
    </Layer>
    <Layer minHeight="100lvh" x=".3">
        <Textblock lines="{[
            {indent:0, text:`I started going on walks on a path near my house`},
            {indent:1, text:`One well-marked trail, in a small loop`},
        ]}" />
    </Layer>

<LayerWrap toggleVis>
    <Layer fixed class="anim fade" style="
    --transform-y-end:-5lvh; 
    --filter-end:brightness(1.3) contrast(1.5) saturate(1.5);
    --filter-range: cover 0% contain 100%;
    --fade-duration:2s; 
    z-index: -99;
    ">
        <img src="/img/sky/sunrise.jpg" style="width:100vw; height:105lvh; object-fit: cover;">
    </Layer>
<!--      <Layer fixed class="anim fade" style="
     background: rgb(205 233 233);
     mix-blend-mode: color-burn;
    --filter-start:brightness(2);
    --filter-range: cover 0% contain 50%;
    --filter-ease: ease-out;
    --fade-duration: 2s; 
    z-index: -99;
    ">
    </Layer>-->
    <Layer minHeight="150lvh"></Layer>

<LayerWrap toggleVis>
<Layer minHeight="100lvh">
    <Textblock lines="{[
        {indent:0, text:`Eventually I convinced myself to go out just a little further`},
    ]}" />
</Layer>
<Layer fixed colStart="9" colEnd="14" mColStart="4" y=".2" class="fade" style="--fade-duration: 1s;"><video class="autoplay" autoplay muted playsinline volume="0" loop src="/img/sky/fasttrail.mp4" style="width:100vw; max-width:100%; object-fit:cover;"/></Layer>


<LayerWrap toggleVis>
<Layer minHeight="100lvh"></Layer>
<Layer fixed colStart="2" colEnd="8" mColEnd="12" y="0.2" class="fade anim" style="--parallax-speed:1.025;"><video class="autoplay" autoplay muted playsinline volume="0" loop src="/img/sky/biketire.mp4" style="width:100vw; max-width:100%; max-height:50lvh; object-fit:cover;"/></Layer>

<LayerWrap toggleVis>
<Layer minHeight="100lvh">
    <Textblock lines="{[
        {indent:0, text:`To map the network of strange unpaved footpaths`},
        {indent:1, text:`filled with piles of trash and debris`},
        {indent:0, text:`slowly being reclaimed by moss`},
    ]}" />
</Layer>
<Layer fixed colStart="4" colEnd="10" mColStart="2" y="0.9" class="fade anim" style="--parallax-speed:1.05;"><video class="autoplay" autoplay muted playsinline volume="0" loop src="/img/sky/trashpath2.mp4" style="width:100vw; max-width:100%; height:40lvh; object-fit:cover;"/></Layer>


<LayerWrap toggleVis>
<Layer minHeight="100lvh"></Layer>
<Layer fixed colStart="7" colEnd="14" mColStart="4" y=".7" class="fade anim" style="--parallax-speed:1.1; z-index: 10;"><div style="width: 100vw; max-width: 100%; background:#888; aspect-ratio: 1920 / 1080;"></div></Layer>
<Layer fixed colStart="7" colEnd="14" mColStart="4" y=".7" class="fade anim" style="--parallax-speed:1.1; z-index: 110; mix-blend-mode: overlay;"><video class="autoplay" autoplay muted playsinline volume="0" loop src="/img/sky/clownfoliage.mp4" style="width:100vw; max-width:100%; object-fit:cover; display: block;"/></Layer>

<LayerWrap toggleVis>
<Layer minHeight="100lvh"></Layer>
<Layer fixed colStart="0" colEnd="4" mColEnd="8" y=".5" class="fade anim" style="--parallax-speed:1.12;"><video class="autoplay" autoplay muted playsinline volume="0" loop src="/img/sky/sky.mp4" style="width:100vw; max-width:100%; object-fit:cover;"/></Layer>




<LayerWrap toggleVis>
    <Layer fixed colStart="2" colEnd="13" class="fade" style=" --fade-duration:2s; z-index:100">
        <img src="/img/sky/sky.jpg" style="width:100vw; height:80lvh; object-fit: cover;">
    </Layer>
    <Layer minHeight="50lvh" x=".2" y="1">
        <Textblock lines="{[
            {indent:0, text:`I listened to audiobooks`},
            {indent:1, text:`stewing in the heat of the summer`},
            {indent:2, text:`staring at the sky`},
        ]}" />
    </Layer>

    <Layer minHeight="50lvh" y="0.1" x=".75" style="position:relative; z-index: 999;">
        <audio controls bind:paused={$mediaPaused} >
            <source src="/img/sky/greatunknown.opus" type="audio/ogg; codecs=opus" />
            <source src="/img/sky/greatunknown.mp3" type="audio/mpeg" />
        </audio>  
    </Layer>

    <Layer fixed class="fade" y=".85" x=".9" style="z-index: 1000; filter: blur(.05em) contrast(2); mix-blend-mode: color-burn;">
        <div style="font-size: 1rem; font-family: american typewriter, monospace; background: #fff; font-style: italic;">the end.</div>
    </Layer>

    <NextPage title="About" link="/about" />
</LayerWrap>
</LayerWrap>
</LayerWrap>
</LayerWrap>
</LayerWrap>
</LayerWrap>
</LayerWrap>
</LayerWrap>
</LayerWrap>
</SectionWrap>