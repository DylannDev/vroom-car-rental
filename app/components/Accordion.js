import React, { useState } from "react";
import { nanoid } from "nanoid";
import { PiArrowRightLight, PiArrowDownLight } from "react-icons/pi";

function Accordion({ question, content }) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="rounded-xl bg-white">
      <div
        onClick={toggleClass}
        className={`p-6 sm:px-10 sm:py-6 flex justify-between items-center cursor-pointer  ${
          isActive && "border-b-4  border-indigo-50"
        }`}
      >
        <h3 className="font-bold sm:text-lg">{question}</h3>
        <PiArrowRightLight
          className={
            isActive ? "rotate-90 duration-500" : "rotate-0 duration-500"
          }
        />
      </div>

      <div
        className={`grid grid-rows-[0fr] transition-grid-rows opacity-0 duration-500 ease-in-out font-light text-slate-500 ${
          isActive ? "grid-rows-[1fr] opacity-100 p-6 sm:p-10" : null
        }`}
      >
        <div className="overflow-hidden">{content}</div>
      </div>
    </div>
  );
}

export default Accordion;
