export async function getStaticProps() {
  const maxPokemons = 251;

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=20&limit=${maxPokemons}`
  );

  const data = await res.json();

  const getPokemons = data.results;

  return {
    props: {
      pokemons: getPokemons,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <div>
      <main className="text-xl">
        <h1>Meu projeto da pokedex em nextjs</h1>
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
