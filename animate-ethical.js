// On Scroll Animations
var adoptionFeaturesAnimation = document.querySelector('#adoption-features-animation')
var darkPatternsAnimation = document.querySelector('#dark-patterns-animation')
var socialMediaAnalysisAnimation = document.querySelector('#social-media-analysis-animation')

// var instagramAnimation = document.querySelector('#instagram-animation')
// var snapchatAnimation = document.querySelector('#snapchat-animation')
// var facebookAnimation = document.querySelector('#facebook-animation')
// var productSocialMediaAnimation = document.querySelector('#product-social-media-animation')
// var utopiaDystopiaAnimation = document.querySelector('#utopia-dystopia-animation')

function animateOnScroll(element){
  element.classList.remove('hide-row');
  element.classList.add('fadeInUp');
}

window.onscroll = function() {

  if (document.documentElement.scrollTop > 300 && document.documentElement.scrollTop < 1800) { 
    animateOnScroll(adoptionFeaturesAnimation);
  } else if (document.documentElement.scrollTop > 1800 && document.documentElement.scrollTop < 3000){
    animateOnScroll(darkPatternsAnimation);
  } else if (document.documentElement.scrollTop > 3000){
    animateOnScroll(socialMediaAnalysisAnimation);
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