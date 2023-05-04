import Image from "next/image";
import Link from "next/link";

const Card = ({ pokemon }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png `}
        width="120"
        height="120"
        alt="pokemon image"
      />
      <p className="text-lg">#{pokemon.id}</p>
      <h3 className="text-lg font-bold uppercase">{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <span className="underline hover:text-red-700">Detalhes</span>
      </Link>
    </div>
  );
};

export default Card;
