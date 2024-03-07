<script type="text/javascript">
      import Layer from '$lib/components/Layer.svelte';
      export let link;
      export let title;
</script>

<style type="text/css">
      .link{
            --color: #fff;
            --arrow-width: .4rem;
            --arrow-height: .6rem;
            --padding-x: 1.5rem;
            --padding-y: .75rem;
            --padding-gutter: .75rem;
            background: #00f; 
            color:var(--color); 
            text-decoration:none; 
            padding: var(--padding-y) calc(var(--padding-x) + var(--padding-gutter) + var(--arrow-width)) var(--padding-y) var(--padding-x); 
            display:block;
            position: relative;
      }

      .link:after{

            content:"";
            display: block;
            width: 0; 
            height: 0; 
            border-top: calc(var(--arrow-height)/2) solid transparent;
            border-bottom: calc(var(--arrow-height)/2) solid transparent;
            border-left: var(--arrow-width) solid var(--color);
            position: absolute;
            left: auto;
            right: var(--padding-x);
            top: 50%;
            translate: 0 -50%;
      }
</style>

<Layer overlap x="1" y=".9">
      <a href={link} class="link">{title}</a>
</Layer>