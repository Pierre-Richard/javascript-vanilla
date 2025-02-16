// Récupérer les paramètres de l'URL
let params = new URLSearchParams(window.location.search);
let id = params.get("id");
let name = params.get("name");

// Vérifier si les paramètres existent et les afficher
if (id && name) {
  document.querySelector("#fruit-details").innerHTML = `
    <h2>Fruit sélectionné</h2>
    <p>ID: ${id}</p>
    <p>Nom: ${decodeURIComponent(name)}</p>
  `;
}
