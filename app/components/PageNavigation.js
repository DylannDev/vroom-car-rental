import React from "react";
import Link from "next/link";
import { PiCaretRightLight } from "react-icons/pi";

export default function PageNavigation({ children }) {
  return (
    <div className="mt-32 mb-10 sm:mt-40 sm:mb-20 flex flex-col">
      <div className="text-2xl font-bold mb-2">{children}</div>
      <div className="flex gap-2 font-light items-center text-sm ">
        <Link href="/" className="hover:underline ">
          Accueil
        </Link>
        <PiCaretRightLight />
        <div>{children}</div>
      </div>
    </div>
  );
}
