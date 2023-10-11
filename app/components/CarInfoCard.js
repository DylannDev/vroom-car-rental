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

export default function CarInfoCard({ carInfos, selectedCarIndex }) {
  const [electricCar, setElectricCar] = useState(true);

  const iconStyle = { color: "#fff ", fontSize: "24px" };

  return (
    <>
      <div className="md:w-3/5 w-full bg-indigo-50 px-6 py-32 rounded-xl relative">
        <span className="absolute top-6 left-6 font-bold text-3xl">
          {carInfos[selectedCarIndex].carModel}
        </span>
        <p className="absolute top-20 left-6 font-bold text-3xl">
          <span className="font-bold text-3xl mr-1">
            {carInfos[selectedCarIndex].pricePerDay}
          </span>
          <span className="text-slate-500 text-lg font-light  ">€/Jour</span>
        </p>
        <Image
          src={carInfos[selectedCarIndex].image}
          width={1566}
          height={875}
          alt="vehicule"
        ></Image>
        <div className="absolute bottom-10 left-0 w-full flex justify-evenly">
          <div className="flex flex-col items-center gap-2">
            <span className="bg-slate-800 p-3 rounded-xl">
              <PiSteeringWheelLight style={iconStyle} />
            </span>
            <span className="text-xs sm:text-sm font-light text-slate-500">
              {carInfos[selectedCarIndex].gearBox}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="bg-slate-800 p-3 rounded-xl">
              <PiUsersLight style={iconStyle} />
            </span>
            <span className="text-xs sm:text-sm font-light text-slate-500">
              {carInfos[selectedCarIndex].seats}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="bg-slate-800 p-3 rounded-xl">
              <PiBackpackLight style={iconStyle} />
            </span>
            <span className="text-xs sm:text-sm font-light text-slate-500">
              {carInfos[selectedCarIndex].carTrunk}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            {carInfos[selectedCarIndex].carType === "Electrique" ? (
              <span className="bg-green-400 p-3 rounded-xl">
                <PiBatteryChargingVerticalLight style={iconStyle} />
              </span>
            ) : (
              <span className="bg-slate-800 p-3 rounded-xl">
                <PiGasPumpLight style={iconStyle} />
              </span>
            )}
            <span className="text-xs sm:text-sm font-light text-slate-500">
              {carInfos[selectedCarIndex].carType}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
