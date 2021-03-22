'use strict';
/* ----------------------------------------------------------- */
// SLIDER
/* ----------------------------------------------------------- */
const sliders = document.querySelectorAll('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');
const autoScroll = true;
const clickPause = false;
const clickPlay = true;
const intervalTime = 7000;

let sliderInterval;

const nextSlider = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    sliders[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlider = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    sliders[sliders.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

if (autoScroll) {
  sliderInterval = setInterval(nextSlider, intervalTime);
}

// Buttons event
nextBtn.addEventListener('click', e => {
  nextSlider();
  if (autoScroll) {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlider, intervalTime);
  }
});

prevBtn.addEventListener('click', e => {
  prevSlider();
  if (autoScroll) {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlider, intervalTime);
  }
});

/* ----------------------------------------------------------- */
// DELIVERY POSTCODE VALIDATION
/* ----------------------------------------------------------- */
const postCode = document.getElementById('postcode');
const postInput = document.getElementById('post-input');

const deliveryPost = function () {
  if (postInput.value.trim() === '') {
    postCode.className = 'animate__animated animate__shakeX';
  }
};

postCode.addEventListener('submit', e => {
  e.preventDefault();
  deliveryPost(postCode);
});
