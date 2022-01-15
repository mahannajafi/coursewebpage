
// **********humberg menu**************
const menu=document.querySelector('.fa-bars')
const menuOptions=document.querySelector('.navbar__container')
const menuClose=document.querySelector('.header__close')
menu.addEventListener('click',()=>{
  menuOptions.classList.add('navbar__container--show')
  menuClose.classList.add('flex')
}
)
menuClose.addEventListener('click',()=>{
  menuOptions.classList.remove('navbar__container--show')
  menuClose.classList.remove('flex')
})

//****************login form *********************
const user=document.querySelector('.fa-user')
const userAdd=document.querySelector('.form')
const userClose=document.querySelector('.form__close')

user.addEventListener('click',()=>{
  userAdd.style.display='inline'
})

userClose.addEventListener('click',()=>{
  userAdd.style.display='none'
})

const login=document.querySelectorAll('.form__button')
const loginShow=document.querySelector('.form__login')
const registerShow=document.querySelector('.form__register')
const loginArray=[...login]
console.log(loginArray);
loginArray[0].addEventListener('click',()=>{
  loginShow.style.display='inline'
  registerShow.style.display='none'
  loginArray[0].classList.add('form__button--active')
  loginArray[1].classList.remove('form__button--active')

})
loginArray[1].addEventListener('click',()=>{
  loginShow.style.display='none'
  registerShow.style.display='inline'
  loginArray[1].classList.add('form__button--active')
  loginArray[0].classList.remove('form__button--active')

})



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
}


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


