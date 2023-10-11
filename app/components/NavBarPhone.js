"use client";
import React from "react";
import Link from "next/link";
import {
  PiHouseLight,
  PiCarLight,
  PiStarLight,
  PiQuestionLight,
  PiPencilLineLight,
  PiUserLight,
  PiSignInLight,
  PiListLight,
  PiXCircleLight,
} from "react-icons/pi";
import Login from "./Login";
import { useState } from "react";

function NavBarPhone({ isOpen }) {
  return (
    <>
      <div
        className={`grid grid-rows-[0fr] transition-grid-rows duration-700 ease-in-out px-6 sm:px-10 sm:w-2/3 md:w-3/5 w-full top-[90%] sm:top-[80%] right-0 absolute ${
          isOpen ? "grid-rows-[1fr]" : null
        }`}
      >
        <div className="overflow-hidden shadow-md rounded-xl">
          <nav className="lg:hidden flex flex-col bg-white rounded-xl px-4 py-6 w-full">
            <ul className="flex flex-col gap-3 font-light text-slate-500">
              <li className="flex items-center gap-3 hover:bg-indigo-50 active:bg-indigo-50 rounded-md py-2 px-4">
                <PiHouseLight className="text-xl" />
                <Link href="/">Accueil</Link>
              </li>
              <li className="flex items-center gap-3 hover:bg-indigo-50 active:bg-indigo-50 rounded-md py-2 px-4">
                <PiCarLight className="text-xl" />
                <Link href="/vehicules">Nos Véhicules</Link>
              </li>
              <li className="flex items-center gap-3 hover:bg-indigo-50 active:bg-indigo-50 rounded-md py-2 px-4">
                <PiStarLight className="text-xl" />
                <Link href="/avis">Avis</Link>
              </li>
              <li className="flex items-center gap-3 hover:bg-indigo-50 active:bg-indigo-50 rounded-md py-2 px-4">
                <PiQuestionLight className="text-xl" />
                <Link href="/aide">Aide</Link>
              </li>
              <li className="flex items-center gap-3 hover:bg-indigo-50 active:bg-indigo-50 rounded-md py-2 px-4">
                <PiPencilLineLight className="text-xl" />
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className="flex flex-col gap-3 font-light border-t-[0.5px] border-slate-500 text-slate-500 mt-4 pt-4">
              <Link
                href="/"
                className="active:bg-indigo-50 rounded-md py-2 px-4 flex items-center gap-3"
              >
                <PiUserLight className="text-xl" />
                Se connecter
              </Link>
              <button className="px-4 py-3 bg-indigo-500 text-white rounded-lg active:bg-indigo-50 flex items-center gap-3 outline-none max-w-fit">
                <PiSignInLight className="text-xl" />
                Créer un compte
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBarPhone;
