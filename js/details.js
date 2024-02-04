export class Details {
    async getDetails(id) {
        const loading = document.querySelector('.loading');
        loading.classList.remove('d-none');
        document.querySelector(".details").classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fc34944836msha5ef21f39b61535p155f10jsn0c783e1543b7',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
        const response = await api.json();
        document.querySelector(".games").classList.add("d-none");
        loading.classList.add('d-none');
        return response;
    }
}




