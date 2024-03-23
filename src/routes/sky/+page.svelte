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

  <audio controls src="/img/sky/shuffle.mp3" bind:volume={bgTrackVolume} style="position: fixed; right: 0; z-index: 10000;" autoplay loop></audio>

<SectionWrap>

<Layer fixed class="anim" style="--transform-y-end:-5lvh; z-index: -100;">
    <img src="/img/sky/night.jpg" style="width:100vw; height:105lvh;">
</Layer>
<Layer minHeight="150lvh" x=".3">
    <Textblock lines="{[
        {indent:0, text:`It took me months to think clearly again`},
        {indent:1, text:`unable to read words on a page or make jokes`},
    ]}" />
</Layer>

<Layer minHeight="150lvh" x=".7">
    <Textblock lines="{[
        {indent:0, text:`living in the shame of my cryptic status updates`},
    ]}" />
</Layer>

<LayerWrap toggleVis>
    <Layer fixed class="anim fade" colStart="5" colEnd="14" y="1" style="--parallax-speed:1.05; --fade-duration:2s; mix-blend-mode: screen;">
        <img src="/img/sky/fire.jpg" style="width:100vw; ">
    </Layer>

<Layer minHeight="150lvh">
    <Textblock lines="{[
        {indent:0, text:`The doctor told me it would take years to regain myself`},
        {indent:1, text:`that some may be lost forever`},
    ]}" />
</Layer>

<LayerWrap toggleVis>
    <Layer fixed class="anim fade" colStart="2" colEnd="10" y=".7" style="--parallax-speed:1.1; --fade-duration:2s;">
        <img src="/img/sky/fog.jpg" style="width:100vw; ">
    </Layer>
    <Layer minHeight="150lvh">
        <Textblock lines="{[
            {indent:0, text:`I started going on walks on a path near my house`},
            {indent:1, text:`One well-marked trail, in a small loop`},
        ]}" />
    </Layer>

<LayerWrap toggleVis>
    <Layer fixed class="anim fade" style="--transform-y-end:-5lvh; --fade-duration:2s; z-index: -99;">
        <img src="/img/sky/sunrise.jpg" style="width:100vw; height:105lvh;">
    </Layer>
    <Layer minHeight="150lvh"></Layer>


<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`Eventually I convinced myself to go out just a little further`},
    ]}" />
</Layer>

<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`To map the network of strange unpaved footpaths`},
        {indent:1, text:`filled with piles of trash and debris`},
        {indent:0, text:`slowly being reclaimed by moss`},
    ]}" />
</Layer>

<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`I listened to audiobooks`},
        {indent:1, text:`stewing in the heat of the summer`},
        {indent:2, text:`staring at the sky`},
    ]}" />
</Layer>
</LayerWrap>
</LayerWrap>
</LayerWrap>
</SectionWrap>