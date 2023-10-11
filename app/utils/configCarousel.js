import { PiArrowRightLight, PiArrowLeftLight } from "react-icons/pi";
import "react-multi-carousel/lib/styles.css";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <span className="group z-10 absolute right-8 bottom-[50%] translate-y-[50%]">
      <button
        onClick={() => onClick()}
        className="cursor-pointer sm:group-hover:bg-indigo-50 sm:group-hover:border-[1.5px] sm:group-hover:border-slate-800  sm:bg-slate-800 p-3 sm:rounded-full"
      >
        <PiArrowRightLight className="text-slate-800 sm:text-white sm:group-hover:text-slate-800 text-xl sm:text-2xl" />
      </button>
    </span>
  );
};

export const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <span className="group z-10 absolute left-8 bottom-[50%] translate-y-[50%]">
      <button
        onClick={() => onClick()}
        className="cursor-pointer sm:group-hover:bg-indigo-50 sm:group-hover:border-[1.5px] sm:group-hover:border-slate-800  sm:bg-slate-800 p-3 sm:rounded-full"
      >
        <PiArrowLeftLight className="text-slate-800 sm:text-white sm:group-hover:text-slate-800 text-xl sm:text-2xl" />
      </button>
    </span>
  );
};
export const CustomRightArrowTestimonials = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <span className="group z-10 absolute right-4 bottom-[50%] translate-y-[50%]">
      <button
        onClick={() => onClick()}
        className="cursor-pointer sm:group-hover:bg-indigo-50 sm:group-hover:border-[1.5px] sm:group-hover:border-slate-800  sm:bg-slate-800 p-3 sm:rounded-full"
      >
        <PiArrowRightLight className="text-slate-800 sm:text-white sm:group-hover:text-slate-800 text-xl sm:text-2xl" />
      </button>
    </span>
  );
};

export const CustomLeftArrowTestimonials = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <span className="group z-10 absolute left-4 bottom-[50%] translate-y-[50%]">
      <button
        onClick={() => onClick()}
        className="cursor-pointer sm:group-hover:bg-indigo-50 sm:group-hover:border-[1.5px] sm:group-hover:border-slate-800  sm:bg-slate-800 p-3 sm:rounded-full"
      >
        <PiArrowLeftLight className="text-slate-800 sm:text-white sm:group-hover:text-slate-800 text-xl sm:text-2xl" />
      </button>
    </span>
  );
};
