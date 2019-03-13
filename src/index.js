document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE
  showPokemons(POKEMON);

  let input = document.querySelector('#pokemon-search-input');

  input.addEventListener('input', function(e) {
    console.log(e.target.value)
    let searched = POKEMON.filter(pokemon => pokemon.name.includes(e.target.value))
    showPokemons(searched)
  })

  // let pic = document.getElementByClassName('pokemon-image')
  //
  // let front = document.querySelector
  //
  // pic.addEventListener('click', function(p){
  //   if(img src == front){
  //     img src == back
  //   }else {
  //     img src == front
  //   }
  //
  //   console.log(p.attr)
  //   flipFlop(p)
  // })

})



// let pokeName

function showAPokemon(poke){
  const pokeCont = document.querySelector('#pokemon-container');
  pokeCont.innerHTML +=
  `<div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text">${poke.name}</h1>
      <div class="pokemon-image">
        <img data-id=${poke.id} data-action="flip" class="toggle-sprite" src=${poke.sprites.front}>
      </div>
    </div>
  </div>`



  // let pic = document.querySelector('.pokemon-image')
  // let front = `${poke.sprites.front}`
  // let back =  `${poke.sprites.back}`
  // pic.addEventListener('click', function(e){
  //   if(e.front){
  //     e.back
  //   }else {
  //     e.front
  //   }
  // })
}

function showPokemons(pokemons){
  const pokeCont = document.querySelector('#pokemon-container');
  pokeCont.innerHTML = ''
  pokemons.forEach(pokemon => showAPokemon(pokemon))
}

function searchPoke(input){
  if (input === "") {
    true
  }else {
  let searched = POKEMON.filter(pokemon => pokemon.name.includes(input.target.value))
  console.log(searched)
  showPokemons(searched)
}}

function flipFlop(poke){
  if (poke.sprites.front) {
    poke.sprites.back
  }else {
    poke.sprites.front
  }
}
