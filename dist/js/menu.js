//1. LOGIN PAGE 
const loginRegister = document.querySelector('#login-register');
const loginLink = document.querySelector('.login-link');
const close = document.querySelector('.close');

// Show login area when login link is clicked
loginLink.addEventListener('click', () => {
    loginRegister.style.display = 'block';
});

// Close login area with the x icon on click
close.addEventListener('click', () => {
    loginRegister.style.display = 'none';
});

// Close login area when the login background is cliked
loginRegister.addEventListener('click', (e) => {
    if (e.target.id == 'login-register') {
        loginRegister.style.display = 'none';
    }
});



//2. REGISTER PAGE 
const register = document.querySelector('#register');
const registerLink = document.querySelector('.register-link');
const closeRegister = document.querySelector('.close-register');
const registerLinkOther = document.querySelector('.register-link-other');

// Show register page when register link is clicked
registerLink.addEventListener('click', () => {
    register.style.display = 'block';
});

// Show register page when register link is clicked on the login page
registerLinkOther.addEventListener('click', () => {
    register.style.display = 'block';
});

// Close register page when x icon is clicked
closeRegister.addEventListener('click', () => {
    register.style.display = 'none';
})

// Close register when background is clicked
register.addEventListener('click', (e) => {
    if (e.target.id === 'register') {
        register.style.display = 'none';
    }
})


//3. STICK MENU-LIST AREA TO THE TOP OF SCREEN ON SCROLL
// & PREVENT SUDDEN QUICK MOVEMENT OF LUNCH MENU HEADER TITLE UNDER MENU-LIST WHEN FIXED EFFECT IS ADDED TO THE MENU-LIST ID  
const menuList = document.querySelector("#menu-list");
const pageTop = menuList.offsetTop;
const smoothPosition = document.querySelector('#menu');
console.log(smoothPosition, pageTop);

const stickMenu = () => {
    if (pageYOffset >= pageTop) {
        menuList.classList.add("sticky");
        smoothPosition.classList.add('smooth-position');
    } else {
        menuList.classList.remove("sticky");
        smoothPosition.classList.remove('smooth-position');
    }
}


onscroll = () => {
    stickMenu()
}


// HAMBURGER MENU
const openHamburger = document.querySelector('#hamburger-toggler');
const mobileNav = document.querySelector('.sidenav');

function openMenu(e){
    this.querySelector('.burger-icon').classList.toggle('fa-bars');
    this.querySelector('.burger-icon').classList.toggle('fa-times');
    mobileNav.classList.toggle('show');
}

openHamburger.addEventListener('click', openMenu);

console.log(openHamburger, mobileNav)