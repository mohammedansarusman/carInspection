import Header from "../homePage/Header";
import CategoryCarousel from "./CategoryCarousel";
import { Outlet } from "react-router-dom";
const Categories = () => {
  return (
    <div className="bg-dark-green w-full h-screen">
      <Header />
      {/* carousel - Vehicle / Inspection / Checklist / Customer / Preview  */}
      <section className="bg-cream   w-full h-[80%] flex flex-col items-center-center text-gray-500">
        <CategoryCarousel />
        <Outlet />
      </section>

    </div>
  );
};
export default Categories;
// Parent folder -  subHome
