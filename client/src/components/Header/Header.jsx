import React from "react";

export const Header = () => {
  return (
    <div className="h-[100px] flex justify-between">
      <div className="ml-4 p-5"><b className="text-[1.5rem]">Company Name</b></div>
      <div className="mr-4 p-3">
        <b>Your Company Address</b><br />
        <span>City, State, ZipCode</span><br />
        <span>Phone Number</span><br />
        <span>Email Address</span><br />
      </div>
    </div>
  );
};
