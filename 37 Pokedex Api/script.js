const poke_container = document.getElementById('poke-container')

const pokemon_count = 8; // create id data for every card

const API_URL = 'https://pokeapi.co/api/v2/pokemon/' // + id (1)

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const main_types = Object.keys(colors)
console.log(main_types) // ['fire','grass'...]

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = API_URL + id
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    createPokemonCard(data)
}

fetchPokemons()

const createPokemonCard = (pokemon) => {
    const pokeEl = document.createElement('div')
    pokeEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')

    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type =>
        poke_types.indexOf(type) > -1)

    const color = colors[type]

    pokeEl.style.backgroundColor = color;
    console.log(poke_types)

    const pokeHtml = `
<div class="img-container">
    <img src="https://pokemon.snowflakedev.org/img/${pokemon.id}.png" alt="">
  </div>
  <div class="info">
    <span class="number">#${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div> `
    pokeEl.innerHTML = pokeHtml;
    poke_container.appendChild(pokeEl)
}


