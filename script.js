// Add your custom JavaScript code below this line

// Toggle the navbar's dropdown menu on small screens
function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }
}

// Validate the contact form before submission
function validateForm() {
  // Get the form elements
  var name = document.forms["contactForm"]["name"];
  var email = document.forms["contactForm"]["email"];
  var message = document.forms["contactForm"]["message"];

  // Validate the name field
  if (name.value == "") {
    window.alert("Please enter your name.");
    name.focus();
    return false;
  }

  // Validate the email field
  if (email.value == "") {
    window.alert("Please enter a valid email address.");
    email.focus();
    return false;
  }

  // Validate the message field
  if (message.value == "") {
    window.alert("Please enter a message.");
    message.focus();
    return false;
  }

  // If all fields are valid, submit the form
  return true;
}
