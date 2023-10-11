import React from "react";
import Link from "next/link";

function NavbarDesktop() {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-baseline gap-6 font-semibold">
        <li className="hover:text-indigo-500 transition duration-200 ease-out hover:ease-in">
          <Link href="/">Accueil</Link>
        </li>
        <li className="hover:text-indigo-500 transition duration-200 ease-out hover:ease-in">
          <Link href="/vehicules">Nos Véhicules</Link>
        </li>
        <li className="hover:text-indigo-500 transition duration-200 ease-out hover:ease-in">
          <Link href="/avis">Avis</Link>
        </li>
        <li className="hover:text-indigo-500 transition duration-200 ease-out hover:ease-in">
          <Link href="/aide">Aide</Link>
        </li>
        <li className="hover:text-indigo-500 transition duration-200 ease-out hover:ease-in">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarDesktop;
