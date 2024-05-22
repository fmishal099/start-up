function nextSlide() {
  // Trigger the click event on the carousel control button to move to the next slide
  document.querySelector('#carouselExampleControls .carousel-control-next').click();
}

// Set interval to move to the next slide every 5000 milliseconds (5 seconds)
setInterval(nextSlide, 5000);