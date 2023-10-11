import React from "react";
import PageNavigation from "../components/PageNavigation";
import { nanoid } from "nanoid";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

export default function pageTestimonials() {
  return (
    <div className="sm:mb-40">
      <PageNavigation>Avis</PageNavigation>
      <TestimonialsCarousel />
    </div>
  );
}
