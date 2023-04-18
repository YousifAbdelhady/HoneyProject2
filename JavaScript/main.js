// Button toggle

let navBtn = document.querySelector(".header .nav-box");
let menueList = document.querySelector(".header .new");

navBtn.addEventListener('click', () => {
  menueList.classList.toggle('clicked');
})

// function removeClass() {
//   menueList.classList.remove('clicked');
// }
// window.onscroll = removeClass();
// // change header color on scroll

// let header = document.querySelector('.header');


// // overLay 

// let Layer = document.querySelector('.overlay');

// window.onload = setInterval( function () {
//   Layer.classList.add('vanish');
//   Layer.classList.add('none');
// }, 3000);


// Dark Mode 
var DarkBtn = document.getElementById('darkbtn'),
  darkText = document.querySelector('.dark-btn span');

DarkBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark');
  if (document.body.className === 'dark') {
    darkText.textContent = 'On'
  } else {
    darkText.textContent = 'Off'
  }
})
