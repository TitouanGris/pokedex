import PropTypes from "prop-types";

function NavBar({setPokemonIndex, pokemonList}) {
    
    return <div>
    {pokemonList.map((pokemon, index) => (
    <button 
    onClick={() => setPokemonIndex(index)}
    key = {pokemon.name}>
      {pokemon.name}
      </button>))

 }
</div>}

export default NavBar;

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.array,
}