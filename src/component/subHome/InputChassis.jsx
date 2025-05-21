import React from "react";
import { useRef } from "react";
const InputChassis = () => {
  const inputRef = useRef("");
  const handleBlur = () => {
    console.log(inputRef);
  };
  return (
    <div className="flex flex-col gap-1 min-w-[400px]">
      <label htmlFor="chassisno">Chassis No</label>
      <input
        id="chassisno"
        placeholder="Enter minimum 6 digits of chassis..."
        className="outline rounded-full font-extralight tracking-tight pl-[10px]"
        ref={inputRef}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default InputChassis;
