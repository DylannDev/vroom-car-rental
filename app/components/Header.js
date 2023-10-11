"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LogoV1 } from "./Logo";
import { PiListLight, PiXCircleLight } from "react-icons/pi";
import NavbarDesktop from "./NavbarDesktop";
import NavBarPhone from "./NavBarPhone";

import Login from "./Login";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 lg:p-10 z-40 w-full">
      <div className="flex justify-between items-center p-6 sm:p-10 lg:p-0 relative">
        <LogoV1 />
        <button
          onClick={() => setOpen(!isOpen)}
          className={`lg:hidden p-4 outline-none text-white font-light rounded-xl ${
            isOpen ? "bg-indigo-500 " : "bg-slate-800"
          }`}
        >
          {isOpen ? (
            <PiXCircleLight PiHouseLight className="text-2xl" />
          ) : (
            <PiListLight PiHouseLight className="text-2xl" />
          )}
        </button>
        <NavbarDesktop />
        <Login />
        <NavBarPhone isOpen={isOpen} />
      </div>
    </header>
  );
}
