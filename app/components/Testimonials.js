import React from "react";
import { ImStarFull } from "react-icons/im";
import { testimonialsInfos } from "../data/data";

export default function Testimonials({ testimonialsInfos }) {
  return (
    <div className="bg-white rounded-xl mx-4 p-10 min-w-[320px] flex flex-col h-full">
      <div className="flex justify-between items-center">
        <span className="flex gap-1">
          <ImStarFull className="text-2xl text-indigo-500 " />
          <ImStarFull className="text-2xl text-indigo-500 " />
          <ImStarFull className="text-2xl text-indigo-500 " />
          <ImStarFull className="text-2xl text-indigo-500 " />
          <ImStarFull className="text-2xl text-indigo-500 " />
        </span>
        <p className="text-xs font-light text-slate-500">
          {testimonialsInfos.source}
        </p>
      </div>
      <h3 className="text-2xl font-bold mt-6 mb-3">{testimonialsInfos.name}</h3>
      <p className="font-light text-slate-500">
        {testimonialsInfos.testimonial}
      </p>
    </div>
  );
}
