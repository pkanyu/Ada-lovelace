// Assuming you have this line in your existing code to select project images
const projectImages = document.querySelectorAll(".portrait, .project-image");

// Adding an event listener for the click event on each project image
projectImages.forEach((image) => {
  image.addEventListener("click", () => {
    // Toggle a CSS class or modify the style attribute here
    image.classList.toggle("clicked");
  });
});

const bodyElement = document.body;

function toggleDarkMode() {
  // Toggle a class on the body to switch between light and dark mode
  bodyElement.classList.toggle("dark-mode");
}

