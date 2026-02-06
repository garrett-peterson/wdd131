const navList = document.querySelector('.linkNav');
const hambutton = document.querySelector('#menu');

function toggleMenu() {
    navList.classList.toggle('show');
    hambutton.classList.toggle('show');
}

hambutton.addEventListener('click', toggleMenu);