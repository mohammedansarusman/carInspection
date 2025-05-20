import { createSlice } from "@reduxjs/toolkit";

const vehicleSlice = createSlice({
  name: "vehilce",
  initialState: {
    plateNo: "DXB-ANSAR",
    chassisNo: "",
    manufacturer: "",
    brandName: "",
  },
  reducers: {
    setPlateNo: (state, action) => {
      state.plateNo = action.payload;
    },
    setChassisNo: (state, action) => {
      state.chassisNo = action.payload;
    },
    setManufacturer: (state, action) => {
      state.manufacturer = action.payload;
    },
    setBrandName: (state, action) => {
      state.brandName = action.payload;
    },
  },
});
export default vehicleSlice.reducer;
export const { setPlateNo, setChassisNo, setManufacturer, setBrandName } =
  vehicleSlice.actions;
