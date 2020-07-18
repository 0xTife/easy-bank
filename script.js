let navbar = document.getElementById('nav-menu-btn');
let menu = document.querySelector('.menu');
let container = document.querySelector('.container');
let menuicon = document.querySelector('.menu-icon');
let closeicon = document.querySelector('.close-icon');
navbar.addEventListener('click', (e) => {
    menu.style.display = 'block';
    menuicon.style.display = 'none';
    closeicon.style.display = 'block';
});
closeicon.addEventListener('click', () => {
    menu.style.display = 'none';
    menuicon.style.display = 'block';
    closeicon.style.display = 'none';
});


container.addEventListener('click', () => {
    menu.style.display = 'none';
    navbar.setAttribute('src', "img/icon-hamburger.svg");
});