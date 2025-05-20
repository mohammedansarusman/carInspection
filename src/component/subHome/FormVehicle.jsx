import React from "react";
import { useSelector } from "react-redux";

const FormVehicle = () => {
  const plateNo = useSelector(store=>store.vehicle.plateNo)
  return (
    <div className="w-full">
      <h1 className="text-2xl font-extralight font-stretch-120% text-center tracking-widest">
        VEHICLE DETAILS
      </h1>
      <div className="flex flex-col w-full items-center">
        <section className="flex flex-col w-[90%] p-[50px] gap-[20px] items-center">
          <div className="flex flex-col gap-1 min-w-[400px]">
            <label htmlFor="plateno" className="w-full">Plate No</label>
            <input
              id="plateno"
              placeholder="Enter Plate number..."
              className="outline rounded-full font-extralight tracking-tight pl-[10px]"
              value={plateNo}
            />
          </div>
          <div className="flex flex-col gap-1 min-w-[400px]">
            <label htmlFor="chassisno">Chassis No</label>
            <input
              id="chassisno"
              placeholder="Enter minimum 6 digits of chassis..."
              className="outline rounded-full font-extralight tracking-tight pl-[10px]"
            />
          </div>
          <div className="flex flex-col gap-1 min-w-[400px]">
            <label htmlFor="manufacturer">Vehilce Manufacturer</label>
            <input
              id="manufacturer"
              placeholder="Manufacturer"
              className="outline rounded-full font-extralight tracking-tight pl-[10px]"
            />
          </div>
          <div className="flex flex-col gap-1 min-w-[400px]">
            <label htmlFor="brand">Vehilce Brand Name</label>
            <input
              id="brand"
              placeholder="Brand"
              className="outline rounded-full font-extralight tracking-tight pl-[10px]"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormVehicle;
