import React from "react";

export default function getRentDuration(DateEnd, DateStart) {
  const difference = DateEnd.getTime() - DateStart.getTime();
  const differenceInDays = Math.round(difference / (24 * 60 * 60 * 1000));

  return differenceInDays;
}
