import React from "react";
import { LogoV2 } from "./Logo";
import Link from "next/link";
import { location } from "../data/data";
import { nanoid } from "nanoid";
import {
  PiEnvelopeSimpleLight,
  PiPhoneCallLight,
  PiInstagramLogoLight,
  PiTwitterLogoLight,
  PiFacebookLogoLight,
  PiWhatsappLogoLight,
} from "react-icons/pi";

export default function Footer() {
  return (
    <div className="py-10 p-0 sm:p-20 bg-slate-900 text-white w-full grow-0 ">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col">
        <div className="flex items-center justify-between">
          <div>
            <LogoV2 />
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-2xl hover:text-indigo-500">
              <PiInstagramLogoLight />
            </Link>
            <Link href="#" className="text-2xl hover:text-indigo-500">
              <PiTwitterLogoLight />
            </Link>
            <Link href="#" className="text-2xl hover:text-indigo-500">
              <PiFacebookLogoLight />
            </Link>
            <Link href="#" className="text-2xl hover:text-indigo-500">
              <PiWhatsappLogoLight />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:flex lg:flex-row lg:justify-between py-10 my-10 border-y-[0.5px] border-white">
          <div>
            <h3 className="capitalize font-bold text-lg mb-4">
              Nous contacter
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <PiEnvelopeSimpleLight className="text-xl" />
              <Link href="/" className="text-sm font-light hover:underline">
                hello@vroom.fr
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <PiPhoneCallLight className="text-xl" />
              <p className="text-sm font-light">+33 800 433 433</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="capitalize font-bold text-lg mb-4">
              Nos emplacements
            </h3>
            {location.map((loc) => (
              <Link
                href="/"
                key={nanoid(8)}
                className="font-light mb-2 text-sm hover:underline"
              >
                {loc}
              </Link>
            ))}
          </div>
          <div>
            <h3 className="capitalize font-bold text-lg mb-4">Notre offre</h3>
            <div className="font-light text-sm flex flex-col">
              <Link href="/" className="hover:underline mb-2">
                Découvrir notre offre
              </Link>
              <Link href="/" className="hover:underline mb-2">
                Location de voiture au mois
              </Link>
              <Link href="/" className="hover:underline mb-2">
                Location de voiture option livraison
              </Link>
              <Link href="/" className="hover:underline mb-2">
                Location voiture pour entreprises
              </Link>
            </div>
          </div>
          <div>
            <h3 className="capitalize font-bold text-lg mb-4">
              À propos de Vroom
            </h3>
            <div className="font-light text-sm flex flex-col">
              <Link href="/" className="hover:underline mb-2">
                Comment ça marche
              </Link>
              <Link href="/" className="hover:underline mb-2">
                Applications mobile
              </Link>
              <Link href="/" className="hover:underline mb-2">
                Devenir Expert
              </Link>
              <Link href="/aide" className="hover:underline mb-2">
                Centre d’aide
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="font-light text-sm flex flex-col gap-2 sm:flex-wrap sm:flex-row justify-between">
            <Link href="/" className="hover:underline mb-2">
              Condition générales de location
            </Link>
            <Link href="/" className="hover:underline mb-2">
              Politique de confidentialité
            </Link>
            <Link href="/" className="hover:underline mb-2">
              Paramètres des cookies
            </Link>
            <Link href="/" className="hover:underline mb-2">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
