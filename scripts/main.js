const API = "https://pokeapi.co/api/v2/pokemon";

const form = document.getElementById("pokeform");
const input = document.getElementById("pokeinput");

const pokemonContainer = document.getElementById("pokeinfo");
const image = document.getElementById("pokeimage");
const pokeName = document.getElementById("pokemon-name");

const loader = document.getElementById("pokeloader");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  showElement(loader);
  hideElement(pokemonContainer);
  let name = input.value.toLowerCase();
  let info = await fetchData(`${API}/${name}`);
  if (info) {
    getPokemon(info);
  }
});

async function fetchData(urlApi) {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
  } catch {
    getUnknownPokemon();
  }
}

function hideElement(element) {
  element.classList.add("hidden");
}

function showElement(element) {
  element.classList.remove("hidden");
}

function getPokemon(pokemonInfo) {
  image.src = pokemonInfo.sprites.other["official-artwork"].front_default;
  pokeName.innerText = `#${pokemonInfo.id} - ${pokemonInfo.name}`;
}

function getUnknownPokemon() {
  image.src = "assets/MissingNO.webp";
  pokeName.innerText = "#000 - MissingNO";
}

image.onload = () => {
  hideElement(loader);
  showElement(pokemonContainer);
};
