let navbar = document.getElementById('nav-menu-btn');
let menu = document.querySelector('.menu');
let container = document.querySelector('.container');
navbar.addEventListener('click', (e) => {
    menu.style.display = 'block';
    newnav = navbar.setAttribute('src', "img/icon-close.svg");
});
container.addEventListener('click', () => {
    menu.style.display = 'none';
    newnav = navbar.setAttribute('src', "img/icon-hamburger.svg");
});