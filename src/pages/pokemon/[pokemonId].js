import Image from "next/image";

import styles from "../../styles/PokemonType.module.css";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const maxPokemons = 251;

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`
  );
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: true,
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
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold uppercase bg-red-700 text-white p-4 rounded-xl">
        {pokemon.name}
      </h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png `}
        width="180"
        height="180"
        alt="pokemon image"
      />
      <div className="flex flex-col items-center justify-center font-bold text-xl">
        <div className="flex gap-1">
          <h3>Número na Pokedex:</h3>
          <p>{pokemon.id}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <h3>Tipo:</h3>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles["type_" + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
        <div>
          <div className="flex gap-1">
            <h4>Altura:</h4>
            <p>{pokemon.height * 10} cm</p>
          </div>
          <div className="flex gap-1">
            <h4>Peso:</h4>
            <p>{pokemon.weight} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemons;
