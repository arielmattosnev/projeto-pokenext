import Image from "next/image";
import Card from "./components/Card";

export async function getStaticProps() {
  const maxPokemons = 251;

  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`
    );
    const data = await res.json();

    const getPokemons = data.results;

    getPokemons.forEach((item, index) => {
      item.id = index + 1;
    });

    return {
      props: {
        pokemons: getPokemons,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "An ERROR occourred on the fetch of the api",
      },
    };
  }
}

export default function Home({ pokemons }) {
  return (
    <div>
      <div className="text-3xl flex items-center justify-center gap-1 my-6">
        <h1 className="text-red-700 font-bold">
          Poke<span className="text-black">Next</span>
        </h1>
        <Image
          src="/Pokeball.svg"
          height="45"
          width="45"
          alt="Pokeball image"
        />
      </div>
      <div className="flex flex-wrap justify-between items-center pokemon_container m-auto">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
