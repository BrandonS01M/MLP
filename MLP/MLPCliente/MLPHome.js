const sliderA = document.querySelector("#sliderA");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

sliderA.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    sliderA.style.marginLeft = "-200%";
    sliderA.style.transition = "all .5s";
    setTimeout(function(){
        sliderA.style.transition = "none";
        sliderA.insertAdjacentElement('beforeend', sliderSectionFirst);
        sliderA.style.marginLeft = "-100%";
    },500);
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    sliderA.style.marginLeft = "0%";
    sliderA.style.transition = "all 0.5s";
    setTimeout(function(){
        sliderA.style.transition = "none";
        sliderA.insertAdjacentElement('afterbegin', sliderSectionLast);
        sliderA.style.marginLeft = "-100%";
    },500);
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});


setInterval(function(){
    Next();
},7000);
