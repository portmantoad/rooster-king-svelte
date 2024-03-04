<script type="text/javascript">
	import { inview } from 'svelte-inview';

	let halfwayPoint;

	let options = {rootMargin: '-50%'};
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
    .sectionne{
      view-timeline-name: --section;
    }

    .sectionne.isInView{
    	pointer-events: none;
    }

    :global(.fade){
      --fade-duration: 500ms;
    	transition: opacity var(--fade-duration);
      opacity:0;
      pointer-events: none;
    }

    .sectionne.isInView > :global(.fade), .sectionne.isInView :global(.fade.fade--strong-inherit), :global(.fade.isInView){
    	opacity:1;	
    }

</style>


<section {...$$restProps} use:inview={options} on:inview_change={handlechange} class:sectionne={true} class:isInView={isInView}>

	<slot />
</section>