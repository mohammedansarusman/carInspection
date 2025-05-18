import React from "react";
import { SlPeople } from "react-icons/sl";

const Customer = () => {
  return (
    <div className="w-[100px] h-[100px] bg-cream rounded-lg border transition-all duration-300 hover:outline-1">
      <header className="w-[100%] h-[70%] flex justify-center items-end rounded-t-lg">
        <SlPeople className="w-[70%] h-[70%]" />
      </header>
      <section className="flex justify-center items-center">Customer</section>
    </div>
  );
};

export default Customer;
