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
  if (audio.paused) {
    audio.play();
  }else{
    audio.currentTime = 0
  }
  button.getElementsByClassName('application-badge-new')[0].style.display = 'block'; //shows badge on click
}