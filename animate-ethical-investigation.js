//ANIMATION - ETHICAL INVESTIGATION PAGE

// Sections - onscroll animation

var adoptionFeatures1Animation = document.querySelector('#adoption-features1-animation')
var adoptionFeaturesTimeline1Animation = document.querySelector('#adoption-features-timeline1-animation')
var adoptionFeatures2Animation = document.querySelector('#adoption-features2-animation')
var adoptionFeaturesTimeline2Animation = document.querySelector('#adoption-features-timeline2-animation')
var darkPatternsAnimation = document.querySelector('#dark-patterns-animation')
var socialMediaAnalysisAnimation = document.querySelector('#social-media-analysis-animation')
var instagramAnimation = document.querySelector('#instagram-animation')
var snapchatAnimation = document.querySelector('#snapchat-animation')
var facebookAnimation = document.querySelector('#facebook-animation')
var productSocialMediaAnimation = document.querySelector('#product-social-media-animation')
var utopiaDystopiaAnimation = document.querySelector('#utopia-dystopia-animation')

function animateOnScroll(element){
  element.classList.remove('hide-row');
  element.classList.add('fadeInUp');
}

window.onscroll = function() {

  if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 800) { 
    animateOnScroll(adoptionFeatures1Animation);
  } else if (document.documentElement.scrollTop > 800 && document.documentElement.scrollTop < 1300){
    animateOnScroll(adoptionFeaturesTimeline1Animation);
  } else if (document.documentElement.scrollTop > 1300 && document.documentElement.scrollTop < 1500){
    animateOnScroll(adoptionFeatures2Animation);
  } else if (document.documentElement.scrollTop > 1500 && document.documentElement.scrollTop < 1900){
    animateOnScroll(adoptionFeaturesTimeline2Animation);
  } else if (document.documentElement.scrollTop > 1900 && document.documentElement.scrollTop < 3000){
    animateOnScroll(darkPatternsAnimation);
  } else if (document.documentElement.scrollTop > 3000 && document.documentElement.scrollTop < 3300 ){
    animateOnScroll(socialMediaAnalysisAnimation);
  } else if (document.documentElement.scrollTop > 3300 && document.documentElement.scrollTop < 3600){
    animateOnScroll(instagramAnimation);
  } else if (document.documentElement.scrollTop > 3600 && document.documentElement.scrollTop < 3900){
    animateOnScroll(snapchatAnimation);
  } else if (document.documentElement.scrollTop > 3900 && document.documentElement.scrollTop < 4300){
    animateOnScroll(facebookAnimation);
  } else if (document.documentElement.scrollTop > 4300 && document.documentElement.scrollTop < 5100){
    animateOnScroll(productSocialMediaAnimation);
  } else if (document.documentElement.scrollTop > 5100 ){
    animateOnScroll(utopiaDystopiaAnimation);
  }
  

//Nav Bar - onscroll animation

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