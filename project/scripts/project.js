const main = document.querySelector('.linkNav');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    main.classList.toggle('show');
    hambutton.classList.toggle('show');
});