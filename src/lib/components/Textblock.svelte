<script type="text/javascript">
      export let lines;
      let className = '';
      export { className as class };

      let lengthClasses = ['small-1','small-2','small-3','small-4','small-5','small-6','small-7','small-8','small-9','small-10','small-11','small-12','small-13','small-14','small-15','medium-1','medium-2','medium-3','medium-4','medium-5','medium-6','medium-7','medium-8','medium-9','medium-10','medium-11','medium-12','medium-13','medium-14','medium-15','large-1','large-2','large-3','large-4','large-5','large-6','large-7','large-8','large-9','large-10','large-11','large-12','large-13'];
      const longestString = 100;
      let selectLengthClass = (length) => {
            const classNum = lengthClasses.length - 1;
            const index = Math.min(Math.floor(length / longestString * classNum), classNum);
            return lengthClasses[index];
      }
</script>

<style type="text/css">
    .textblock{
      font-family: 'IBM Plex Sans Condensed', sans-serif;
      font-style: italic;
      font-size: max(13px, calc(9px + .6vw));
      display: flex;
      flex-direction: column;
      align-items: start;
      margin: auto;
    }
    .textblock span{
      padding: .5em;
      margin-bottom: 2px;
      position: relative;
      z-index: 1000;
      max-width: calc(100vw - 8em);
    }

    .textblock span.spacer{
      visibility: hidden;
    }
    .textblock span.spacer:before{
      content: " ";
    }


@media only screen and (max-width: 600px) {
  .gridlayout .textblock{
    grid-column: 2 / 14 !important;
  }
}


.stroked:before{
  content:"";
  display: block;
  position: absolute;
  top:0; left:0; bottom: 0; right:0;
  border: 9px solid #fff;
  border-image: url('/img/strokes/555.png') 20 18 fill;
  border-image-outset: 2.5 1;
  background-color: initial !important;
  z-index: -1;
  /*filter: invert();*/
}

.stroked.small-1:before{   border-image-source: url('/img/strokes/80.png');}
.stroked.small-2:before{   border-image-source: url('/img/strokes/98.png');}
.stroked.small-3:before{   border-image-source: url('/img/strokes/115.png');}
.stroked.small-4:before{   border-image-source: url('/img/strokes/139.png');}
.stroked.small-5:before{   border-image-source: url('/img/strokes/164.png');}
.stroked.small-6:before{   border-image-source: url('/img/strokes/205.png');}
.stroked.small-7:before{   border-image-source: url('/img/strokes/257.png');}
.stroked.small-8:before{   border-image-source: url('/img/strokes/260.png');}
.stroked.small-9:before{   border-image-source: url('/img/strokes/265.png');}
.stroked.small-10:before{  border-image-source: url('/img/strokes/266.png');}
.stroked.small-11:before{  border-image-source: url('/img/strokes/289.png');}
.stroked.small-12:before{  border-image-source: url('/img/strokes/303.png');}
.stroked.small-13:before{  border-image-source: url('/img/strokes/317.png');}
.stroked.small-14:before{  border-image-source: url('/img/strokes/329.png');}
.stroked.small-15:before{  border-image-source: url('/img/strokes/375.png');}
.stroked.medium-1:before{  border-image-source: url('/img/strokes/377.png');}
.stroked.medium-2:before{  border-image-source: url('/img/strokes/386.png');}
.stroked.medium-3:before{  border-image-source: url('/img/strokes/400.png');}
.stroked.medium-4:before{  border-image-source: url('/img/strokes/442.png');}
.stroked.medium-5:before{  border-image-source: url('/img/strokes/461.png');}
.stroked.medium-6:before{  border-image-source: url('/img/strokes/492.png');}
.stroked.medium-7:before{  border-image-source: url('/img/strokes/501.png');}
.stroked.medium-8:before{  border-image-source: url('/img/strokes/530.png');}
.stroked.medium-9:before{  border-image-source: url('/img/strokes/545.png');}
.stroked.medium-10:before{ border-image-source: url('/img/strokes/555.png');}
.stroked.medium-11:before{ border-image-source: url('/img/strokes/578.png');}
.stroked.medium-12:before{ border-image-source: url('/img/strokes/632.png');}
.stroked.medium-13:before{ border-image-source: url('/img/strokes/675.png');}
.stroked.medium-14:before{ border-image-source: url('/img/strokes/725.png');}
.stroked.medium-15:before{ border-image-source: url('/img/strokes/818.png');}
.stroked.large-1:before{   border-image-source: url('/img/strokes/830.png');}
.stroked.large-2:before{   border-image-source: url('/img/strokes/850.png');}
.stroked.large-3:before{   border-image-source: url('/img/strokes/860.png');}
.stroked.large-4:before{   border-image-source: url('/img/strokes/908.png');}
.stroked.large-5:before{   border-image-source: url('/img/strokes/929.png');}
.stroked.large-6:before{   border-image-source: url('/img/strokes/935.png');}
.stroked.large-7:before{   border-image-source: url('/img/strokes/958.png');}
.stroked.large-8:before{   border-image-source: url('/img/strokes/977.png');}
.stroked.large-9:before{   border-image-source: url('/img/strokes/983.png');}
.stroked.large-10:before{  border-image-source: url('/img/strokes/990.png');}
.stroked.large-11:before{  border-image-source: url('/img/strokes/1117.png');}
.stroked.large-12:before{  border-image-source: url('/img/strokes/1196.png');}
.stroked.large-13:before{  border-image-source: url('/img/strokes/1322.png');}

.stroked{
  transform: translateX(var(--indent));
}
@supports (animation-range: cover) {
  .stroked{
    --animation-offset: 0%;
    animation: linear stroked both;
    animation-timeline: view();
    animation-timing-function: ease-out;
    animation-range: entry-crossing 100% cover calc(35% + var(--animation-offset));
  }
}
    @keyframes stroked {
      0% {
        opacity: 0;
        filter: blur(3px);
        transform: translateX(calc(var(--indent) - 2vw));
      }
      50%{
        filter: blur(0px);
      }
      100% {
        opacity:1;
        transform: translateX(calc(var(--indent)));
      }
    }


  .stroked:nth-of-type(2){--animation-offset: 20%;}
  .stroked:nth-of-type(3){--animation-offset: 10%;}
  .stroked:nth-of-type(4){--animation-offset: -20%;}
  .stroked:nth-of-type(5){--animation-offset: 10%;}
  .stroked:nth-of-type(6){--animation-offset: 20%;}
  .stroked:nth-of-type(7){--animation-offset: 0%;}
  .stroked:nth-of-type(8){--animation-offset: -10%;}
  .stroked:nth-of-type(9){--animation-offset: 10%;}
  .stroked:nth-of-type(10){--animation-offset: 20%;}


</style>


<div class={`textblock ${className ? className : ''}`} {...$$restProps}>
      {#each lines as { indent, text }}
            <span class={` ${0 === text.length ? 'spacer' : 'stroked'} ${selectLengthClass(text.length)}`} style={`--indent: calc(${indent} * 2em)`}>{text}</span>
      {/each}
</div>