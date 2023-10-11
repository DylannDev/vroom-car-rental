import React from "react";
import { useState } from "react";
import Image from "next/image";
import {
  PiBatteryChargingVerticalLight,
  PiGasPumpLight,
  PiSteeringWheelLight,
  PiBackpackLight,
  PiUsersLight,
} from "react-icons/pi";
import { LuLogIn } from "react-icons/lu";

export default function CarInfoCard({ carInfos }) {
  const iconStyle = { color: "#fff ", fontSize: "24px" };

  return (
    <div className="group min-w-[320px] sm:mx-4 bg-indigo-50 px-6 pt-32 pb-40 rounded-xl relative">
      <span className="absolute top-6 left-6 font-bold text-3xl">
        {carInfos.carModel}
      </span>
      <p className="absolute top-20 left-6 font-bold text-3xl">
        <span className="font-bold text-3xl mr-1">{carInfos.pricePerDay}</span>
        <span className="text-slate-500 text-lg font-light  ">€/Jour</span>
      </p>
      <button className="absolute top-20 right-6 hidden sm:group-hover:flex sm:group-hover:gap-2 sm:group-hover:items-center rounded-lg px-4 py-2 bg-slate-800 text-white font-bold text-sm">
        Réserver
        <LuLogIn />
      </button>
      <Image
        src={carInfos.image}
        width={1566}
        height={875}
        alt="vehicule"
      ></Image>
      <div className="absolute bottom-10 left-0 w-full flex justify-evenly">
        <div className="flex flex-col items-center gap-2">
          <span className="bg-slate-800 p-3 rounded-xl">
            <PiSteeringWheelLight style={iconStyle} />
          </span>
          <span className="text-xs font-light text-slate-500">
            {carInfos.gearBox}
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="bg-slate-800 p-3 rounded-xl">
            <PiUsersLight style={iconStyle} />
          </span>
          <span className="text-xs font-light text-slate-500">
            {carInfos.seats}
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="bg-slate-800 p-3 rounded-xl">
            <PiBackpackLight style={iconStyle} />
          </span>
          <span className="text-xs font-light text-slate-500">
            {carInfos.carTrunk}
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          {carInfos.carType === "Electrique" ? (
            <span className="bg-green-400 p-3 rounded-xl">
              <PiBatteryChargingVerticalLight style={iconStyle} />
            </span>
          ) : (
            <span className="bg-slate-800 p-3 rounded-xl">
              <PiGasPumpLight style={iconStyle} />
            </span>
          )}
          <span className="text-xs font-light text-slate-500">
            {carInfos.carType}
          </span>
        </div>
      </div>
    </div>
  );
}
