<script type="text/javascript">
    import SvelteMarkdown from 'svelte-markdown';

    export let md;
    export let crazy;
</script>

<style type="text/css">
  .clowntext{
/*    max-width: 40rem; */
    width: 100vw;
    background:#fff; 
    padding: 2rem; 
    font-family: 'ibm plex mono', 'american typewriter', monospace;
    background-image: url("/img/bluenoise.png"); 
    background-size: 2.8rem;
    filter: blur(0.038em) contrast(2.5) brightness(0.9) invert(1);
    position: relative;
    columns: 15rem auto;
    column-gap: 1rem;
  }

  .clowntext.crazy{
    font-size: .9rem;
    filter: blur(0.038em) contrast(4.5) brightness(0.9) invert(1);
    columns: 10rem auto;
  }

  .clowntext.crazy :global(p){
    text-indent: 5rem;
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


  /*  .clowntext span{
    display: inline-block;
  }

  .clowntext span:nth-child(2n){
    rotate: 1deg;
  }

  .clowntext span:nth-child(3n){
    opacity: .8;
  }

  .clowntext span:nth-child(5n){
    transform: translateY(.03em);
  }

  .clowntext span:nth-child(7n){
    translate: 0 .05em;
  }

  .clowntext span:nth-child(11n){
    opacity: .6;
  }*/
</style>

<div class="clowntext" class:crazy={crazy}>
  <SvelteMarkdown source={md} />
</div>
       