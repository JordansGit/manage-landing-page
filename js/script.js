// Variables 
let nav = document.querySelector('.header-nav');
let mobileMenu = document.querySelector('.mobile-menu');
let closeBtn = document.querySelector('.nav-close-btn');

let form = document.querySelector('.form');
let emailEl = document.querySelector('#email');
let errorMsg = document.querySelector('.form-error-msg');


// Mobile Nav 
mobileMenu.addEventListener('click', function() {
  document.body.classList.add('nav-open-body');
  nav.classList.add('nav-open-nav');
  mobileMenu.classList.add('hide');
  closeBtn.classList.add('show');
})

closeBtn.addEventListener('click', function() {
  document.body.classList.remove('nav-open-body');
  nav.classList.remove('nav-open-nav');
  mobileMenu.classList.remove('hide');
  closeBtn.classList.remove('show');
})


// Form Validation 
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkEmail();
});

const isRequired = function(email) {
  if (email == '') {
    email = false;
  } else {
    email = true;
  }  
  return email; // return true if email is not an empty string 
}; 

const isEmailValid = (email) => {
  const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailFormat.test(email); // return true if email matches the specified email format.  i.e. xyz@domain.net. 
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  
  if (!isRequired(email) || !isEmailValid(email)) {
    errorMsg.classList.add('show');
  } else {
    errorMsg.classList.remove('show'); 
    valid = true;
  }
  return valid; // return true if email is provided and it's valid, show error msg if it returns false. 
}

// Image Slideshow 
let slideIndex = 1;
showSlides(slideIndex); // run showSlides function with n as 1st image. 

function currentSlide(n) {
  showSlides(slideIndex = n); // get n from html onclick, then run the showSlides function with n of the particular image. 
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1} // if current slide = the last slide, then when you click next btn, it will go back to 1st slide... this doesn't do anything for me as I've removed prev and next buttons. 
  if (n < 1) {slideIndex = slides.length} // same as above but in reverse, clicking prev btn on slide 1 = go to slide 4. 

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // make all .slide class have a display: none;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // remove .active from all .dot classes. 
  }
  slides[slideIndex-1].style.display = "block";  // only make the currently selected .slide have display: block;
  dots[slideIndex-1].className += " active"; // only make the currently selected dot have an .active class. 
}
