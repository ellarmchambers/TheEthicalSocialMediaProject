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

  console.log(document.documentElement.scrollTop);

  if (document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 900) { 
    animateOnScroll(adoptionFeatures1Animation);
  } else if (document.documentElement.scrollTop > 900 && document.documentElement.scrollTop < 1400){
    animateOnScroll(adoptionFeaturesTimeline1Animation);
  } else if (document.documentElement.scrollTop > 1400 && document.documentElement.scrollTop < 1700){
    animateOnScroll(adoptionFeatures2Animation);
  } else if (document.documentElement.scrollTop > 1700 && document.documentElement.scrollTop < 2100){
    animateOnScroll(adoptionFeaturesTimeline2Animation);
  } else if (document.documentElement.scrollTop > 2100 && document.documentElement.scrollTop < 3200){
    animateOnScroll(darkPatternsAnimation);
  } else if (document.documentElement.scrollTop > 3200 && document.documentElement.scrollTop < 3600 ){
    animateOnScroll(socialMediaAnalysisAnimation);
  } else if (document.documentElement.scrollTop > 3600 && document.documentElement.scrollTop < 4200){
    animateOnScroll(instagramAnimation);
  } else if (document.documentElement.scrollTop > 4200 && document.documentElement.scrollTop < 4600){
    animateOnScroll(snapchatAnimation);
  } else if (document.documentElement.scrollTop > 4600 && document.documentElement.scrollTop < 5100){
    animateOnScroll(facebookAnimation);
  } else if (document.documentElement.scrollTop > 5100 && document.documentElement.scrollTop < 5900){
    animateOnScroll(productSocialMediaAnimation);
  } else if (document.documentElement.scrollTop > 5800 ){
    animateOnScroll(utopiaDystopiaAnimation);
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