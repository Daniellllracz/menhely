// Definiáljuk a JSON fájl elérési útvonalát
const jsonFile = 'seagules.JSON';

// Függvény a kártyák létrehozására az adatok alapján
function createCards() {
    // Betöltjük a JSON fájlt
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            const destinationGrid = document.getElementById('destination-grid');

            // Iterálunk az adatokon és létrehozzuk a kártyákat
            data.forEach(destination => {
                // Kártya létrehozása
                const card = document.createElement('div');
                card.classList.add('card');

                // Cím hozzáadása
                const title = document.createElement('h2');
                title.textContent = destination.destination;
                card.appendChild(title);

                // Leírás hozzáadása
                const description = document.createElement('p');
                description.textContent = destination.description;
                card.appendChild(description);

                // Kártya hozzáadása a célpontokhoz
                destinationGrid.appendChild(card);
            });
        })
        .catch(error => console.error('Hiba történt a JSON fájl beolvasása közben:', error));
}

// Az oldal betöltődésekor hívjuk meg a kártyák létrehozását
window.onload = createCards;

