let fruits = [
  {
    id: 1,
    name: "Pomme",
    description: "Un fruit croquant et juteux, souvent rouge ou vert.",
  },
  {
    id: 2,
    name: "Banane",
    description: "Un fruit jaune courbé, riche en potassium.",
  },
  {
    id: 3,
    name: "Orange",
    description: "Un agrume sucré et juteux, riche en vitamine C.",
  },
  {
    id: 4,
    name: "Fraise",
    description: "Un petit fruit rouge sucré avec des graines en surface.",
  },
  {
    id: 5,
    name: "Poire",
    description: "Un fruit doux et juteux en forme de goutte.",
  },
  {
    id: 6,
    name: "Cerise",
    description: "Un petit fruit rouge ou noir, souvent sucré et juteux.",
  },
  {
    id: 7,
    name: "Kiwi",
    description: "Un fruit brun duveteux avec une chair verte acidulée.",
  },
  {
    id: 8,
    name: "Mangue",
    description: "Un fruit tropical sucré avec une chair orange.",
  },
  {
    id: 9,
    name: "Ananas",
    description: "Un fruit tropical au goût sucré et acidulé.",
  },
  {
    id: 10,
    name: "Raisin",
    description: "De petites baies sucrées utilisées pour le vin.",
  },
  {
    id: 11,
    name: "Pêche",
    description: "Un fruit velouté à la chair juteuse et sucrée.",
  },
  {
    id: 12,
    name: "Abricot",
    description: "Un petit fruit orangé à la chair douce et parfumée.",
  },
  {
    id: 13,
    name: "Framboise",
    description: "Un fruit rouge délicat et légèrement acidulé.",
  },
  {
    id: 14,
    name: "Myrtille",
    description: "Un petit fruit bleu riche en antioxydants.",
  },
  {
    id: 15,
    name: "Prune",
    description: "Un fruit rond à la peau lisse, sucré et juteux.",
  },
  {
    id: 16,
    name: "Melon",
    description: "Un gros fruit sucré avec une chair orangée ou verte.",
  },
  {
    id: 17,
    name: "Pastèque",
    description: "Un fruit rafraîchissant avec une chair rouge juteuse.",
  },
  {
    id: 18,
    name: "Pomelo",
    description: "Un agrume au goût doux et légèrement amer.",
  },
  {
    id: 19,
    name: "Coconut",
    description:
      "Un fruit tropical à coque dure, avec de l'eau et de la chair blanche.",
  },
  {
    id: 20,
    name: "Litchi",
    description: "Un petit fruit exotique sucré avec une peau rugueuse.",
  },
];

// créer une liste
let baliseUl = document.createElement("ul");

for (let i = 0; i < fruits.length; i++) {
  //crée une liste
  let baliseLi = document.createElement("li");
  baliseLi.setAttribute("id", `${fruits[i].id}`);
  baliseLi.innerHTML = fruits[i].name;
  baliseUl.appendChild(baliseLi);
  //console.log("ID de la première liste", `${fruits[i].id}`);
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
  //console.log("InputValueChartAt", inputValue.charAt(0) + inputValue.slice(1));
  //Effectuer un filtre sur mon tableau de fruit
  let filteredFruit = fruits.filter((fruit) =>
    fruit.name.includes(firstLetterOfString)
  );
  console.log("filteredFruit", filteredFruit);
  //Supprimer l'affichage de ma liste
  baliseUl.innerHTML = "";
  // generé une nouvelle liste
  for (let i = 0; i < filteredFruit.length; i++) {
    // 1- créer la liste
    let baliseListe = document.createElement("li");
    let baliseA = document.createElement("a");
    baliseListe.appendChild(baliseA);
    baliseA.setAttribute("href", `${filteredFruit[i].id}`); // Ajouter un ID unique
    console.log("VOIR", baliseListe);
    baliseA.textContent = filteredFruit[i].name;
    baliseUl.appendChild(baliseListe);
    console.log("Id", `${filteredFruit[i].id}`);
  }

  //console.log("SEE", document.querySelectorAll("ul li"));

  document.querySelectorAll("ul li a").forEach((item) => {
    item.addEventListener("click", () => {
      console.log("ID de l'élément cliqué :", item.getAttribute("href"));
    });
  });

  document.querySelector(".container-list").appendChild(baliseUl);
});

//todo
// Mettre la premiere lettre du mots du input en majuscule Done
// Créer un tableau  d'objet ( id, name, description) Done
// Créer la page de detail ( lorsque je clique sur un fruit cela me conduit sur la page de detail)
// Faire le CSS
