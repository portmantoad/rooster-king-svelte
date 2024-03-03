<script type="text/javascript">
	import { inview } from 'svelte-inview';

	let halfwayPoint;

	let options = {rootMargin: '-50px'};
	let isInView;
	let scrollDirection;
	let handlechange = (event) => {
      // const sectionHeight = event.detail.entry.boundingClientRect.height;
      // const windowHeight = window.innerHeight;
      // halfwayPoint = Math.min((sectionHeight - windowHeight/2) / sectionHeight, 1);
      // inView ? node.classList.add('isInView') : node.classList.remove('isInView')
      isInView = event.detail.inView;
      scrollDirection = event.detail.scrollDirection.vertical;
  }
</script>


<style type="text/css">
	section{
      view-timeline-name: --section;
    }

    section:not(.isInView){
    	pointer-events: none;
    }

    section :global(.fade){
      --fade-duration: 200ms;
    	transition: opacity var(--fade-duration);
    }

    section:not(.isInView) :global(.fade){
    	opacity:0 !important;	
    	pointer-events: none;
    }

</style>


<section {...$$restProps} use:inview={options} on:inview_change={handlechange} class:isInView={isInView} class:animateFromBottom={scrollDirection === 'down'}
      class:animateFromTop={scrollDirection === 'up'}>

	<slot />
</section>