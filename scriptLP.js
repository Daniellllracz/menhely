// Állatok adatbázisa
const dogs = [
    { name: "Rex", age: 3, breed: "Labrador" },
    { name: "Buddy", age: 5, breed: "Golden Retriever" },
    { name: "Luna", age: 2, breed: "Border Collie" }
];

const cats = [
    { name: "Whiskers", age: 2, breed: "Persian" },
    { name: "Mittens", age: 4, breed: "Siamese" },
    { name: "Fluffy", age: 1, breed: "Maine Coon" }
];

// Állatok megjelenítése
function displayAnimals(animalList, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    animalList.forEach(animal => {
        const animalDiv = document.createElement('div');
        animalDiv.classList.add('animal');
        animalDiv.innerHTML = `<h3>${animal.name}</h3><p>${animal.age} éves, ${animal.breed}</p>`;
        container.appendChild(animalDiv);
    });
}

// Kutyák és macskák megjelenítése
window.onload = function() {
    displayAnimals(dogs, 'dogs-list');
    displayAnimals(cats, 'cats-list');
};