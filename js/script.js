const phoneBtn = document.querySelector('.phone-btn');
const hamburger = document.querySelector('.phone-btn__burger');
const nav = document.querySelector('.contact');
const menuNav = document.querySelector('.contact__content');
const navItems = document.querySelectorAll('.contact__index');


let showMenu = false;

phoneBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}