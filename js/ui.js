export class UI {

    // display data
    displayData(category) {
        var cols = ``;
        for(var i = 0; i < category.length; i++) {
            cols += `<div class="col-md-3 equal-height-card">
                        <div class="card bg-transparent" id=${category[i].id}>
                        <div class="image position-relative p-3 pb-0">
                            <img src=${category[i].thumbnail} class="card-img-top h-100" alt="thumbnail">
                        </div>
                        <div class="card-body border-bottom border-dark">
                            <div class="title d-flex justify-content-between">
                                <h5 class="card-title">${category[i].title}</h5>
                                <button class="rounded">Free</button>
                            </div>
                            <p class="card-text">${category[i].short_description}</p>
                        </div>
                        <div class="buttons px-3 py-1 d-flex justify-content-between">
                            <span class="rounded">${category[i].genre}</span>
                            <span class="rounded">${category[i].platform}</span>
                        </div>
                        </div>
                    </div>`;
        }
        document.getElementById('rowData').innerHTML = cols;
    }

    // display details
    displayDetails(game) {
        var cols = `<div class="col-md-4">
                        <div class="image">
                            <img src=${game.thumbnail} alt="thumbnail" class="w-100">
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div class="content text-white">
                            <h3>Title: ${game.title}</h3>
                            <p>
                                Category:
                                <span class="rounded">${game.genre}</span>
                            </p>
                            <p>
                                Platform:
                                <span class="rounded">${game.platform}</span>
                            </p>
                            <p>
                                Status:
                                <span class="rounded">${game.status}</span>
                            </p>
                            <p class="description">
                                ${game.short_description}
                            </p>
                            <a href=${game.game_url} class="rounded">Show Game</a>
                        </div>
                    </div>`;
        document.getElementById('gameDetails').innerHTML = cols;

    }

}