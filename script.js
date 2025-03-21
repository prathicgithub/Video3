const password = "123456"; // Set the password here

// Function to check the entered password
function checkPassword() {
  const enteredPassword = document.getElementById("password").value;
  if (enteredPassword === password) {
    document.getElementById("passwordModal").style.display = "none"; // Hide password modal
    document.getElementById("videoContainer").style.display = "block"; // Show video
  } else {
    alert("Incorrect password!"); // Alert if password is incorrect
  }
}

// When the page loads, show the password modal
window.onload = function () {
  document.getElementById("passwordModal").style.display = "flex";
};

// Function for the overlay button action
function overlayButtonAction() {
  alert("Overlay button clicked!");
  // You can replace this with any action you want the button to perform
}

// Function to open a specific video in full-screen mode
function openVideo(videoId) {
  document.getElementById("videoContainer").style.display = "block";
  const videoUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3&cc_load_policy=0&disablekb=1`;
  document.getElementById("videoPlayer").src = videoUrl;
}
