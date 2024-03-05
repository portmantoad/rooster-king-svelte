<script type="text/javascript">
	import { inview } from 'svelte-inview';

  let className = '';
  export { className as class };
  export let style = '';
  export let rootMargin = '-50%';
  export let toggleVis = false;
  export let minHeight = '';

  $: layerStyle = minHeight ? `min-height: ${minHeight}; ${style}` : style;
  
	let isInView;
</script>


<style type="text/css">
    .layerWrap{
      position: relative;
      pointer-events: none;
      view-timeline-name: --section;
    }
    .toggleVis{
      --isInView: 0; /* this reflects the child elements opacity */
    }

    .toggleVis.isInView, .fade.isInView{
      --isInView: 1;
    }

    .toggleVis:not(.isInView){
      --isInView: 0;
    }

</style>


<section 
  class={`layerWrap ${toggleVis ? 'toggleVis' : ''} ${className ? className : ''}`} 
  use:inview={toggleVis && {rootMargin: rootMargin}} 
  on:inview_change={(event) => {isInView = event.detail.inView}} 
  class:isInView={isInView} 
  style={layerStyle}
  {...$$restProps}
>
	<slot />
</section>