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
  slides[slideIndex -1].style.display = "block";
  setTimeout(showSlides, 10000)
  dots[slideIndex -1].className += " active";
}

setInterval(() => plusSlides(1), 10000);



var slideIndexanime = 1;
showSlidesanime(slideIndexanime);

// Next/previous controls
function plusSlidesanime(n) {
  showSlidesanime(slideIndexanime += n);
}

// Thumbnail image controls
function currentSlideanime(n) {
  showSlidesanime(slideIndexanime = n);
}

function showSlidesanime(n) {
  var i;
  var slidesanime = document.getElementsByClassName("mySlides-anime");
  var dotsanime = document.getElementsByClassName("dot-anime");
  if (n > slidesanime.length) {slideIndexanime = 1}
  if (n < 1) {slideIndexanime = slidesanime.length}
  for (i = 0; i < slidesanime.length; i++) {
      slidesanime[i].style.display = "none";
  }
  for (i = 0; i < dotsanime.length; i++) {
      dotsanime[i].className = dotsanime[i].className.replace(" active-anime", "");
  }
  slidesanime[slideIndexanime -1].style.display = "block";
  setTimeout(showSlidesanime, 10000)
  dotsanime[slideIndexanime -1].className += " active-anime";
}

setInterval(() => plusSlidesanime(1), 15000);

const popupOverlay = document.getElementById("popup-overlay");
const popup = document.getElementById("popup");
 
function showPopup() {
  popupOverlay.style.display = "block";
}
 
function hidePopup() {
  popupOverlay.style.display = "none";
}
 
/* popupOverlay.addEventListener("click", hidePopup);
popup.addEventListener("click", (event) => { event.stopPropagation(); }); */


/* ну и зачем я это делал бл а ????? */