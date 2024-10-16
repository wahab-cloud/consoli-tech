// Get the menu toggle button
const menuToggleButton = document.getElementById("menu-toggle");

// Get the mobile menu div
const mobileMenu = document.getElementById("mobile-menu");

// Add a click event listener to the menu toggle button
menuToggleButton.addEventListener("click", function () {
	// Toggle the hidden class on the mobile menu
	mobileMenu.classList.toggle("hidden");
});
