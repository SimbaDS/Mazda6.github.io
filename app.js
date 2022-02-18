/* slider */
$(document).ready(function(){
  

  $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});

  document.getElementById('form--1').reset();
  document.getElementById('form--2').reset();
  document.getElementById('form--3').reset();
  document.getElementById('form--4').reset();
  document.getElementById('form--5').reset();
  document.getElementById('form--6').reset();


/*gallery*/
const slides = document.querySelectorAll(".slide--gallery")

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses()

    slide.classList.add('active')
  })
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active")
  })
}
/* //gallery */
