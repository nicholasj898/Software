const websiteLink = document.querySelector("a");
websiteLink.addEventListener("click", function(event) {
  event.preventDefault();
  alert("Redirecting to webpage.");
});

const changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", function() {
  const informationDiv = document.querySelector(".information");
  //Generate a random color in hexadecimal format
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  informationDiv.style.backgroundColor = randomColor;
});

const changeFontButton = document.getElementById("changeFontButton");
changeFontButton.addEventListener("click", function() {
  const informationDiv = document.querySelector(".information");
  //Generate a random font family
  const fonts = ["Arial, sans-serif", "Times New Roman, serif", "Courier New, monospace", "Verdana, sans-serif", "Georgia, serif", "Comic Sans MS, cursive"];
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  informationDiv.style.fontFamily = randomFont;
});

  //Change Name
const changeTextButton = document.getElementById("changeNameButton");
changeTextButton.addEventListener("click", function() {
  const newName = document.getElementById("changeText1").value;
  const nameElement = document.getElementById("name");
  const positionElement = document.getElementById("position");
  nameElement.textContent = newName;
});

  //Change Position
const changePosButton = document.getElementById("changePositionButton");
changePosButton.addEventListener("click", function() {
  const newName = document.getElementById("changeText2").value;
  const nameElement = document.getElementById("position");
  const positionElement = document.getElementById("position");
  nameElement.textContent = newName;
});

const changeNumberButton = document.getElementById("changeNumberButton");
changeNumberButton.addEventListener("click", function() {
  const newName = document.getElementById("changeText3").value;
  const nameElement = document.getElementById("number");
  const positionElement = document.getElementById("phone");
  nameElement.textContent = nameElement.textContent = "Phone: " + newName;
});

const changeWebsiteButton = document.getElementById("changeWebsiteButton");
changeWebsiteButton.addEventListener("click", function() {
  const newWebsite = document.getElementById("changeText4").value;
  const websiteElement = document.getElementById("website");
  
  // Update the link's href attribute and text content
  websiteElement.href = newWebsite;  // Set the actual website URL
  websiteElement.textContent = newWebsite;  // Display the website URL as text
});