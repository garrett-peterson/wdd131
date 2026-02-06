const navList = document.querySelector('.linkNav');
const hambutton = document.querySelector('#menu');

function toggleMenu() {
    navList.classList.toggle('show');
    hambutton.classList.toggle('show');
}

hambutton.addEventListener('click', toggleMenu);



const samples = [
    {id: "1", title: "The Dying Sun", genres: ["Epic Fantasy"], excerpt: "Placeholder"},
    {id: "2", title: "Legend of the Falling Knights", genres: ["Urban Fantasy", "Thriller", "Fantasy"], excerpt: "Placeholder"},
    {id: "3", title: "The Tale of Two Swords", genres: ["Urban Fantasy", "Fantasy"], excerpt: "Placeholder"},
    {id: "4", title: "Mayhem on the Griffin Express", genres: ["Urban Fantasy", "Mystery"], excerpt: "Placeholder"},
    {id: "5", title: "War For Christmas Book 1", genres: ["Fantasy"], excerpt: "Placeholder"},
    {id: "6", title: "Adventures of the Sea Pigeon", genres: ["Fantasy"], excerpt: "Placeholder"}
]


const genre = document.querySelector('#genreFilter');
const search = document.querySelector('#searchInput');
const output = document.querySelector('#samplesList');

genre.addEventListener("change", updateView);
search.addEventListener("input", updateView);


function renderSamples(list) {
    let star;
    output.innerHTML = list.map(sample => {
        let isFavorite = fave.includes(sample.id);
        if(isFavorite) {
            star = "★";
        } else {
            star = "☆";
        }
        return `
        <article class="sample-card">

            <h3>${sample.title} <button class="star" data-id="${sample.id}">${star}</button></h3>
            <p><strong>Genres:</strong> ${sample.genres.join(', ')}</p>
            <p>${sample.excerpt}</p>
        </article>
        `;
    }).join('');
}


function updateView() {

    let filtered = samples;

    const genreValue = genre.value.toLowerCase();
    const searchValue = search.value.toLowerCase();

    if (searchValue === "favorites") {

    }
    else if (genreValue && genreValue !== "all") {
        filtered = filtered.filter(s => 
            s.genres.some(g => g.toLowerCase() === genreValue));
    }

    if (searchValue) {
        filtered = filtered.filter(s => 
            s.title.toLowerCase().includes(searchValue));
    }

    renderSamples(filtered);
  
}
let fave;

function getFavorites() {
    let rawData;
    const itemKey = 'faveSamples-ls';

    if (itemKey in localStorage) {
        rawData = localStorage.getItem(itemKey);
        fave = JSON.parse(rawData);

    } else {
        fave = [];
    }
}

getFavorites();
updateView();

output.addEventListener('click', handleStarClick);

function handleStarClick(event) {

    let clickedID = event.target.dataset.id;

    if (event.target.classList.contains('star')) {
        if (fave.includes(clickedID)) {
            let remove = fave.indexOf(clickedID);

            fave.splice(remove, 1);
            localStorage.setItem('faveSamples-ls', JSON.stringify(fave));
        } 
        else {
            fave.push(clickedID);
            localStorage.setItem('faveSamples-ls', JSON.stringify(fave));
        }
    }
    updateView();
}