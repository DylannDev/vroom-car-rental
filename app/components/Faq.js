"use client";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import Accordion from "./Accordion";
import { PiArrowDownLight } from "react-icons/pi";
import { faqInfos } from "../data/data";

export default function Faq() {
  return (
    <div className="py-8 sm:px-24 sm:py-16">
      <div className="text-center mb-16">
        <h2 className="font-bold text-4xl mb-2">Essentiel à savoir...</h2>
        <p className="font-light text-slate-500 text-sm ">
          Vous avez une question sur le déroulement de la location avec Vroom?
          <br /> Nous vous répondons ici{" "}
          <PiArrowDownLight className="animate-bounce inline" />
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {faqInfos.map((faq) => (
          <Accordion
            key={nanoid(8)}
            question={faq.question}
            content={faq.content}
          />
        ))}
      </div>
    </div>
  );
}
