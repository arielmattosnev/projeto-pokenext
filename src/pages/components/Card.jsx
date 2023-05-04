import Image from "next/image";
import Link from "next/link";

const Card = ({ pokemon }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-red-800/80 text-white p-2 mb-3 mr-0.5 border-2 border-red-500 rounded-xl poke_card">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png `}
        width="140"
        height="140"
        alt="pokemon image"
      />
      <p className="text-lg bg-red-700 p-1 rounded-md">#{pokemon.id}</p>
      <h3 className="text-lg font-bold uppercase">{pokemon.name}</h3>
      <Link
        href={`/pokemon/${pokemon.id}`}
        className="bg-white text-black my-2 p-1 rounded-md hover:bg-gray-300"
      >
        <span>Detalhes do Pokémon</span>
      </Link>
    </div>
  );
};

export default Card;
