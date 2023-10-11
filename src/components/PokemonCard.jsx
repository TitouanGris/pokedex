import PropTypes from "prop-types";
function PokemonCard(props) {
  let pokemon = props.pokemon;

  console.log(props);

  return pokemon && pokemon.imgSrc ? (
    <figure>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  ) : (
    <div>
      <p>???</p>
      <figcaption>{pokemon.name}</figcaption>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
