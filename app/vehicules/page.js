import React from "react";
import PageNavigation from "../components/PageNavigation";
import CarCarousel from "../components/CarCarousel";

export default function pageVehicules() {
  return (
    <div className="mb-40">
      <PageNavigation>Nos Véhicules</PageNavigation>
      <CarCarousel />
    </div>
  );
}
