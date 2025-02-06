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
let input = document.querySelector("#input");

// 2 - ecouter l'evenement sur le champ input
input.addEventListener("keyup", (event) => {
  //1 recuperer la valeur du input
  let inputValue = event.target.value;
  let firstLetterOfString =
    inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  console.log(
    "InputValue",
    inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
  );
  //Effectuer un filtre sur mon tableau de fruit
  let filteredFruit = fruits.filter((fruit) =>
    fruit.includes(firstLetterOfString)
  );
  console.log("filteredFruit", filteredFruit);
  //Supprimer l'affichage de ma liste
  baliseUl.innerHTML = "";
  // generé une nouvelle liste
  for (let i = 0; i < filteredFruit.length; i++) {
    // 1- créer la liste
    let baliseListe = document.createElement("li");
    baliseListe.innerHTML = filteredFruit[i];
    baliseUl.appendChild(baliseListe);
  }

  document.querySelector(".container-list").appendChild(baliseUl);
});
