import React from "react";
import { FiPlus } from "react-icons/fi";

const InspectionButton = () => {
  return (
    <div className="w-[70px] h-[70px] bg-light-green rounded-full flex justify-center items-center cursor-pointer shadow-lg/50 shadow-gray-500">
      <FiPlus className="text-5xl text-dark-green" />
    </div>
  );
};

export default InspectionButton;
// parent component -  Home.js
