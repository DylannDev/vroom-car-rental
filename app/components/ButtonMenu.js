import React from "react";
import { PiListLight, PiXCircleLight } from "react-icons/pi";

function ButtonMenu({ isOpen, setOpen }) {
  return (
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
  );
}

export default ButtonMenu;
