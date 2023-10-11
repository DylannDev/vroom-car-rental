/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import CircumIcon from "@klarr-agency/circum-icons-react";

export default function Hero() {
  return (
    <hero className="flex flex-col justify-center min-h-[100vh]">
      <div className="flex flex-wrap justify-center gap-20 sm:gap-0 lg:flex lg:justify-between">
        <div className="w-full max-w-xl lg:max-w-[410px] lg:w-2/5 lg:items-start flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold lg:text-justify">
            Partez l'esprit tranquille
          </h3>
          <h1 className="lg:text-5xl text-4xl font-bold mt-1 mb-3 lg:mt-3 lg:mb-6 lg:text-start">
            Votre <span className="text-indigo-500">confort</span> est notre
            priorité.
          </h1>
          <p className="text-slate-500 mb-6 font-light lg:text-justify ">
            La flexibilité d’une gamme complète de voitures. Prix imbattables,
            kilométrage illimité, options de prise en charge flexibles et bien
            plus encore.
          </p>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 font-bold px-6 py-3 lg:px-10 lg:py-4 bg-indigo-500 hover:bg-indigo-400 hover:border-indigo-400 border-indigo-500 border-2 text-white rounded-md cursor-pointer shadow-lg">
              <span>Réserver</span>
              <CircumIcon name="circle_check" size="22px" />
            </button>
            <button className="flex items-center gap-2 font-bold px-4 py-3 lg:px-6 lg:py-4 bg-slate-800 hover:bg-transparent hover:text-slate-800 border-slate-800 border-2 text-white rounded-md cursor-pointer shadow-lg">
              <span>En savoir plus</span>{" "}
              <CircumIcon name="circle_chev_right" size="22px" />
            </button>
          </div>
        </div>
        <div className="w-full max-w-3xl lg:w-3/5">
          <Image
            src="/vehicule-hero.png"
            width={1566}
            height={875}
            priority={true}
            alt="vehicule"
          ></Image>
        </div>
      </div>
    </hero>
  );
}
