// On Scroll Animations
var testingAnimation = document.querySelector('#testing-animation')

function animateOnScroll(element){
  element.classList.remove('hide-row');
  element.classList.add('fadeInUp');
}

window.onscroll = function() {

  if (document.documentElement.scrollTop > 1200 && document.documentElement.scrollTop < 2000) { 
    animateOnScroll(testingAnimation);
  } else if (document.documentElement.scrollTop > 2000){
    console.log("yes");
  }

//Nav Bar

  scrollFunction()}; //Setting up the scroll funtion for re-sizing of nav bar
  function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { //When scroll past 80px change the below styles
    document.querySelector(".nav-bar").style.backgroundColor = "#ffffff"; //Setting white background
    document.querySelector(".nav-design").style.padding = "20px 45px"; //Changing the ammount of padding on the nav items
    document.querySelector(".nav-ethical").style.padding = "20px 45px";
    document.querySelector(".nav-logo").style.width = "60px"; //Changing width of the logo
  } else {
    document.querySelector(".nav-bar").style.backgroundColor = "transparent"; 
    document.querySelector(".nav-design").style.padding = "35px 45px";
    document.querySelector(".nav-ethical").style.padding = "35px 45px";
    document.querySelector(".nav-logo").style.width = "90px";
  }
}