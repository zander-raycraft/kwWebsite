function openSlideshow(slideIndex) {
  var slides = document.querySelectorAll(".imageContainer1 img");
  if (slides.length === 0) {
    return;
  }
  document.getElementById("slideshow-img").src = slides[slideIndex-1].src;
  document.getElementById("slideshow").style.display = "flex";
  slideIndex = parseInt(slideIndex);
}


function closeSlideshow() {
  document.getElementById("slideshow").style.display = "none";
}

var slideIndex = 1;
showSlide(slideIndex);

function prevSlide() {
  if(slides == ".imageContainer1 img"){
    showSlide(slideIndex -= 1);
  }
  else if(slides == ".imageContainer2 img"){ 
    showSlide2(slideIndex -= 1);
  }
  else if(slides == ".artContainer1 img"){
    showSlide3(slideIndex -= 1);
  }
}

function nextSlide() {
  if(slides == ".imageContainer1 img"){
    showSlide(slideIndex += 1);
  }
  else if(slides == ".imageContainer2 img"){ 
    showSlide(slideIndex += 1);
  }
  else if(slides == ".artContainer1 img"){
    showSlide(slideIndex += 1);
  }
}

function showSlide(index) {
  var slides = document.querySelectorAll(".imageContainer1 img");
  if (slides.length === 0) {
    return;
  }
  slideIndex = index;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  } else if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  document.getElementById("slideshow-img").src = slides[slideIndex-1].src;
}

//Making the second slideshow
function openSlideshow2(slideIndex) {
  var slides = document.querySelectorAll(".imageContainer2 img");
  if (slides.length === 0) {
    return;
  }
  document.getElementById("slideshow2-img").src = slides[slideIndex-1].src;
  document.getElementById("slideshow2").style.display = "flex";
  slideIndex = parseInt(slideIndex);
}


function closeSlideshow2() {
  document.getElementById("slideshow2").style.display = "none";
}

var slideIndex = 1;
showSlide2(slideIndex);

function prevSlide2() {
  showSlide2(slideIndex -= 1);
}

function nextSlide2() {
  showSlide2(slideIndex += 1);
}

function showSlide2(index) {
  var slides = document.querySelectorAll(".imageContainer2 img");
  if (slides.length === 0) {
    return;
  }
  slideIndex = index;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  } else if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  document.getElementById("slideshow2-img").src = slides[slideIndex-1].src;
}

//Makin the slideshow for the art exhibit
function openSlideshow3(slideIndex) {
  var slides = document.querySelectorAll(".artContainer1 img");
  if (slides.length === 0) {
    return;
  }
  document.getElementById("slideshow3-img").src = slides[slideIndex-1].src;
  document.getElementById("slideshow3").style.display = "flex";
  slideIndex = parseInt(slideIndex);
}


function closeSlideshow3() {
  document.getElementById("slideshow3").style.display = "none";
}

var slideIndex = 1;
showSlide3(slideIndex);

function prevSlide3() {
  showSlide3(slideIndex -= 1);
}

function nextSlide3() {
  showSlide3(slideIndex += 1);
}

function showSlide3(index) {
  var slides = document.querySelectorAll(".artContainer1 img");
  if (slides.length === 0) {
    return;
  }
  slideIndex = index;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  } else if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  document.getElementById("slideshow3-img").src = slides[slideIndex-1].src;
}

//Locating the containers
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowLeft') {
      prevSlide();
    } else if (event.code === 'ArrowRight') {
      nextSlide();
    }
  });
    const homeButton = document.getElementById("homeButton");
    const aboutButton = document.getElementById("aboutButton");
    const designButton = document.getElementById("designButton");
    const artButton = document.getElementById("artButton");

    //Containers
    const archContainer = document.getElementById("architectContainer");
    const artContainer = document.getElementById("artContainer");
    const aboutContainer = document.getElementById("aboutContainer");


    designButton.addEventListener("click", () => {
        archContainer.style.display = 'block';
        //turning off the other containers
        artContainer.style.display = "none";
        aboutContainer.style.display = "none";
    });

    artButton.addEventListener("click", () => {
        artContainer.style.display = 'block';
        //Turning the other containers off
        archContainer.style.display = "none";
        aboutContainer.style.display = "none";
    });

    aboutButton.addEventListener("click", () => {
        aboutContainer.style.display = 'block';
        //turning off the other containers
        archContainer.style.display = "none";
        artContainer.style.display = "none";
    });

    homeButton.addEventListener("click", () => {
        archContainer.style.display = "none";
        artContainer.style.display = "none";
        aboutContainer.style.display = "none";

    });
    //Making the buttons to alternate windows
});


  