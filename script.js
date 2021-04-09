function notifyMe(app){
  var button = document.getElementById(app)
  var audio = button.getElementsByTagName('audio')[0];
  if (audio.paused) {
    audio.play();
  }else{
    audio.currentTime = 0
  }
  var value = parseInt(button.getElementsByClassName('application-badge')[0].value);
  value = isNaN(value) ? 0 : value;
  value++;
  button.getElementsByClassName('application-badge')[0].innerHTML = value;
  button.getElementsByClassName('application-badge')[0].value = value;
}