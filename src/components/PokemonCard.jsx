function PokemonCard(props) {
  console.log(props);
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

export default PokemonCard;
