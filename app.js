      
      let lista = document.getElementById('lista-pokemon')
      
      
      function consultarPokemon(id, numero) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(function(res){
          res.json()
        .then(function(pokemon){
          crearPokemon(pokemon, numero);
        })
    });
    }

  function consultarPokemones(){
    let primerId = Math.round(Math.random() * 150); 
    let segundoId = Math.round(Math.random() * 150); 

    consultarPokemon(primerId,1);
    consultarPokemon(segundoId,2);

  }


  function crearPokemon (pokemon, numero){
        //convertimos data en HTML
    let item = lista.querySelector(`#pokemon-${numero}`);
    let imagen = item.getElementsByTagName('img')[0];
    imagen.setAttribute("src", pokemon.sprites.front_default)

    let nombre = item.getElementsByTagName('p')[0];
    nombre.textContent = pokemon.name

  }
    

  consultarPokemones();
  