let slideIndex = 0;

let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

if(slides.length != 0){
    slideshow();
}

function slideshow(){
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(slideshow, 5000); // Change image every 5 seconds
}

//checks window size

const drivelinks = document.getElementsByClassName("drivelink");
const protolinks = document.getElementsByClassName("protolink");
const worksBackgrounds = document.getElementsByClassName("worksBackground");

if (window.matchMedia("(max-width: 450px)").matches) {
    for(i=0; i < drivelinks.length; i++){
      drivelinks[i].style.display = "none";
      
      let newlink = document.createElement("a");
      newlink.innerHTML = drivelinks[i].innerHTML;
      newlink.href = drivelinks[i].href;
      newlink.classList.add("newdrivelink");
      
      worksBackgrounds[i].appendChild(newlink);
      
    }
    for(i=0; i < protolinks.length; i++){
      protolinks[i].style.display = "none";

      let newlink = document.createElement("a");
      newlink.innerHTML = protolinks[i].innerHTML;
      newlink.href = protolinks[i].href;
      newlink.classList.add("newprotolink");
      
      worksBackgrounds[i+1].appendChild(newlink);
    }
  } else {
    for(i=0; i < drivelinks.length; i++){
      drivelinks[i].style.display = "initial";
    }
    for(i=0; i < protolinks.length; i++){
      protolinks[i].style.display = "initial";
    }
  }