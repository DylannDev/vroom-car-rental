import React from "react";
import CircumIcon from "@klarr-agency/circum-icons-react";

export default function ButtonBlack({ children }) {
  return (
    <button className="sm:w-fit flex justify-center items-center gap-2 font-bold px-6 py-3 bg-slate-800 hover:bg-transparent hover:text-slate-800 border-slate-800 border-2 text-white rounded-md cursor-pointer shadow-lg">
      {children}
    </button>
  );
}
