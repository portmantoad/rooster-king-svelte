<script type="text/javascript">
      export let src;
      export let style;
      export let styleInner;
      let className = '';
      export { className as class };

      export let width;
      export let height;
      export let fit = 'cover';
      export let x = '50%';
      export let y = '50%';

      $: outerStyle = `
            width: ${width};
            height: ${height};

          ${style ? style : ''}
        `

      $: innerStyle = `
            object-fit: ${fit};
            object-position: ${x} ${y};

          ${styleInner ? styleInner : ''}
        `
</script>

<style>
      picture{
            max-width: 100%;
            display: flex;
      }

      img{
            width: 100%;
            height: 100%;
      }
</style>


<picture class={className} style={outerStyle} {...$$restProps} >
  <img src={src} style={innerStyle} />
</picture>