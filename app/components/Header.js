"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LogoV1 } from "./Logo";
import ButtonMenu from "./ButtonMenu";

import NavbarDesktop from "./NavbarDesktop";
import NavBarPhone from "./NavBarPhone";

import Login from "./Login";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 lg:p-10 z-40 w-full">
      <div className="flex justify-between items-center p-6 sm:p-10 lg:p-0 relative">
        <LogoV1 />
        <ButtonMenu isOpen={isOpen} setOpen={setOpen} />
        <NavbarDesktop />
        <Login />
        <NavBarPhone isOpen={isOpen} setOpen={setOpen} />
      </div>
    </header>
  );
}
