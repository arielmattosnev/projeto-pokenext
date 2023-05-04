import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-red-700 text-white flex justify-between items-center p-5">
      <div className="flex items-center justify-center gap-2">
        <Image src="/Pokeball.svg" width="40" height="40" alt="Logo Pokemon" />
        <h1 className="font-bold text-xl">Pokenext</h1>
      </div>
      <ul className="flex gap-4">
        <li>
          <Link href="/">
            <p className="hover:text-gray-200 hover:duration-75 hover:underline text-xl">
              Home
            </p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p className="hover:text-gray-200 hover:duration-75 hover:underline text-xl">
              Sobre
            </p>
          </Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
