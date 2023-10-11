import PropTypes from "prop-types";

function NavBar({pokemonIndex, setPokemonIndex, pokemonListLength}) {
    
    return <>
    {pokemonIndex > 0 && (
        <button onClick={() => setPokemonIndex(pokemonIndex - 1) }>Précédent</button>
      )}
      {pokemonIndex < pokemonListLength - 1 && (
        <button onClick={() => setPokemonIndex(pokemonIndex + 1) } >Suivant</button>
      )}
</>}

export default NavBar;

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonListLength: PropTypes.number.isRequired,
}