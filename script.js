// Definiáljuk a kutyák adatait tartalmazó JSON fájl nevét
const jsonFile = 'kutyak.json';

// Az aktuális kutyák számát nyomon követő változó
let currentDogs = 0;

// Flag a kereséshez
let searchPerformed = false;

// Függvény a kutyák betöltésére és megjelenítésére
function loadDogs() {
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      const dogsContainer = document.getElementById('kutya-lista');

      // Ellenőrizzük, hogy a betöltött adatokból még vannak-e kutyák hátra
      if (currentDogs < data.length) {
        // Legfeljebb 5 kutyát töltünk be egyszerre
        const end = Math.min(currentDogs + 15, data.length);
        for (let i = currentDogs; i < end; i++) {
          const kutya = data[i];
          const kutyaDiv = document.createElement('div');
          kutyaDiv.classList.add('kutya');

          // Ellenőrizzük, hogy a keresés megtörtént-e, és a kutya megfelel-e a keresési feltételnek
          if ((!searchPerformed || document.getElementById('kereses').value.toLowerCase() === kutya.név.toLowerCase())) {
            kutyaDiv.innerHTML = `
              <h2>${kutya.név}</h2>
              <p>Fajta: ${kutya.fajta}</p>
              <p>Életkor: ${kutya.életkor} év</p>
              <p>Utolsó orvosi ellenőrzés: ${kutya.utolsoOrvosiEllenorzes}</p>
            `;
            dogsContainer.appendChild(kutyaDiv);
          }
        }
        // Frissítjük az aktuális kutyák számát
        currentDogs = end;
      } else {
        // Ha nincs több kutya, letiltjuk a gombot
        document.getElementById('loadMoreButton').disabled = true;
      }
    })
    .catch(error => console.error('Hiba történt a kutyák betöltése közben:', error));
}

// Az oldal betöltődésekor töltjük be az első kutyákat
window.onload = loadDogs;

// Keresés funkció
document.getElementById('keresesGomb').addEventListener('click', () => {
  // Töröljük a régi kutyaelemeket
  document.getElementById('kutya-lista').innerHTML = '';
  currentDogs = 0;
  searchPerformed = true;
  loadDogs();
});
