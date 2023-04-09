const API = "https://pokeapi.co/api/v2/pokemon";
const form = document.getElementById("pokeform");
const input = document.getElementById("pokeinput");
const image = document.getElementById("pokeimage");
const loader = document.getElementById("pokeloader");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  showElement(loader);
  hideElement(image);
  let name = input.value.toLowerCase();
  let info = await fetchData(`${API}/${name}`);
  image.src = info.sprites.other["official-artwork"].front_default;
  hideElement(loader);
  showElement(image);
});

// TODO: Add error handler
async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

function hideElement(element) {
  element.classList.add("hidden");
}

function showElement(element) {
  element.classList.remove("hidden");
}
