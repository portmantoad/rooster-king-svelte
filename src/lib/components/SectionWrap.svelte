<script type="text/javascript">
  let className = '';
  export { className as class };
  export let style = '';
  export let rootMargin = '-50%';
  export let minHeight = '';

	import LayerWrap from '$lib/components/LayerWrap.svelte';
</script>


<LayerWrap class={`sectionWrap ${className ? className : ''}`} toggleVis minHeight={minHeight} style={style} rootMargin={rootMargin} {...$$restProps}>
	<slot />
</LayerWrap>