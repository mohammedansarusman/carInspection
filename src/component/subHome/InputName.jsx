import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { setPlateNo } from "../../store/vehilceSlice";


const InputName = () => {
  const dispatch = useDispatch();
  const plateNo = useSelector((store) => store.vehicle.plateNo);
  const handleChange = (e) =>{
    dispatch(setPlateNo(e.target.value));
  }

  return (
    <div className="flex flex-col gap-1 min-w-[400px]">
      <label htmlFor="plateno" className="w-full">
        Plate No
      </label>
      <input
        id="plateno"
        placeholder="Enter Plate number..."
        className="outline rounded-full font-extralight tracking-tight pl-[10px]"
        value={plateNo}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputName;
