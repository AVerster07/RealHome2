let slideIndex = 1; // Initialize the first slide as active
showSlides(slideIndex); // Show the first slide

// Function to move to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n); // Increment/decrement the index and show the corresponding slide
}

// Function to go to a specific slide (when clicking the dots)
function currentSlide(n) {
  showSlides(slideIndex = n); // Set the slideIndex to the clicked dot and display the corresponding slide
}

// Main function that controls the display of slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); // Get all slide elements
  let dots = document.getElementsByClassName("dot"); // Get all dots
  
  if (n > slides.length) { slideIndex = 1; } // If the index exceeds the number of slides, go back to the first slide
  if (n < 1) { slideIndex = slides.length; } // If the index is less than 1, go to the last slide

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark the corresponding dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
