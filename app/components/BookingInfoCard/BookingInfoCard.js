import React, { useState } from "react";
import Image from "next/image";
import ButtonBlack from "../ButtonBlack";
import CircumIcon from "@klarr-agency/circum-icons-react";
import { LuLogIn } from "react-icons/lu";
import CarInfoCard from "../CarInfoCard";
import getRentDuration from "@/app/utils/getRentDuration";
import "./BookingInfoCard.css";

export default function BookingInfoCard({
  carInfos,
  selectedCarIndex,
  selectedCity,
  rentalDates,
}) {
  const rentalStart = new Date(rentalDates.startDate);
  const rentalEnd = new Date(rentalDates.endDate);
  let dateFormatStart = rentalStart.toLocaleDateString();
  let dateFormatEnd = rentalEnd.toLocaleDateString();

  if (rentalDates.startDate === null || rentalDates.startDate === undefined) {
    dateFormatStart = null;
    dateFormatEnd = null;
  }

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col md:flex-row mt-8">
        <CarInfoCard carInfos={carInfos} selectedCarIndex={selectedCarIndex} />
        <div className="InfoBookingCard flex flex-col justify-between pt-8 gap-6 sm:p-8">
          <h5 className="text-center sm:text-left">Votre location</h5>
          <div className="flex flex-col">
            <h6>Ville</h6>
            <p>{selectedCity}</p>
          </div>
          <div className="flex flex-col">
            <h6>Véhicule</h6>

            <p>{carInfos[selectedCarIndex].carModel}</p>
          </div>
          <div className="flex flex-col">
            <h6>Durée de la location</h6>

            {rentalDates.startDate === null ||
            rentalDates.startDate === undefined ? null : (
              <>
                <p>
                  Du {dateFormatStart} au {dateFormatEnd} :
                </p>
                <p>
                  <span>{getRentDuration(rentalEnd, rentalStart)}</span> jours
                </p>
              </>
            )}
          </div>
          <div className="flex flex-col">
            <h6>Prix par jour</h6>
            <p>
              <span className="font-semibold text-2xl mr-1">
                {carInfos[selectedCarIndex].pricePerDay}
              </span>
              €/jour
            </p>
          </div>
          <div className="flex flex-col">
            <h6>Total à payer</h6>
            <p>
              <span className="font-semibold text-2xl mr-1">
                {rentalDates.startDate === null ||
                rentalDates.startDate === undefined
                  ? null
                  : carInfos[selectedCarIndex].pricePerDay *
                    getRentDuration(rentalEnd, rentalStart)}
              </span>
              €<span className="ml-1 text-sm">TTC</span>
            </p>
          </div>
          <ButtonBlack>
            <span className="mr-1">Poursuivre</span>
            <LuLogIn />
          </ButtonBlack>
        </div>
      </div>
    </div>
  );
}
