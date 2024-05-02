// Get the navbar
var navbar = document.querySelector(".navbar");

// Get the hamburger icon
var hamburger = document.querySelector(".hamburger");

// Add a click event listener to the hamburger icon
hamburger.addEventListener("click", function() {
  // Toggle the "responsive" class on the navbar
  navbar.classList.toggle("responsive");
});



