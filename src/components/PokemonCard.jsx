import PropTypes from "prop-types";
function PokemonCard({pokemonList}) {
  
  console.log(pokemonList);

  return pokemonList && pokemonList.imgSrc ? (
    <figure>
      <img src={pokemonList.imgSrc} alt={pokemonList.name} />
      <figcaption>{pokemonList.name}</figcaption>
    </figure>
  ) : (
    <div>
      <p>???</p>
      <figcaption>{pokemonList.name}</figcaption>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemonList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
