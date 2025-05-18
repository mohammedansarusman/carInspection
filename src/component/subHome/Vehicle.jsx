import React from "react";
import { FaCarSide } from "react-icons/fa";
import { IoCarSportOutline } from "react-icons/io5";


const Vehicle = () => {
  return (
    <div className="w-[100px] h-[100px] bg-cream rounded-lg border transition-all duration-300 hover:outline-1">
      <header className="w-[100%] h-[70%] flex justify-center items-end rounded-t-lg">
        <IoCarSportOutline className="w-[70%] h-[70%]"/>
      </header>
      <section className="flex justify-center items-center">Vehicle</section>
    </div>
  );
};

export default Vehicle;
// parent component is <Categories />
