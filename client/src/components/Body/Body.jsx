import React from "react";
import image from "../../assets/images/bg2.jpg";
import { Image } from 'primereact/image';
import { Booking } from "../Booking/Booking";

export const Body = () => {
  return (
    <div className="flex justify-center items-center">
      <Image src={image} alt="BackgroundImage" width="921" className="mr-[21rem]"/>
      <Booking />
    </div>
  );
};
