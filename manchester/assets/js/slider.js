const slider = document.querySelector(".slider");
const sliderMain = document.querySelector(".slider__main");
const sliderItems = document.querySelectorAll(".slider__item");
const dotsItem = document.querySelectorAll(".slider__dot-item");
const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderLength = sliderItems.length;
const sliderWidth = sliderItemWidth * sliderLength;
let positionX = 0;
let index = 0; // get dot index


[...dotsItem].forEach(item => item.addEventListener("click", function (event) { // click dot item
    [...dotsItem].forEach(dot => dot.classList.remove("active")); // remove dot item have active class
    const dotIndex = parseInt(event.target.dataset.index); // get dot index is clicked
    positionX = -1 * dotIndex * sliderItemWidth; // return position to move next slide
    sliderMain.style.transform = `translateX(${positionX}px)`; // move next slide
    event.target.classList.add("active"); // add class active to dot item of slide
    index = dotIndex; // assign index to dot index
}));


const nextSlider = () => {
    positionX = positionX - sliderItemWidth;
    sliderMain.style.transform = `translateX(${positionX}px)`;
    index++;
    if (index >= sliderLength) {
        index = 0;
        [...dotsItem].forEach(dot => dot.classList.remove("active"));
        dotsItem[index].classList.add("active");
    } else {
        [...dotsItem].forEach(dot => dot.classList.remove("active"));
        dotsItem[index].classList.add("active");

    }
    if (positionX <= -sliderWidth) {
        positionX = 0;
        sliderMain.style.transform = null;

    }
}

setInterval(nextSlider, 7000);


