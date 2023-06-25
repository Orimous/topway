let slideIndex = 1;
let images = document.getElementsByClassName("slider-image");
let arrows = document.getElementsByClassName("slider-arrow");
arrows[0].addEventListener("click", function() {changeSlide(-1)});
arrows[1].addEventListener("click", function() {changeSlide(1)});
function changeSlide(n) {
    slideIndex += n;
    if (slideIndex > images.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = images.length;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[slideIndex-1].style.display = "block";
}