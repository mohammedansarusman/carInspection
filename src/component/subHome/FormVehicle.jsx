import React from "react";
import InputName from "./InputName";
import { useSelector } from "react-redux";
import InputChassis from "./InputChassis";
import InputManufacturer from "./InputManufacturer";
import InputBrand from "./InputBrand";

const FormVehicle = () => {
  const plateNo = useSelector(store=>store.vehicle.plateNo)
  return (
    <div className="w-full">
      <h1 className="text-2xl font-extralight font-stretch-120% text-center tracking-widest">
        VEHICLE DETAILS
      </h1>
      <div className="flex flex-col w-full items-center">
        <section className="flex flex-col w-[90%] p-[50px] gap-[20px] items-center">
          <InputName />
          <InputChassis />
          <InputManufacturer />
          <InputBrand />
        </section>
      </div>
    </div>
  );
};

export default FormVehicle;
