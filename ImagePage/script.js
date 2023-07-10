var images = [
    "image-1.jpg",
    "image-2.jpg",
    "image-3.jpg",
    "image-4.jpg"
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    var imageElement = document.getElementById("randomImage");
    imageElement.addEventListener("click", changeImage);
  });
  
  function changeImage() {
    var randomIndex = Math.floor(Math.random() * images.length);
    var imageElement = document.getElementById("randomImage");
    imageElement.src = images[randomIndex];
  }