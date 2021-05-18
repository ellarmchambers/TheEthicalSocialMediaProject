//ANIMATION - EDITED IMAGES

// Features - onscroll animation

var featureTwoRow = document.querySelector('#feature-two-row');
var featureThreeRow = document.querySelector('#feature-three-row');

function animateOnScroll(element){
  element.classList.remove('hide-row');
  element.classList.add('fadeInUp');
}

window.onscroll = function() { 
  if (document.documentElement.scrollTop > 600 && document.documentElement.scrollTop < 1400) { 
    animateOnScroll(featureTwoRow);
  } else if (document.documentElement.scrollTop > 1400){
    animateOnScroll(featureThreeRow);
  }
  
//Nav Bar - onscroll animation

  scrollFunction()}; //Setting up the scroll funtion for re-sizing of nav bar
  function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { //When scroll past 80px change the below styles
    document.querySelector(".nav-bar").style.backgroundColor = "#ffffff"; //Setting white background
    document.querySelector(".nav-design").style.padding = "20px 45px"; //Changing the ammount of padding on the nav items
    document.querySelector(".nav-ethical").style.padding = "20px 45px";
    document.querySelector(".nav-design").style.fontSize = "1.5em"; //Reducing the font size
    document.querySelector(".nav-ethical").style.fontSize = "1.5em";
    document.querySelector(".nav-logo").style.width = "55px"; //Changing width of the logo
  } else {
    document.querySelector(".nav-bar").style.backgroundColor = "transparent"; 
    document.querySelector(".nav-design").style.padding = "35px 45px";
    document.querySelector(".nav-ethical").style.padding = "35px 45px";
    document.querySelector(".nav-design").style.fontSize = "1.8em";
    document.querySelector(".nav-ethical").style.fontSize = "1.8em";
    document.querySelector(".nav-logo").style.width = "90px";
  }
}