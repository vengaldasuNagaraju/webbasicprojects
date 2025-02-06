const poke_container = document.getElementById('poke-container')

const pokemon_count = 150

const colors ={
    fire:'#fddfdf',
    grass:'#defde0',
    electric:'#fcf7de',
    water:'#def3fd',
    ground:'#f4e7da',
    rock:'#d5d5d4',
    fairy:'#fceaff',
    posion:'#98d7a5',
    bug:'#f8d5a3',
    dragon:'#97b3e6',
    psychic:'#eaeda1',
    flying:'#f5f5f5',
    fighting:'#e6e0d4',
    normal:'#f5f5f5',
}

const main_types = Object.keys(colors)
//console.log(main_types)


const fetchPokemons = async()=>{
    for(let i=1 ; i <= pokemon_count ; i++){
        await getPokemon(i)
    }
}

const getPokemon = async(id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard =(pokemon)=>{
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    //for making the first element of string to capital 
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    //for keeping the 00 to the begining to the numberr
    const id = pokemon.id.toString().padStart(3,'0')
    //console.log(pokemon.types)

    //the type is inside the array for accessing that array element he used the map
    //then he issetting the type based on the symbol color we are written up side by using the indexof
    
    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)

    const color = colors[type]
    pokemonEl.style.backgroundColor =color

    const pokemoninnerHTML =`
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span></span>${type}</small>
    </div>
     `
     
     pokemonEl.innerHTML =pokemoninnerHTML
     
     poke_container.appendChild(pokemonEl)

}

fetchPokemons()