"use client";
import React, { useEffect } from "react";
import CircumIcon from "@klarr-agency/circum-icons-react";
import { PiMapPinLineLight, PiCarLight } from "react-icons/pi";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import BookingInfoCard from "./BookingInfoCard/BookingInfoCard";
import { nanoid } from "nanoid";
import { carInfos, location } from "../data/data";

import { yesterdayDate } from "../utils/getYesterdayDate";

export default function SearchInputs() {
  const [selectedCar, setOpenCar] = useState(carInfos[0].option);
  const [selectedCarIndex, setOpenCarIndex] = useState(0);
  const [selectedCity, setOpenCity] = useState("");
  const [selectChanged, setSelectChanged] = useState(false);
  const [rentalDates, setRentalDates] = useState([]);

  const iconStyle = { color: "#6b7280", fontSize: "20px" };

  const handleValueChange = (newValue) => {
    // console.log("newValue:", newValue);
    setRentalDates(newValue);
  };

  useEffect(() => {
    if (selectedCar) {
      const sameCarModel = (car) => car === selectedCar;

      const carListIndex = carInfos
        .map((car) => car.carModel)
        .findIndex(sameCarModel);

      setOpenCarIndex(carListIndex);
    }
  }, [selectedCar]);

  const handleSelectedCity = (event) => {
    setOpenCity(event.target.value);
  };

  const handleSelectedCar = (event) => {
    setOpenCar(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bg-white px-4 py-8 sm:p-8 rounded-3xl max-w-5xl w-full mx-auto">
      <form
        action=""
        className="flex max-lg:grid md:grid-cols-2 grid-cols-1 w-full gap-3 sm:gap-2 items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className=" p-4 flex bg-indigo-50 text-sm outline-none font-light text-slate-500 rounded-xl border-[1px] border-indigo-200 ">
          <PiMapPinLineLight style={iconStyle} />
          <select
            value={selectedCity}
            onChange={handleSelectedCity}
            className="bg-transparent outline-none w-full min-w-max"
          >
            <option selected hidden>
              Sélectionnez une ville
            </option>
            {location.map((city) => (
              <option key={nanoid(8)} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="p-4 flex w-full bg-indigo-50 text-sm font-light text-slate-500 rounded-xl border-[1px] border-indigo-200">
          <PiCarLight style={iconStyle} />
          <select
            className="bg-transparent outline-none w-full min-w-max"
            onChange={handleSelectedCar}
            value={selectedCar}
            defaultValue={carInfos[0].option}
          >
            <option selected disabled hidden>
              Sélectionnez un véhicule
            </option>
            {carInfos.map((car) => (
              <option key={nanoid(8)} value={car.carModel}>
                {car.carModel}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-3 sm:gap-2 w-full md:col-span-2">
          <Datepicker
            inputClassName="w-full py-4 pr-4 pl-[2.2rem] rounded-xl bg-indigo-50 placeholder:text-slate-500 placeholder:text-sm text-sm outline-none font-light text-slate-500 border-[1px] border-indigo-200"
            containerClassName="relative sm:min-w-[15rem] grow"
            toggleClassName="absolute left-0 h-full px-3 text-slate-500 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
            placeholder={"Date de départ et de retour"}
            separator={"au"}
            primaryColor={"indigo"}
            displayFormat={"DD/MM/YYYY"}
            disabledDates={[
              {
                startDate: "1970-01-01",
                endDate: yesterdayDate,
              },
            ]}
            readOnly={true}
            value={rentalDates}
            onChange={handleValueChange}
          />

          <button
            onClick={() => setSelectChanged(!selectChanged)}
            className="bg-slate-800 outline-none rounded-xl p-4"
          >
            <CircumIcon name="search" color="#fff" size="24px" />
          </button>
        </div>
      </form>
      <div
        className={`grid grid-rows-[0fr] transition-grid-rows opacity-0 duration-1000 ease-in-out ${
          selectChanged ? "grid-rows-[1fr] opacity-100" : null
        }`}
      >
        <BookingInfoCard
          carInfos={carInfos}
          selectedCarIndex={selectedCarIndex}
          selectedCity={selectedCity}
          rentalDates={rentalDates}
        />
      </div>
    </div>
  );
}
