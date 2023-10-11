/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Image from "next/image";
import CircumIcon from "@klarr-agency/circum-icons-react";
import SearchInputs from "./components/SearchInputs";
import Hero from "./components/Hero";
import {
  carInfos,
  conceptInfos,
  storesInfos,
  argumentsInfos,
} from "./data/data";
import { ImStarFull } from "react-icons/im";
import { nanoid } from "nanoid";
import CarCard from "./components/CarCard";
import { PiArrowRightLight, PiArrowLeftLight } from "react-icons/pi";
import {
  responsive,
  CustomLeftArrow,
  CustomRightArrow,
} from "./utils/configCarousel";
import Faq from "./components/Faq";
import { LogoV3 } from "./components/Logo";
import ButtonBlack from "./components/ButtonBlack";
import { LuLogIn } from "react-icons/lu";
import { logosImg } from "./data/data";
import CarCarousel from "./components/CarCarousel";
import TestimonialsCarousel from "./components/TestimonialsCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mb-20 sm:mb-40">
        <SearchInputs />
      </section>
      <section className="mb-20 sm:mb-40">
        <div className="relative">
          <div className="bg-[url('/audi-s3-on-road.jpeg')] bg-center sm:bg-left bg-[length:1000px] sm:bg-cover rounded-3xl ">
            <div className="bg-gradient-to-b from-slate-800 from-20% to-slate-950 h-full opacity-90 py-20 sm:py-44 rounded-3xl flex flex-col justify-center items-center">
              <div className="opacity-100 text-white">
                <h2 className="font-bold text-3xl sm:text-4xl px-6 sm:px-0 text-center mb-16 sm:mb-24 ">
                  Partez l'esprit tranquille.
                </h2>
                <div className="flex flex-col sm:flex-row justify-around">
                  {argumentsInfos.map((arg) => (
                    <div
                      key={nanoid(8)}
                      className="flex flex-col p-6 sm:p-0 max-w-full sm:max-w-[35%] "
                    >
                      <h3 className="font-bold text-lg sm:text-2xl mb-4">
                        {arg.title}
                      </h3>
                      <p className="font-light text-sm ">{arg.paragraph}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-20 sm:mb-40">
        <CarCarousel />
      </section>
      <section>
        <TestimonialsCarousel />
      </section>
      <section className="mb-20 sm:mb-40">
        <div className="flex justify-between text-white bg-slate-900 rounded-3xl px-6 py-12 sm:px-20 sm:py-16 w-full">
          <div className="w-full lg:w-3/5">
            <h2 className="font-bold text-xl sm:text-4xl">
              Votre véhicule disponible à tout moment en libre-service.
            </h2>
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 py-12 font-light text-sm ">
              {conceptInfos.map((info) => (
                <div key={nanoid(8)} className="flex items-center gap-6 ">
                  <span className="p-3 bg-indigo-500  rounded-xl">
                    {info.icon}
                  </span>
                  <p>{info.paragraph}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-6 lg:flex-row pt-12 border-white border-t-[1px]">
              {storesInfos.map((info) => (
                <div
                  className="flex flex-col lg:flex-row gap-3 lg:mr-10"
                  key={nanoid(8)}
                >
                  <button className="flex gap-2 border-white border-[0.5px] rounded-lg cursor-pointer hover:opacity-80 px-2 py-1 items-center w-fit">
                    <span>{info.icon}</span>
                    <div className="flex flex-col items-start whitespace-nowrap">
                      <p className="text-xs">Disponible sur</p>
                      <p>{info.paragraph}</p>
                    </div>
                  </button>
                  <div className="flex flex-col items-center lg:items-start justify-between font-light">
                    <div className="flex gap-1 items-baseline text-sm">
                      <span>
                        <ImStarFull />
                      </span>
                      <p>{info.rating1}</p>
                    </div>
                    <p className="text-xs">{info.rating2} évaluations</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Image
            src="/mockup-vroom.png"
            width={372}
            height={524}
            className="lg:block hidden"
            alt="vroom smartphone app"
          />
        </div>
      </section>
      <section className="mb-20 sm:mb-40">
        <Faq />
      </section>
      <section className="mb-20 sm:mb-40">
        <div className="bg-white rounded-3xl ">
          <div className="flex flex-col sm:flex sm:flex-row px-6 pb-8 pt-10 sm:px-24 sm:py-16 border-b-2 border-indigo-50 text-center">
            <LogoV3 />
            <div className="flex flex-col sm:ml-12">
              <p className="font-light text-sm text-slate-500 my-8 sm:mb-8 sm:mt-0 text-justify">
                Vroom business rend les déplacements professionnels aussi
                simples que possible pour vous et vos collaborateurs. Profitez
                d'un outil dédié et personnalisé pour gérer et accéder aux
                réservations de votre entreprise avec des options de paiement
                flexibles et simplifiées. Profitez des paiements centralisés ou
                laissez chaque employé gérer ses propres paiements.
              </p>
              <ButtonBlack>
                Découvrir <LuLogIn />
              </ButtonBlack>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-20 sm:mb-40">
        <div className="flex flex-col px-2 py-8 sm:px-24 sm:py-16">
          <div className="mb-16 sm:mb-24 text-center">
            <h3 className="font-bold text-4xl mb-2">
              Quelques marques de notre Parc Auto
            </h3>
            <p className="font-light text-slate-500 text-sm">
              Sous réserve de disponibilité dans chaque ville.
            </p>
          </div>
          <div className="flex gap-6 justify-between overflow-x-scroll">
            {logosImg.map((logo) => (
              <Image
                src={logo}
                width={60}
                height={60}
                key={nanoid(8)}
                alt="vehicles logos"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
