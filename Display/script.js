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

const changeFontButton = document.getElementById("changeFontButton");
changeFontButton.addEventListener("click", function() {
  const informationDiv = document.querySelector(".information");
  const fonts = ["Arial, sans-serif", "Times New Roman, serif", "Courier New, monospace", "Verdana, sans-serif", "Georgia, serif", "Comic Sans MS, cursive"];
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  informationDiv.style.fontFamily = randomFont;
});

