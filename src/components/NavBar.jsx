import PropTypes from "prop-types";

function NavBar({ setPokemonIndex, pokemonList }) {
  const handlePokemonClick = (index) => {
    setPokemonIndex(index);

    if (pokemonList[index].name.toLowerCase() === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button onClick={() => handlePokemonClick(index)} key={pokemon.name}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.array,
};

export default NavBar;
