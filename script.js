let fruits = [
  "Pomme",
  "Banane",
  "Orange",
  "Fraise",
  "Poire",
  "Cerise",
  "Kiwi",
  "Mangue",
  "Ananas",
  "Raisin",
  "Pêche",
  "Abricot",
  "Framboise",
  "Myrtille",
  "Prune",
  "Melon",
  "Pastèque",
  "Pomelo",
  "Coconut",
  "Litchi",
];
fruits.sort();
console.log("fruits", fruits);

// créer une liste
let baliseUl = document.createElement("ul");

for (let i = 0; i < fruits.length; i++) {
  //crée une liste
  let baliseLi = document.createElement("li");
  baliseLi.innerHTML = fruits[i];
  baliseUl.appendChild(baliseLi);
}

document.querySelector(".container-list").appendChild(baliseUl);
// 1- recuperer la valeur du input
let input = document.querySelector("input");

// 2 - ecouter l'evenement sur le champ input
input.addEventListener("keyup", (event) => {
  //
  let value = event.target.value;
  if (value === fruits[0]) {
    return console.log("Valeur", value);
  }
});
console.log("input", input.value);
