/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import PageNavigation from "../components/PageNavigation";
import {
  PiEnvelopeSimpleLight,
  PiPhoneCallLight,
  PiPaperPlaneTiltLight,
  PiPencilLineLight,
  PiAtLight,
  PiUserLight,
} from "react-icons/pi";
import Link from "next/link";
import ButtonIndigo from "../components/ButtonIndigo";

export default function pageContact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mb-20 sm:mb-40">
      <PageNavigation>Contact</PageNavigation>
      <div className="flex flex-wrap gap-6 justify-between mt-16 p-6 sm:px-24 sm:py-16 bg-white rounded-3xl">
        <div className="lg:max-w-sm sm:pr-10 text-sm">
          <h3 className="text-3xl font-bold mb-8">
            Que nous vaut le plaisir de vous lire ?
          </h3>
          <p className="font-light text-slate-500 mb-6 text-justify">
            Vous n'avez pas pu trouver réponse à vos interrogations dans la
            section aide ? <br />
            N'hésitez pas à nous contacter, nous nous ferons un plaisir de vous
            répondre.
          </p>
          <div className="flex items-center gap-2 mb-3 font-light text-slate-500">
            <PiEnvelopeSimpleLight className="text-2xl" />
            <Link href="/" className="hover:underline">
              hello@vroom.fr
            </Link>
          </div>
          <div className="flex items-center gap-2 font-light text-slate-500">
            <PiPhoneCallLight className="text-2xl" />
            <p>+33 800 433 433</p>
          </div>
        </div>
        <div className="grow">
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col text-slate-500 font-light mt-2"
          >
            <label
              htmlFor="name"
              className="font-light mb-2 text-sm flex items-center gap-1"
            >
              <PiUserLight className="text-lg" />
              Nom
            </label>
            <input
              type="text"
              name="name"
              placeholder="Entrez votre nom et prénom"
              className="p-4 rounded-xl border-indigo-200 bg-indigo-50 border-[1px] outline-none placeholder:text-sm w-full mb-6"
            />
            <label
              htmlFor="email"
              className="font-light mb-2 text-sm flex items-center gap-1"
            >
              <PiAtLight className="text-lg" />
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Entrez votre email"
              className="p-4 rounded-xl border-indigo-200 bg-indigo-50 border-[1px] outline-none placeholder:text-sm w-full mb-6"
            />
            <label
              htmlFor="message"
              className="font-light mb-2 text-sm flex items-center gap-1"
            >
              <PiPencilLineLight className="text-lg" />
              Dites-nous tout
            </label>
            <textarea
              type="text"
              name="message"
              placeholder="Ecrivez votre message ici..."
              className="p-4 rounded-xl border-indigo-200 bg-indigo-50 border-[1px] outline-none placeholder:text-sm min-h-full w-full mb-6"
            />
            <ButtonIndigo>
              Envoyer
              <PiPaperPlaneTiltLight className="text-lg ml-2" />
            </ButtonIndigo>
          </form>
        </div>
      </div>
    </div>
  );
}
