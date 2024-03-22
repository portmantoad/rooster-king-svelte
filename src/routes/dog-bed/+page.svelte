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

  <audio controls src="/img/dog-bed/ruinedideals.mp3" bind:volume={bgTrackVolume} style="position: fixed; right: 0; z-index: 10000;" autoplay loop></audio>
<SectionWrap>
    <Layer fixed style="mix-blend-mode: screen; --fade-duration: 2s;">
        <img src="/img/dog-bed/morning.gif" style="
            width: 100vw; 
            height: 100lvh; 
            object-fit: cover;
        " />
    </Layer>

    <Layer minHeight="100lvh">
        <Textblock lines="{[
            {indent:0, text:`When I was growing up I envied a friend `},
            {indent:0, text:`who had a room full of Ikea furniture`},
            {indent:1, text:`purpose-built, shiny and new. `},
            {indent:0, text:`Walls painted the particular color of his choosing`},
        ]}" />
    </Layer>

    <Layer minHeight="50lvh">
        <Textblock lines="{[
            {indent:0, text:`My boyfriend's mother offered to buy us a bedroom set`},
            {indent:0, text:''},
            {indent:1, text:`She was shocked to discover `},
            {indent:2, text:`we had gone with as cheap an option as Ikea`},
        ]}" />
    </Layer>
</SectionWrap>
<SectionWrap>
    <Layer fixed style="z-index: -100;">
        <img src="/img/dog-bed/noir.jpg" style="
            width: 100vw; 
            height: 100lvh; 
            object-fit: cover;
        " />
    </Layer>
    <LayerWrap>
        <Layer overlap colStart="2" colEnd="7" class="anim" style="--parallax-speed: 1.25">
            <img src="/img/dog-bed/painting_crop.jpg" style="width:100vw" />
        </Layer>
        <Layer minHeight="50lvh" x=".7">
            <Textblock lines="{[
                {indent:0, text:`He took me along to Princeton parties`},
                {indent:1, text:`I insulted a girl when I didn't know `},
                {indent:1, text:`what a Rhodes scholar was`},
            ]}" />
        </Layer>
    </LayerWrap>

    <Layer minHeight="50lvh" x=".9">
        <Textblock lines="{[
            {indent:0, text:`After we broke up, he left me the furniture`},
        ]}" />
    </Layer>

    <LayerWrap>
        <Layer minHeight="100lvh" x=".3">
            <Textblock lines="{[
                {indent:0, text:`My job moved me from a “nice cubicle”,`},
                {indent:1, text:`to a cubicle with a pillar through it,`},
                {indent:2, text:`to a shared cubicle,`},
                {indent:2, text:`    to a desk in a hallway.`},
                {indent:0, text:``},
                {indent:0, text:`I took the hint`},
            ]}" />
        </Layer>
        <Layer overlap colStart="7" colEnd="14" class="anim" style="--parallax-speed: 1.25">
            <img src="/img/dog-bed/pitbull.webp" style="width:100vw" />
        </Layer>
    </LayerWrap>
    <LayerWrap toggleVis>
        <Layer fixed style="mix-blend-mode: hard-light;">
            <img src="/img/dog-bed/meatmarket_processed.jpg" style="
                width: 100vw; 
                height: 100lvh; 
                object-fit: cover;
            " />
        </Layer>
        <LayerWrap>
            <Layer overlap colStart="2" colEnd="7" class="anim" style="--parallax-speed: 1.25">
                <img src="/img/dog-bed/doggy.jpg" style="width:100vw" />
            </Layer>
            <Layer minHeight="50lvh">
                <Textblock lines="{[
                    {indent:0, text:`I decided to adopt a dog`},
                    {indent:1, text:`When I brought him home his eye was infected`},
                    {indent:1, text:`He lunged towards chicken bones in the street`},
                ]}" />
            </Layer>
        </LayerWrap>

        <Layer minHeight="50lvh">
            <Textblock lines="{[
                {indent:0, text:`When I didn't let him in the bathroom with me,`},
                {indent:1, text:`he shivered in fear and pissed on the floor.`},
                {indent:0, text:`He wedged himself between my thighs to sleep.`},
                {indent:0, text:`The next day I lied to the animal shelter `},
                {indent:1, text:`and told them I was allergic.`},
            ]}" />
        </Layer>
    </LayerWrap>
