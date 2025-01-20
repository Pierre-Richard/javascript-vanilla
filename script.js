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
// 1- recuperer la valeur du input
let input = document.querySelector("input");

// 2 - ecouter l'evenement sur le champ input
input.addEventListener("change", () => {
  console.log("La valeur du champ", input.value);
});
console.log("input", input.value);
