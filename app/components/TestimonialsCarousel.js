"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import {
  responsive,
  CustomRightArrowTestimonials,
  CustomLeftArrowTestimonials,
} from "../utils/configCarousel";
import Testimonials from "./Testimonials";
import { testimonialsInfos } from "../data/data";
import { nanoid } from "nanoid";

function TestimonialsCarousel() {
  return (
    <>
      <div className="pt-8 sm:px-24 sm:pt-16 pb-36  relative">
        <h2 className="font-bold text-4xl text-center mb-16">
          Ce que pensent nos clients...
        </h2>
        <Carousel
          responsive={responsive}
          customLeftArrow={<CustomRightArrowTestimonials />}
          customRightArrow={<CustomLeftArrowTestimonials />}
          ssr={true}
        >
          {testimonialsInfos.map((testimonials) => (
            <Testimonials key={nanoid(8)} testimonialsInfos={testimonials} />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default TestimonialsCarousel;
