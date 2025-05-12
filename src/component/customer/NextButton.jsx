import React from "react";
import { GrLinkNext } from "react-icons/gr";

const NextButton = () => {
  return (
    <div className="w-[70px] h-[70px] bg-light-green rounded-full flex justify-center items-center cursor-pointer">
      <GrLinkNext className="text-4xl text-dark-green" />
    </div>
  );
};
export default NextButton;
// parent component - Customer.jsx