/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var img1 = document.querySelector("main>img:nth-of-type(1)");
var img2 = document.querySelector("main>img:nth-of-type(2)");
var img3 = document.querySelector("main>img:nth-of-type(3)");
var img7 = document.querySelector("main>img:nth-of-type(7)");
var img8 = document.querySelector("main>img:nth-of-type(8)");
var img9 = document.querySelector("main>img:nth-of-type(9)");
var img10 = document.querySelector("main>img:nth-of-type(10)");

window.addEventListener("scroll", function(){
  if (window.pageYOffset >= 1300){
      console.log("check1");
   img1.classList.add("imgappear");
      }
    
    if (window.pageYOffset >= 1700){
   img2.classList.add("imgappear2");   
        console.log("check2");
  }
    
     if (window.pageYOffset >= 2850){
   img3.classList.add("imgappear3");   
        console.log("check3");
  }
    
       if (window.pageYOffset >= 6000){
   img7.classList.add("imgappear7");   
        console.log("check4");
  }
    
        if (window.pageYOffset >= 6160){
   img8.classList.add("imgappear8");   
        console.log("check4");
  }
    
        if (window.pageYOffset >= 6500){
   img9.classList.add("imgappear9");   
        console.log("check4");
  }
    
        if (window.pageYOffset >= 7200){
   img10.classList.add("imgappear10");   
        console.log("check4");
  }
    
    
},false);

console.log(window.pageYOffset);