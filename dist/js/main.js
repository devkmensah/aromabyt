// // Declare variables for the classes & Id's to be selected
// const slides = document.querySelectorAll('.slider');
// const prev = document.querySelector('.previous');
// const next = document.querySelector('.next');
// const intervalTime = 5000;
// const auto = true;
// let slideInterval;
// // console.log(sliders, previousBtn, nextBtn, timeInterval, autoScroll, sliderInterval)

// // Arrow Function for Auto Next Slide
// const nextSlide = () => {
//     // Get Current Class
//     const current = document.querySelector('.current');
//     // Remove the current class from the current element 
//     current.classList.remove('current');
//     // Add the removed current class to the next element sibling
//    if(current.nextElementSibling){
//        current.nextElementSibling.classList.add('current');
//    } else{
//        //    else add the current class to the first element sibling
//        slides[0].classList.add('current');
//    }
// //    Use a method to set time for when each slider should show
//    setTimeout(() => current.classList.remove('current'));
//     // console.log(current)
// }


// // Arrow Function for Auto Previous Slide
// const prevSlide = () => {
//     // Get Current Class
//     const current = document.querySelector('.current');
//     // Remove the current class from the current element 
//     current.classList.remove('current')
//     // Add the removed current class to the previous element sibling
//    if(current.previousElementSibling){
//        current.previousElementSibling.classList.add('current');
//    }else{
//        //    else add the current class to the last element sibling by subtracting 1 from the length of the slider
//     slides[slides.length - 1].classList.add('current');
//    }
// //    Use a method to set time for when each slider should show
//    setTimeout(() => current.classList.remove('current'));
//     // console.log(current)
// }


// if(auto){
//     slideInterval = setInterval(nextSlide, intervalTime);
// }



// /////////////////////////////
const slides = document.querySelectorAll('.slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.previous');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
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
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
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
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
    nextSlide();

    // this section is to make the images move smoothly rather than fast when the buttons are set to auto scroll, it will wait 5s for the next image to come in as is been set for the autos croll button
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    // this section is to make the images move smoothly rather than fast when the buttons are set to auto scroll, it will wait 5s for the next image to come in as is been set for the autos croll button
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// this section is for when the page or scrolling function is set to auto scroll and the cont auto is = true, if you do not want the butons to auto scroll, comment it out
// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}