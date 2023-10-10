function PokemonCard() {

    let pokemon = pokemonList[0]

    return pokemon &&
        pokemon.imgSrc ?
        <figure>
            <img src={pokemon.imgSrc} alt={pokemon.name} />
            <figcaption>{pokemon.name}</figcaption>
        </figure>
        :
        <div>
            <p>???</p>
            <figcaption>{pokemon.name}</figcaption>
        </div>

}

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

export default PokemonCard;