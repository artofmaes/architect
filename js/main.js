// Hamburgermenu
//Animated bergers: jonsuh.com/hamburgers
$(document).ready(function(){
   $(".menu").click(function(){
       $(".slide").toggleClass("opennav");
       $(".menu").toggleClass("actief");
   });
});

// Parallax : PixelCog Inc : http://pixelcog.github.io/parallax.js
$(".parallax-header").parallax({
    imageSrc: "images/header-bg.jpg"
});