document.addEventListener("DOMContentLoaded", function () {
  var navbarToggle = document.getElementById("navbarToggleBtn");
  var navbarNav = document.getElementById("navbarNav");

  navbarToggle.addEventListener("click", function () {
    navbarNav.classList.toggle("show");
  });
});
