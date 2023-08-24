document.addEventListener("DOMContentLoaded", function () {
  var navbarToggle = document.getElementById("navbarToggleBtn");
  var navbarNav = document.getElementById("navbarNav");

  navbarToggle.addEventListener("click", function () {
    navbarNav.classList.toggle("show");
  });
});


document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-carousel', {
      type: 'loop', 
      perPage: 3,   
      perMove: 1,   
      autoplay: true, 
      interval: 3000, 
      breakpoints: {
          768: {
              perPage: 1, 
          }
      }
  }).mount();
});