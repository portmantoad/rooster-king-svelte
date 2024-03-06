<script type="text/javascript">
  import MediaQuery from 'svelte-media-queries';

  let isMobile = false;
  let className = '';
  export { className as class };
  export let style = '';
  export let innerStyle = '';
  export let x = .5;
  export let y = .5;
  export let colStart = 1;
  export let colEnd = 14;
  export let mColStart = 1;
  export let mColEnd = 14;
  export let overlap = false;
  export let fixed = false;
  export let minHeight = '';

  className = `layer ${className ? className : ''}`;

  $: outerStyle = `
    --left: ${x}fr;
    --right: ${1 - x}fr;
    --top: ${y}fr;
    --bottom: ${1 - y}fr;

    --colStart: ${isMobile ? mColStart : colStart};
    --colEnd: ${isMobile ? mColEnd : colEnd};

    ${minHeight ? `min-height: ${minHeight};` : ''}
    ${style ? style : ''}
  `
</script>

<style type="text/css">
  .layer{
  --left: 1fr;
  --right: 1fr;
  --top: 1fr;
  --bottom: 1fr;
  display: grid;
  
  --colStart:1;
  --colEnd:14;

  --bodywidth: min(50rem, 100vw);
  --gutterWidth: calc((100vw - var(--bodywidth))/2);
  --columns: 12;
  --colGap: min(1rem, 3.5vw);
  --columnWidth: calc(
    (
      var(--bodywidth) - (
        var(--colGap) 
        * (var(--columns) + 1)
      )
    ) / var(--columns)
  );

  --colStartClean: clamp(1, var(--colStart), 14);
  --colEndClean: clamp(1, calc(15 - var(--colEnd)), 14);

  margin:auto;
  margin-left:calc( 
    (
      var(--gutterWidth) * (
        min(var(--colStartClean) - 1, 1) 
        + clamp(0, max(var(--colStartClean) - 14, 0) ,1) 
      )
    ) + (
      var(--columnWidth) 
      * (var(--colStartClean) - 2)
    ) + (
      var(--colGap) 
      * (var(--colStartClean) - 1)
    ) 
  );
  margin-right:calc( 
    (
      var(--gutterWidth) * (
        min(var(--colEndClean) - 1, 1) 
        + clamp(0, max(var(--colEndClean) - 14, 0) ,1) 
      )
    ) + (
      var(--columnWidth) 
      * (var(--colEndClean) - 2)
    ) + (
      var(--colGap) 
      * (var(--colEndClean) - 1)
    ) 
  );
  grid-template-columns: var(--left) minmax(0,auto) var(--right); 
  grid-template-rows: var(--top) minmax(0,auto) var(--bottom);
  gap:0;
  
}

.fixed{
      position: fixed;
      top:0; left:0; right:0;
      height: 100lvh;
      pointer-events: none;
      --timeline: --section;
}

.overlap{
  position: absolute;
      top:0; bottom:0; left:0; right:0;
}

  .layer__inner{
    grid-column: 2 / span 1; 
    grid-row: 2 / span 1;
    margin:0;
  }
</style>

<MediaQuery query='(max-width: 900px)' bind:matches={isMobile} />

<div class={className} class:fixed={fixed} class:overlap={overlap} style={outerStyle} {...$$restProps}>
  <div class="layer__inner" style={innerStyle}>
	 <slot />
  </div>
</div>