"use client";
import React from "react";
import Link from "next/link";
import {
  PiUserLight,
  PiSignInLight,
  PiListLight,
  PiXCircleLight,
} from "react-icons/pi";
import { navBarPhoneInfos } from "../data/data";
import Login from "./Login";
import { useState } from "react";
import { nanoid } from "nanoid";

function NavBarPhone({ isOpen, setOpen }) {
  const handleClick = () => setOpen(false);

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
              {navBarPhoneInfos.map((data) => (
                <li
                  key={nanoid(8)}
                  className="hover:bg-indigo-50 active:bg-indigo-50 rounded-md"
                  onClick={handleClick}
                >
                  <Link
                    href={data.href}
                    className="flex items-center gap-3 py-2 px-4 w-full"
                  >
                    {data.icon}
                    {data.link}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 font-light border-t-[0.5px] border-slate-500 text-slate-500 mt-4 pt-4">
              <Link
                href="/"
                className="active:bg-indigo-50 rounded-md py-2 px-4 flex items-center gap-3 w-full"
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
