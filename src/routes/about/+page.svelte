<script type="text/javascript">
  import SectionWrap from '$lib/components/SectionWrap.svelte';
  import LayerWrap from '$lib/components/LayerWrap.svelte';
  import Layer from '$lib/components/Layer.svelte';
  import Textblock from '$lib/components/Textblock.svelte';
  import NextPage from '$lib/components/NextPage.svelte';
  import BgTrack from '$lib/components/BgTrack.svelte';

</script>
<style type="text/css">
    .bg{
      position: fixed;
      width:100vw;
    height: 100lvh;
    inset: 0;
    --frames:20;
    --fps: 16;
    background: url('/img/title/out_mid.jpg');
    background-size: auto calc(var(--frames)*100%);
    background-position: center 0%;
    
    animation: calc(var(--frames)/var(--fps)*1000ms) steps(calc(var(--frames) - 1)) 0s infinite alternate filmstrip;
        }

@keyframes filmstrip {
     0%{background-position: center 0%;}
     100%{background-position: center 100%;}
   }



   .clowntext{
    max-width: 100%; 
    width: 40rem;
    background:#fff; 
    padding: 10lvh 9vw; 
    font-family: 'ibm plex mono', 'american typewriter', monospace;
    background-image: url("/img/bluenoise.png"); 
    background-size: 2.8rem;
    filter: blur(0.038em) contrast(2.5) brightness(0.9);
    position: relative;
    font-size: .825rem;
    line-height: 1.25rem;
    rotate:.35deg;
  }

  .clowntext a{
    color:#000;
  }

  .clowntext :global(*::selection) {
    color: rgba(255,255,255,1);
    background-color: rgba(0,0,0,0.9);
  }

  .clowntext :global(h1){
    column-span: all;
    text-transform: uppercase;
    font-size: inherit;
    font-weight:normal;
    --dotsize: 3px;
    padding-bottom:calc((2rem - var(--dotsize)) / 2);
    margin-bottom: calc((2rem - var(--dotsize)) / 2);
    border-bottom: var(--dotsize) dotted rgba(0,0,0,0.7);
  }

  .clowntext :global(hr){
    column-span: all;
    --dotsize: 3px;
    padding-bottom:calc((2rem - var(--dotsize)) / 2);
    margin-bottom: calc((2rem - var(--dotsize)) / 2);
    border-bottom: var(--dotsize) dotted rgba(0,0,0,0.7);
  }

  .clowntext :global(p){
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .clowntext:after, .clowntext:before{
    content:"";
    display: block;
    position: absolute;
    inset:0;
    background-image: url("/img/bluenoise.png"); 
    background-size: 4rem;
    mix-blend-mode: color-dodge;
    pointer-events: none;
    opacity: 0.8;
    letter-spacing: 0.02em;
  }

  .clowntext:before{
    background-size: 9rem;
    opacity: 0.4;
  }

  .signature{
    width:12rem;
    filter: brightness(.5) contrast(1.5);
    
  }

  .signature__name{
    width:15rem;
    max-width: 100%;
    --dotsize: 3px;
    padding-top:calc((2rem - var(--dotsize)) / 2);
    margin-top: -2.5rem;
    position: relative;
    border-top: var(--dotsize) dotted rgba(0,0,0,0.7);

  }

</style>
<div class="bg"></div>

  <BgTrack src="/img/crowflies.mp3" />

<SectionWrap>

<Layer minHeight="100lvh" mColStart="2" mColEnd="13">
    <div class="clowntext">
    <h1>Thanks for reading!</h1>

    <p>I would have a credits page but I mostly did everything with the notable exception of the background tracks on pages 3,4, & 5 which were supplied by the talented <a href="https://soundcloud.com/mordecaimusician">Justin Donaldson</a></p>

    <p>This is somewhat embarassing to admit but parts of this project have been in the works for over a decade now, and I am so grateful to be in a position to finally share it</p>

    <p>If you'd like to hear about other projects or read my essays please sign up to my substack <a href="https://arcove.substack.com/">here</a></p>

    <p>Wishing you all the best</p>

    <img class="signature" src="/img/signature.jpg">
    <p class="signature__name">Drew Schorno</p>
    </div>
</Layer>
</SectionWrap>