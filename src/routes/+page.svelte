
	<style type="text/css">
		
    body, html{
      width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
     margin:0; padding:0;
  }

    .bg{
      position: absolute;
      width:100%;
    height: 100%;
    top: 0; left:0; bottom:0; right:0;
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

   .face{
   	position: absolute;
   	width:100%;
   	height: 100%;
   	top: 0; left:0; bottom:0; right:0;
   	object-fit: cover;
    object-position: 39% 43%;
   	mix-blend-mode: color-burn;
   }

   .eye{
   	position: absolute;
   	top: 39%;
    left: 43%;
    width: 15vmax;
    height: auto;
    transform: translate(-50%, -40%);
   }

   .eye_anim{
   	aspect-ratio: 545 / 1878;
   	background: url('/img/title/eye_anim.png');
   	    --frames:6;
   	    --fps:9;
    background-size: auto calc(var(--frames)*100%);
    background-position: center 0%;
    
    animation: calc(var(--frames)/var(--fps)*1000ms) steps(calc(var(--frames) - 1)) 0s infinite filmstrip;
       	position: fixed;
   	top: 39%;
    left: 43%;
    height: 90vh;
    transform: translate(-50%, -40%);
   }

   .eye_anim__2{
    background: url('/img/title/eye_anim.png');
    --frames: 13;
    --fps: 6;
    background-size: auto calc(var(--frames)*100%);
    background-position: center 0%;
    animation: calc(var(--frames)/var(--fps)*1000ms) steps(calc(var(--frames) - 1)) 0s infinite filmstrip;
    width: calc(13/9*100vh / 1878 * 545);
    height:100vh;
    background-repeat: no-repeat;
/*    background-color: #000;*/
/*    filter: blur(2px) contrast(2.5);*/
    mix-blend-mode: difference;
    will-change: transform;
   }

/*    .title{
   	position: fixed;
   	top: 45%; left:55%;
   	   	width: 30vmax;
   	height: auto;
   	transform: translate(-50%, -50%);
   	    mix-blend-mode: difference;
   }*/


       .scribble{
   	position: fixed;
   	top: 95%; left:95%;
   	   	width: 30vmax;
   	height: auto;
   	transform: translate(-100%, -100%);
   	mix-blend-mode: plus-lighter;
   }

   content{
        max-width: calc(100vw - 5rem);
   }

   h1{
   	text-indent: -.7em;
   	font-size: max(3.2vw, 22px);
    letter-spacing: 1em;
    font-family: american typewriter;
    will-change: transform;
    color: #b7955f;
    
/*    filter: blur(0.04em) contrast(2.5);*/
/*    background: #000;*/
}

.title{
    mix-blend-mode: plus-lighter;
    animation: 10s linear 0s infinite alternate hueshift, 3s linear fadein both;
    animation-composition: add;
   }

   @keyframes hueshift {
     0%  {color:oklch(0.6 0.17 0)}
     25% {color:oklch(0.8 0.11 120)}
     50% {color:oklch(0.6 0.11 240)}
     100%{color:oklch(0.8 0.17 360)}
   }
   @keyframes fadein {
     0%  {filter: blur(0.08em) brightness(0) contrast(2.5);}
     100%  {filter: blur(0.03em) brightness(1) contrast(2.5);}
   }

   content span{
   	color: #fff;
   	letter-spacing: .3em;
   	animation: 1.2s linear 3s infinite both blink;
    font-smooth: never;
-webkit-font-smoothing : none;
font-size: 10px;
font-family: system-ui, sans-serif;
text-align: center;
   }

    @keyframes blink{
     0%  {opacity:0;}
     39%  {opacity:0;}
     40% {opacity:1;}
     100% {opacity:1;}
   }

   .cover{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
   }

	</style>
  <div class="bg"></div>
	<img class="face" src="/img/title/face_optim.jpg">
	<!-- <img class="scribble" src="/img/title/scribble.png"> -->
	<!-- <img class="eye" src="/img/title/eye.png"> -->
	<div class="eye_anim"></div>
	<div class="cover autolayout" style="--left:.5fr; width:calc(43% - 5vw); overflow: hidden;">
    <div class="eye_anim__2"></div>
  </div>
  <div class="cover autolayout title" style="--right:.2fr; --bottom:.2fr;">
  	<content>
  	<h1>Rooster <br />King</h1>
  	 <span>CLICK ANYWHERE TO BEGIN</span>
  	</content>
  </div>