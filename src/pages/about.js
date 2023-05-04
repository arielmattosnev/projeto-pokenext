import Image from "next/image";

function About() {
  return (
    <div className="main-container con flex flex-col items-center justify-center gap-6 ">
      <h1 className="text-4xl">Sobre o projeto:</h1>
      <p className="text-2xl font-bold">
        Projeto de <span className="text-red-700 font-extrabold">Pokédex</span>{" "}
        feito em NextJs e tailwind consumindo a api da PokeAPi
      </p>
      <Image
        src="/starterspokemon.png"
        width="350"
        height="350"
        alt="Pokemons starters"
      />
    </div>
  );
}

export default About;
