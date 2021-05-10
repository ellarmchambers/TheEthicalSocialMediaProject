//Nav Bar Mobile

  function openMobileNav() {
    document.getElementById('mobileNav').style.display="block";
  }
  function closeMobileNav() {
    document.getElementById('mobileNav').style.display="none";
  }

// window.addEventListener('DOMContentLoaded', ()=>{

//   var btn = document.querySelector('.mobileNavBTN');
//   var menu = document.querySelector('.menu');
  
//   btn.addEventListener('click', ()=>{
//     if (document.querySelector(".nav-bar").style.backgroundColor == "rgb(255, 255, 255)" && document.documentElement.scrollTop < 50 ){
//       document.querySelector(".nav-bar").style.backgroundColor ="transparent";
//     } else if (document.querySelector(".nav-bar").style.backgroundColor =="transparent" && document.documentElement.scrollTop < 50  ) {
//       document.querySelector(".nav-bar").style.backgroundColor = "#ffffff";
//     }
//     menu.classList.toggle('hide');
//   });

//   if(window.innerWidth > 770){
//       btn.classList.add('hide');
//       menu.classList.remove('hide');
//   } else if(window.innerWidth < 770){
//       btn.classList.remove('hide');
//       menu.classList.add('hide');
//       document.querySelector(".nav-bar").style.backgroundColor = "transparent";
//     }
  
//   window.addEventListener('resize', ()=>{
//     if(window.innerWidth > 770){
//         btn.classList.add('hide');
//         menu.classList.remove('hide');
//     } else if(window.innerWidth < 770){
//         btn.classList.remove('hide');
//         menu.classList.add('hide');
//       }
//     });
//   });
  