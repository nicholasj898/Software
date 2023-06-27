// JavaScript file: random_image.js

var images = [
    "image-1.jpg",
    "image-2.jpg",
    "image-3.jpg",
    "image-4.jpg"
  ];
  
  function changeImage(imageElement) {
    var randomIndex = Math.floor(Math.random() * images.length);
    imageElement.src = images[randomIndex];
  }