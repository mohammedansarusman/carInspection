import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./component/subHome/Categories.jsx";
import FormVehicle from "./component/subHome/FormVehicle.jsx";
import FormInspection from "./component/subHome/FormInspection.jsx";
import FormCheckList from "./component/subHome/FormCheckList.jsx";
import FormCustomer from "./component/subHome/FormCustomer.jsx";
import FormPreview from "./component/subHome/FormPreview.jsx";
import { Provider } from "react-redux";
import appStore from "./store/appStore.js";

const appRouter = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/categories",
    element: <Categories />,
    children: [
      { path: "/categories/vehicle/", element: <FormVehicle /> },
      { path: "/categories/inspection/", element: <FormInspection /> },
      { path: "/categories/checklist/", element: <FormCheckList /> },
      { path: "/categories/customer/", element: <FormCustomer /> },
      { path: "/categories/preview/", element: <FormPreview /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
