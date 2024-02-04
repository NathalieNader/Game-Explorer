async function getGames(category) {

    const loading = document.querySelector('.loading');
    loading.classList.remove('d-none');

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fc34944836msha5ef21f39b61535p155f10jsn0c783e1543b7',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
    const response = await api.json();

    loading.classList.add('d-none');
    return response;
}

class BaseGames {
    constructor(category) {
        this.category = category;
    }

    async getGames() {
        let games = await getGames(this.category);
        return games;
    }
}

export class MmorpgGames extends BaseGames{
    constructor() {
        super('mmorpg');
    }
}

export class ShooterGames extends BaseGames{
    constructor() {
        super('shooter');
    }
}

export class SailingGames extends BaseGames{
    constructor() {
        super('sailing');
    }
}

export class PermaDeathGames extends BaseGames{
    constructor() {
        super('permadeath');
    }
}

export class SuperHeroGames extends BaseGames{
    constructor() {
        super('superhero');
    }
}

export class PixelGames extends BaseGames{
    constructor() {
        super('pixel');
    }
}
