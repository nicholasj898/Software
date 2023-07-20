const websiteLink = document.querySelector("a");
websiteLink.addEventListener("click", function(event) {
  event.preventDefault();
  alert("Redirecting to webpage.");
});