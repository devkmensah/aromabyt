const openHamburger = document.querySelector('#hamburger-toggler');
const mobileNav = document.querySelector('.sidenav');

function openMenu(e){
    this.querySelector('.burger-icon').classList.toggle('fa-bars');
    this.querySelector('.burger-icon').classList.toggle('fa-times');
    mobileNav.classList.toggle('show');
}

openHamburger.addEventListener('click', openMenu);

console.log(openHamburger, mobileNav)