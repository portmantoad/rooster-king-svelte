<script type="text/javascript">
    import { onMount } from 'svelte';
  import SectionWrap from '$lib/components/SectionWrap.svelte';
  import LayerWrap from '$lib/components/LayerWrap.svelte';
  import Layer from '$lib/components/Layer.svelte';
  import Textblock from '$lib/components/Textblock.svelte';
  import Clowntales from '$lib/components/Clowntales.svelte';
  import NextPage from '$lib/components/NextPage.svelte';
  let audioRef;


  onMount(async () => {
    audioRef.preservesPitch = false;
  });

    let speed = 1;
    let noiseVol = 0;

  let scrollY = 0;

  $: {
    const totalScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(scrollY / totalScroll, 0),1);
    speed = Math.max(1 - progress, 0.1);
    noiseVol = Math.max((progress - .5) * 2, 0);
  }

</script>

<svelte:window bind:scrollY />

<!-- <div style="position: fixed; bottom:1rem; right:1rem; z-index:100000; color:#ff0">{speed}</div> -->

<audio controls bind:this={audioRef} bind:playbackRate={speed} src="/img/factory/holdmusic.mp3" style="position: fixed; right: 0; z-index: 10000;" autoplay loop></audio>

<audio controls src="/img/factory/clown.mp3" style="position: fixed; right: 0; z-index: 10000;" autoplay loop></audio>

<audio controls bind:volume={noiseVol} src="/img/factory/static.mp3" style="position: fixed; right: 0; z-index: 10000;" autoplay loop></audio>


<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`By keeping my playlist on shuffle,`},
        {indent:2, text:`I reasoned,`},
        {indent:1, text:`he would be able to hack the algorithm`},
        {indent:0, text:`to present me with specific songs`},
    ]}" />
</Layer>

<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`Through the music he told me`},
        {indent:1, text:`the government, `},
        {indent:2, text:`a cabal of my old employers,`},
        {indent:0, text:`and an underground army of internet trolls`},
        {indent:0, text:`were conspiring to kill me `},
        {indent:1, text:`and make it look like a suicide`},
        {indent:0, text:`unless I did everything exactly right.`},
    ]}" />
</Layer>

<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`I joyfully gave away my prized possessions `},
        {indent:1, text:`to loved ones around me.`},
    ]}" />
</Layer>

<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`I realized love is a precious thing`},
        {indent:1, text:`It is simple and good`},
        {indent:0, text:`and even if unreturned`},
    ]}" />
</Layer>

<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:1, text:`even if unwanted`},
        {indent:0, text:`it has dignity all its own`},
    ]}" />
</Layer>

<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:1, text:`I cried over a coffee mug `},
        {indent:1, text:`with a bird on it`},
        {indent:0, text:`that I’d never quite noticed before`},
    ]}" />
</Layer>

<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`I wrote poems on my phone`},
        {indent:0, text:`with deeply encrypted meanings`},
        {indent:0, text:`and a defiant stance`},
        {indent:0, text:`for the world to see:`},
    ]}" />
</Layer>

<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`He began to grow furious that I kept contacting him,`},
        {indent:1, text:`and I danced in staccato rhythms to cast a spell`},
        {indent:0, text:`to keep his soul trapped in my phone.`},
    ]}" />
</Layer>

<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`I came to realize that I was a god,`},
        {indent:1, text:`and the shows on the television were all about me.`},
        {indent:0, text:`I painstakingly organized the books on my shelf`},
        {indent:1, text:`To represent the intuitive knowledge granted to each class in a perfect system:`},
    ]}" />
</Layer>

<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`Gods`},
        {indent:0, text:`Elite`},
        {indent:0, text:`Merchant`},
        {indent:0, text:`Proletariat`},
        {indent:0, text:`Insane`},
    ]}" />
</Layer>

<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`I was trapped in a time loop`},
        {indent:1, text:`where the universe repeated over and over again`},
        {indent:0, text:`and only I was aware.`},
    ]}" />
</Layer>

<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`He begged me to let the universe end.`},
    ]}" />
</Layer>

<Layer minHeight="50lvh">
    <Textblock lines="{[
        {indent:0, text:`As the world collapsed around`},
        {indent:0, text:`me, I was trapped in`},
        {indent:0, text:`an eternal`},
        {indent:0, text:`sta`},
        {indent:0, text:`t`},
        {indent:0, text:`i`},
        {indent:0, text:`c`},
    ]}" />
</Layer>

<Layer minHeight="100lvh">
    <iframe style="aspect-ratio: 560 / 315; width: min(100vw, calc(90lvh/315*560));" src="https://www.youtube.com/embed/RAfHYaXmZEs?si=BndGvzg0KqJvyr5m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</Layer>

<NextPage title="7. Sky Writing" link="/sky" />