//Nav Bar Mobile

window.addEventListener('DOMContentLoaded', () => {

  var btn = document.querySelector('.mobileNavBTN');
  var menu = document.querySelector('.menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hide');
    console.log('clicked')
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 770) {
      btn.classList.add('hide');
      menu.classList.remove('hide');
    } else if (window.innerWidth < 770) {
      btn.classList.remove('hide');
      menu.classList.add('hide');
    }
  });
});