</SectionWrap>
<SectionWrap>
    <Layer fixed class="anim" style="
        --transform-y-end: -10lvh;
        --transform-range: entry-crossing;
        --transform-ease: ease-out;
        --filter-end: brightness(.3) contrast(1.5);
        --filter-range: entry-crossing;
        mix-blend-mode: screen;
    ">
        <img src="/img/dog-bed/plane.jpg" style="
            width: 100vw; 
            height: 110lvh; 
            object-fit: cover;
        " />
    </Layer>
    <Layer minHeight="120lvh">
        <Textblock lines="{[
            {indent:0, text:`I burned through all my savings.`},
            {indent:1, text:`I sold the furniture on craigslist `},
            {indent:0, text:`and made just enough to buy a plane ticket home`},
        ]}" />
    </Layer>

    <LayerWrap toggleVis rootMargin="0%">
        <Layer fixed class="anim" style="
            mix-blend-mode: plus-lighter;
            
            --transform-y-start: 20lvh;
            --transform-range: entry-crossing;
            --transform-ease: ease-out;
            --filter-start: brightness(0) sepia(1) hue-rotate(-55deg) saturate(3.5);
            --filter-end: brightness(0.4) sepia(1) hue-rotate(-55deg) saturate(3.5);
            --filter-range: entry-crossing;
        ">
            <img src="/img/dog-bed/hand.jpg" style="
                width: 100vw; 
                height: 100lvh; 
                object-fit: cover;
            " />
        </Layer>
        <Layer minHeight="120lvh" x=".9">
            <Textblock lines="{[
                {indent:0, text:`I spent my last 2 weeks in the city`},
                {indent:0, text:`on a blow-up mattress on the floor of my apartment`},
                {indent:1, text:`staring at my ceiling in the dark`},
                {indent:1, text:`watching the headlights passing by.`},
            ]}" />
        </Layer>
    

    <Layer minHeight="100lvh" style="mix-blend-mode: exclusion;">
    <video class="video--withcontrols" bind:paused style="width:calc(min(100vw - 2rem, 100lvh/202*360*.75 - 4rem)) " src="/img/dog-bed/candle.mp4" controls></video>
  </Layer>
  </LayerWrap>

<!-- <Layer colStart="2" colEnd="13">

      <Clowntales md="{`# Clown talez part four

A troupe made up of former students were having their annual shareholders meeting, and the current students were invited to act as community representatives. We gathered around a couple of lukewarm pepperoni pizzas and listened as they added the sober details of their annual financials, projected revenue, and outstanding debts into their meeting minutes. It hadn’t really occurred to me that people actually make a living doing this stuff: they each seemed to be pulling in a respectable salary. 

The reality of travelling from city to city doing the same few shows every night seemed a bit grim.

One of my classmates said that it felt like his _mind was an open wound_, and I was starting to feel the same way. We had started a fairly physically intense daily regimen of what I can only describe as an intense meditation or trance, sculpted a series of six clay masks and turned each of them into a child, teen, and adult characters, completed jedi-like excercises of locating a ball in a room while blindfolded. I discovered all of my masks were basically different flavors of deep depression, then we learned to bend and twist each of the masks to be funny: _if you can't laugh at yourself then you're missing the biggest joke of your life._

All the while I'd managed to ruin the experience for myself by pitching a memoir project to the national film board of canada, who at the time seemed interested, at least enough to grant me a few meetings. 

I was observing myself. Everything i did was at the meta level. 

I was having wild mood swings and crying all the time. I shaved off my beard, and I was standing noticably taller. I looked in the mirror and saw myself with kindness for the first time in my life. But it wasn't enough, I needed it to mean more. I needed everything to curve around in a perfect narrative arc. I could see the shape of it, i just needed to shape reality to fit the story. At some point they stopped returning my emails. 

I went to a japanese stationary store to buy stickers for my niece and my account didn't have 50 cents in it.

`}" />

</Layer>
 -->

    <NextPage title="5. Machine" link="/machine" />
</SectionWrap>