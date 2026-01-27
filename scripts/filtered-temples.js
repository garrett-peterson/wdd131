const main = document.querySelector('.linkNav');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    main.classList.toggle('show');
    hambutton.classList.toggle('show');
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642.jpg"
  },
    {
    templeName: "Dallas Texas",
    location: "Dallas, Texas, United States",
    dedicated: "1984, October, 19",
    area: 44207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55221-thumb.jpg"
  },
    {
    templeName: "Denver Colorado",
    location: "Denver, Colorado, United States",
    dedicated: "1986, October, 24",
    area: 29117,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/denver-colorado-temple/denver-colorado-temple-63412-thumb.jpg"
  }
];

function renderTemples(templeArray) {
    const div = document.querySelector("#pics");
    let templeCards = "";
    for (const temple of templeArray) {
        templeCards +=`<div class="temple-card">
        <h2>${temple.templeName}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Size: ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="Picture of ${temple.templeName}" loading="lazy">
        </div>`
    }
    div.innerHTML = templeCards;
}

renderTemples(temples);


const home = document.querySelector("#home");
home.addEventListener('click', () => {
    renderTemples(temples);
});

const old = document.querySelector("#old");
old.addEventListener('click', () => {
    const oldTemples = temples.filter(temple => temple.dedicated.split(",")[0] < 1900)
    renderTemples(oldTemples);
});

const newTemple = document.querySelector("#new");
newTemple.addEventListener('click', () => {
    const newTempleArray = temples.filter(temple => temple.dedicated.split(",")[0] > 2000)
    renderTemples(newTempleArray);
});

const large = document.querySelector("#large");
large.addEventListener('click', () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    renderTemples(largeTemples);
});

const small = document.querySelector("#small");
small.addEventListener('click', () => {
    const smallTemples = temples.filter(temple => temple.area <10000);
    renderTemples(smallTemples);
});