// Nav Bar - Small Menu

window.addEventListener('DOMContentLoaded', ()=>{

//Nav Bar Mobile

var btn = document.querySelector('.mobileNavBTN');
var menu = document.querySelector('.menu');

btn.addEventListener('click', ()=>{
  menu.classList.toggle('hide');
});

window.addEventListener('resize', ()=>{
  if(window.innerWidth > 770){
      btn.classList.add('hide');
      menu.classList.remove('hide');
  } else if(window.innerWidth < 770){
      btn.classList.remove('hide');
      menu.classList.add('hide');
    }
  });
});

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

//Infinite Scroll Page - TikTok

var section = document.getElementsByClassName('tiktok-infinite')[0] //Setting the loop for the TikTok infinite scroll example
section.addEventListener('scroll', () => {
  // console.log(section.scrollTop, (section.scrollHeight - section.clientHeight));
  if (section.scrollTop == 691){
    section.scrollTop = 0;
    
  }
})