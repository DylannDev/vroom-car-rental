"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import {
  responsive,
  CustomLeftArrow,
  CustomRightArrow,
} from "../utils/configCarousel";
import { carInfos } from "../data/data";
import CarCard from "../components/CarCard";
import { nanoid } from "nanoid";

function CarCarousel() {
  return (
    <div className="bg-white rounded-3xl px-4 py-8 sm:px-24 sm:py-16 relative">
      <h2 className="font-bold text-4xl sm:text-5xl ">Nos véhicules</h2>
      <p className="text-sm font-light text-slate-500 mt-2 mb-8">
        accès aux véhicules 24h/7j sous réserve de disponibilité.
      </p>
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        ssr={true}
      >
        {carInfos.map((car) => (
          <CarCard carInfos={car} key={nanoid(8)} />
        ))}
      </Carousel>
    </div>
  );
}

export default CarCarousel;
