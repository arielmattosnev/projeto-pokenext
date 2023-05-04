export async function getStaticPaths() {
  const maxPokemons = 251;

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`
  );
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: index.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
}

function Pokemons({ pokemon }) {
  return <p>{pokemon.name}</p>;
}

export default Pokemons;
