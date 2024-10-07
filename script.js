// Example JavaScript to add functionality to the search bar
document
  .querySelector(".search-bar button")
  .addEventListener("click", function () {
    const query = document.querySelector(".search-bar input").value;
    alert("Search functionality coming soon! Query: " + query);
  });

function searchProperties() {
  const location = document.getElementById("search-location").value;
  const propertyType = document.getElementById("property-type").value;
  const priceRange = document.getElementById("price-range").value;

  alert(
    `Searching properties in: ${location}, Type: ${propertyType}, Price Range: ${priceRange}`
  );
  // Placeholder for search logic to filter properties
}

function searchRentalProperties() {
  const location = document.getElementById("search-location-rent").value;
  const propertyType = document.getElementById("property-type-rent").value;
  const priceRange = document.getElementById("price-range-rent").value;

  alert(
    `Searching rental properties in: ${location}, Type: ${propertyType}, Price Range: ${priceRange}`
  );
  // Placeholder for search logic to filter properties
}

document
  .getElementById("property-form")
  .addEventListener("submit", function (event) {
    // Get form fields
    const listingType = document.getElementById("listing-type").value;
    const propertyType = document.getElementById("property-type").value;
    const erfSize = document.getElementById("erf-size").value;
    const address = document.getElementById("address").value;
    const suburb = document.getElementById("suburb").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;
    const sellerName = document.getElementById("seller-name").value;
    const sellerEmail = document.getElementById("seller-email").value;
    const sellerMobile = document.getElementById("seller-mobile").value;
    const listPrice = document.getElementById("list-price").value;
    const listingHeading = document.getElementById("listing-heading").value;
    const listingDescription = document.getElementById(
      "listing-description"
    ).value;

    // Basic form validation
    if (
      !listingType ||
      !propertyType ||
      !erfSize ||
      !address ||
      !suburb ||
      !city ||
      !province ||
      !sellerName ||
      !sellerEmail ||
      !sellerMobile ||
      !listPrice ||
      !listingHeading ||
      !listingDescription
    ) {
      event.preventDefault(); // Prevent form submission
      alert("Please fill in all required fields.");
      return false;
    }

    // You can also add additional validations here (e.g., valid email, number format, etc.)
  });

// Contact Agent Button
document.querySelectorAll(".contact-agent-btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Contact form or action for the agent will be triggered.");
  });
});

// Remove favourite listing
document.querySelectorAll(".remove-favourite-btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert("This property will be removed from your favourites.");
    // Code to remove the property from the favourites (e.g., update the database or local storage)
  });
});

// Edit wishlist
document.querySelectorAll(".edit-wishlist-btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert("You will be able to edit this wishlist.");
    // Code to open wishlist editing functionality (e.g., a form or a popup)
  });
});

// Remove wishlist
document.querySelectorAll(".remove-wishlist-btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert("This wishlist will be removed.");
    // Code to remove the wishlist (e.g., update the database or local storage)
  });
});

// Toggle between login and sign-up forms
document.getElementById("signupLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
});

document.getElementById("loginLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
});

// Login form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Perform validation and authentication (to be connected to backend)
  if (email && password) {
    alert("Logging in...");
    // Redirect or handle login
  } else {
    alert("Please fill out all fields.");
  }
});

// Sign-up form submission
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById(
    "signup-confirm-password"
  ).value;

  if (email && password && confirmPassword) {
    if (password === confirmPassword) {
      alert("Account created successfully!");
      // Proceed with account creation
    } else {
      alert("Passwords do not match.");
    }
  } else {
    alert("Please fill out all fields.");
  }
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const visibility = navLinks.getAttribute("data-visible");

  if (visibility === "false") {
    navLinks.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navLinks.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});
