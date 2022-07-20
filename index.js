let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

const close = document.querySelector('.btn--close-modal');
const modal = document.querySelector('.modal')
const open = document.querySelector('.nav-sign').addEventListener('click', function(){
  modal.style.display = "block"
})

document.querySelector('.btn-primary').addEventListener('click', function(){
  modal.style.display = "block"
})

document.querySelector('.modal-btn').addEventListener('click', function(){
  modal.style.display = "none";
})

document.querySelector('.modal-open').addEventListener('click', function(e){
  e.preventDefault()
  modal.style.display = "block";
})

// open.addEventListener('onclick', function(){
//   modal.style.display = "block";
//   console.log("clicked")
// })

close.addEventListener('click', function(){
  modal.style.display = "none";
})
