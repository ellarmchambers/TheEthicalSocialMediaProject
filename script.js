function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').innerHTML = value;
    document.getElementById('number').value = value;
}
