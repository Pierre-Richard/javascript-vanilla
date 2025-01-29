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
  //1 recuperer la valeur du input
  let value = event.target.value;
  //si la valeur existe UI change me renvoi la bonne valeur
  //   fruits.forEach((fruit) => {
  //     if (fruit === value) {
  //       return console.log("okok");
  //     }
  //   });

  for (let i = 0; i < fruits.length; i++) {
    //crée une liste
    let baliseLi = document.createElement("li");
    baliseLi.innerHTML = fruits[i];
    baliseUl.appendChild(baliseLi);
  }

  document.querySelector(".container-list").appendChild(baliseUl);
});

console.log("input", input.value);
