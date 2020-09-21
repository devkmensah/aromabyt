
// SLIDER
const sliders = document.querySelectorAll('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');
const autoScroll = true;
const clickPause = false;
const clickPlay = true;
const intervalTime = 7000;
let sliderInterval;

const nextSlider = () => {
    // Get Current Class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        sliders[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlider = () => {
    // Get Current Class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // check for prev slide
    if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last
        sliders[sliders.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// this section is for when the page or scrolling function is set to auto scroll and the cont auto is = true, if you do not want the butons to auto scroll, comment it out
// Auto slide
if (autoScroll) {
    // Run next slide at interval time
    sliderInterval = setInterval(nextSlider, intervalTime);
}

// Button events
nextBtn.addEventListener('click', e => {
    nextSlider();

    // this section is to make the images move smoothly rather than fast when the buttons are set to auto scroll, it will wait 5s for the next image to come in as is been set for the autos croll button
    if (autoScroll) {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlider, intervalTime);
    }
});

prevBtn.addEventListener('click', e => {
    prevSlider();
    // this section is to make the images move smoothly rather than fast when the buttons are set to auto scroll, it will wait 5s for the next image to come in as is been set for the autos croll button
    if (autoScroll) {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlider, intervalTime);
    }
});



// HAMBURGER MENU
// const openHamburger = document.querySelector('.hamburger');
// const navBtnClose = document.querySelector('.navclose');
// const hiddenNav = document.querySelector('#navigation');
// console.log(openHamburger, hiddenNav, navBtnClose);

// openHamburger.addEventListener('click', () => {
//     hiddenNav.style.width = "100%";
// })

// navBtnClose.addEventListener('click', () => {
//     hiddenNav.style.width = "0%";
// })
