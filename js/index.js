import {MmorpgGames, ShooterGames, SailingGames, PermaDeathGames, SuperHeroGames, PixelGames} from './games.js'
import {UI} from './ui.js';
import {Details} from './details.js';

const ui = new UI();

function getCategoryName() {
    const categoryLinks = document.querySelectorAll('.nav-link');

    categoryLinks.forEach((link) => {
        link.addEventListener('click', function() {
            document.querySelector('.active').classList.remove('active');
            link.classList.add('active');
            const categoryName = link.innerText.toLowerCase();
            displayGameData(categoryName);
        });
    });

    const initialActiveLink = document.querySelector('.nav-link.active');
    if (initialActiveLink) {
        const initialCategoryName = initialActiveLink.innerText.toLowerCase();
        displayGameData(initialCategoryName);
    }
}


function displayGameData(category) {
    let categoryInstance;
    switch (category) {
        case 'mmorpg':
            categoryInstance = new MmorpgGames();
            break;
        case 'shooter':
            categoryInstance = new ShooterGames();
            break;
        case 'sailing':
            categoryInstance = new SailingGames();
            break;
        case 'permadeath':
            categoryInstance = new PermaDeathGames();
            break;
        case 'superhero':
            categoryInstance = new SuperHeroGames();
            break;
        case 'pixel':
            categoryInstance = new PixelGames();
            break;
    }
    categoryInstance.getGames().then(data => {
        ui.displayData(data);
        displayDetailsOfGame();
    })
     
}

getCategoryName();


function displayDetailsOfGame() {
    const cards = document.querySelectorAll('.card');
    let details = new Details();

    cards.forEach((card) => {
        card.addEventListener('click', function (e) {
            document.querySelector(".details").classList.remove("d-none");
            document.querySelector(".games").classList.add("d-none");
            const cardId = this.getAttribute('id');
            details.getDetails(cardId).then(data => {
                ui.displayDetails(data);
                closeDetails();
            })
        });
    });
}

function closeDetails() {
    const closeBtn = document.querySelector('.btn-close');
    closeBtn.addEventListener('click', function() {
        document.querySelector(".details").classList.add("d-none");
        document.querySelector(".games").classList.remove("d-none");
    });
}