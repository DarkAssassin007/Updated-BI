function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("errorMessage");

  // Simple validation
  if (username === "admin" && password === "123") {
    // Login successful
    errorMessage.textContent = "";
    window.location.href = "summary.html"; // Redirect to summary page ✅
    return false;
  } else {
    // Show error
    errorMessage.textContent = "Invalid username or password!";
    return false;
  }
}
