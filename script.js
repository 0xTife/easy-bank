let navbar = document.getElementById('nav-menu-btn');
let menu = document.querySelector('.menu');
let container = document.querySelector('.container');
navbar.addEventListener('click', (e) => {
    setInterval(() => {
        menu.style.display = 'block';
        newnav = navbar.toggleAttribute('src', "img/icon-close.svg");
    }, 500);
});