/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


//var body = document.querySelector("body");
//var y = window.scrollTop;
var title = document.querySelectorAll("header>div:nth-of-type(2)>h1");
//
//function scrollfade() {
//    if (y > 100) {
//    titleOne.style.opacity = "0.5";
//} 
//}
//
//window.addEventListener("scroll", scrollfade);

window.addEventListener("scroll", function(){
  if (window.pageYOffset > 400){
   title[1].classList.add("fadedtitle"); 
      title[2].classList.add("fadedtitle"); 
  }
    
    else if (window.pageYOffset < 400){
    title[0].classList.remove("fadedtitle");
      title[1].classList.remove("fadedtitle");
        title[2].classList.remove("fadedtitle");
  }
    
     if (window.pageYOffset > 8000){
   title[0].classList.add("fadedtitle"); 
         title[1].classList.remove("fadedtitle");
  }
},false);