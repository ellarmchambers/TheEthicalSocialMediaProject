//Nav Bar

window.onscroll = function() {scrollFunction()}; //Setting up the scroll funtion for re-sizing of nav bar
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

// Animations

// window.onscroll = function() {scrollFunction()}; //Setting up the scroll funtion for re-sizing of nav bar
// function scrollFunction() {
//   if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) { 
//     document.querySelector(".facebook").style.visability = "visible"; 
//     document.querySelector(".facebook-phone").style.visability = "visible"; 
// }
// }


//Notification Page

function notifyMeOld(appold){ //function for old notifications
  var button = document.getElementById(appold)
  var audio = button.getElementsByTagName('audio')[0];
  if (audio.paused) { //allows audio to restart when button is click
    audio.play();
  }else{
    audio.currentTime = 0
  }
  var value = parseInt(button.getElementsByClassName('application-badge-old')[0].value); //increased the badge number on button click
  value = isNaN(value) ? 0 : value;
  value++;
  button.getElementsByClassName('application-badge-old')[0].innerHTML = value; //printing value into HTML
  button.getElementsByClassName('application-badge-old')[0].value = value; //storing the value
  button.getElementsByClassName('application-badge-old')[0].style.display = 'block'; //shows badge on click
}

function notifyMeNew(appnew) { //function for new notifications
  var button = document.getElementById(appnew)
  var audio = button.getElementsByTagName('audio')[0];
  if (audio.paused) {  //allows audio to restart when button is click
    audio.play();
  }else{
    audio.currentTime = 0
  }
  button.getElementsByClassName('application-badge-new')[0].style.display = 'block'; //shows badge on click
}