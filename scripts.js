const games = [
    {
        name: "Dark Souls",
        image: "images/dark_souls_1.jpg",
        description: "Dark Souls, Part 1"
    },
     {
        name: "Dark Souls II",
        image: "images/dark_souls_1.jpg",
        description: "Dark Souls, Part 2"
    },
    // Добавьте здесь свои игры
];

function createGameItem(game) {
    const gameItem = document.createElement('div');
    gameItem.className = 'game-item';

    const gameImage = document.createElement('img');
    gameImage.src = game.image;
    gameItem.appendChild(gameImage);

    const gameName = document.createElement('h2');
    gameName.textContent = game.name;
    gameItem.appendChild(gameName);

    const gameDescription = document.createElement('p');
    gameDescription.textContent = game.description;
    gameItem.appendChild(gameDescription);

    return gameItem;
}

function loadGames() {
    const gameList = document.getElementById('game-list');
    games.forEach(game => {
        const gameItem = createGameItem(game);
        gameList.appendChild(gameItem);
    });
}

document.addEventListener('DOMContentLoaded', loadGames);
