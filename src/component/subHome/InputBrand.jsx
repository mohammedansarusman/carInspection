import React from "react";

const InputBrand = () => {
  return (
    <div className="flex flex-col gap-1 min-w-[400px]">
      <label htmlFor="brand">Vehilce Brand Name</label>
      <input
        id="brand"
        placeholder="Brand"
        className="outline rounded-full font-extralight tracking-tight pl-[10px]"
      />
    </div>
  );
};

export default InputBrand;
