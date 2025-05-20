import { configureStore } from "@reduxjs/toolkit";
import vehicleSlice from "./vehilceSlice";
const appStore = configureStore({
  reducer: {
    vehicle: vehicleSlice,
  },
});

export default appStore;
