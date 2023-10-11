import React from "react";

export const LogoV1 = () => {
  return (
    <div className="mr-4 text-3xl font-black text-indigo-500">
      <span>VROOM</span>
    </div>
  );
};

export const LogoV2 = () => {
  return (
    <div className="text-3xl font-black px-4 py-2 rounded-xl border-[3px] border-indigo-500 bg-indigo-500 text-white">
      <span>VROOM</span>
    </div>
  );
};

export const LogoV3 = () => {
  return (
    <div className="px-4 text-indigo-500 flex flex-col items-center">
      <span className="text-4xl font-black leading-none">VROOM</span>
      <span className="text-base font-light tracking-[0.55em] ml-[0.55em]">
        BUSINESS
      </span>
    </div>
  );
};
