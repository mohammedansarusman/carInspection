import React from "react";

const InputManufacturer = () => {
  return (
    <div className="flex flex-col gap-1 min-w-[400px]">
      <label htmlFor="manufacturer">Vehilce Manufacturer</label>
      <input
        id="manufacturer"
        placeholder="Manufacturer"
        className="outline rounded-full font-extralight tracking-tight pl-[10px]"
      />
    </div>
  );
};

export default InputManufacturer;
