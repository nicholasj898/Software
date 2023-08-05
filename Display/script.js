const websiteLink = document.querySelector("a");
websiteLink.addEventListener("click", function(event) {
  event.preventDefault();
  alert("Redirecting to webpage.");
});

const changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", function() {
  const informationDiv = document.querySelector(".information");
  // Generate a random color in hexadecimal format
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  informationDiv.style.backgroundColor = randomColor;
});
