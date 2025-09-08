let slideIndex = 0;
let timeout;

let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

if(slides.length != 0){
    slideshow();
}

function slideshow(){
    clearTimeout(timeout);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    timeout = setTimeout(slideshow, 5000); // Change image every 7 seconds
}

for(let dot of dots){
    dot.addEventListener("click", function(e){
        let currentSlide = Array.from(document.getElementById("dotDiv").children).indexOf(e.target); //gets the position of the dot

        slideIndex = currentSlide;
        slideshow();
    })
}


/*javascript for the nav bar to be able to activate. Code from https://codepen.io/robdongas/pen/MWvKMRp*/
const toggler = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
})
//makes the nav menu go back after to where it was after the user clicks on a link in the mobile display
//   document.querySelector(".menu").classList.toggle("active");
//   document.querySelector('.menu-toggle').classList.toggle("active");