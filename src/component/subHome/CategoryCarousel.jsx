import React from "react";
import Vehicle from "./Vehicle";
import Inspection from "./Inspection";
import CheckList from "./CheckList";
import Customer from "./Customer";
import Preview from "./Preview";
import { Link } from "react-router-dom";

const CategoryCarousel = () => {
  return (
    <div className="w-full h-[140px] flex justify-around px-4 overflow-x-scroll">
      <div className="flex items-center gap-5">
        <Link to="/categories/vehicle/">
          <Vehicle />
        </Link>
        <Link to="/categories/inspection/">
          <Inspection />
        </Link>
        <Link to="/categories/checklist/">
          <CheckList />
        </Link>
        <Link to="/categories/customer/">
          <Customer />
        </Link>
        <Link to="/categories/preview">
          <Preview />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCarousel;
