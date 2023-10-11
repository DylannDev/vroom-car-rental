import React from "react";
import CircumIcon from "@klarr-agency/circum-icons-react";

export default function ButtonIndigo({ children }) {
  return (
    <button className="flex items-center font-bold px-6 py-3 bg-indigo-500 hover:bg-indigo-400 hover:border-indigo-400 border-indigo-500 text-white rounded-md cursor-pointer shadow-md max-w-fit">
      {children}
    </button>
  );
}
