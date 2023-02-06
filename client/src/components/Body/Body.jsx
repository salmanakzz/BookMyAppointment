import React from "react";
import image from "../../assets/images/7566.jpg";
import { Booking } from "../Booking/Booking";

export const Body = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={image} alt="BackgroundImage" width="700" height="700" />
      <Booking />
    </div>
  );
};
