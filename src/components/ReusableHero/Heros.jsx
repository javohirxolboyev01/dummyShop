import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Heros = ({
  title,
  breadcrumb = [],
  linkMap = {},
  backgroundImage,
  height = 320,
}) => {
  return (
    <div>

    <div
      className="relative bg-cover bg-center flex items-center justify-center"
      style={{
          backgroundImage: `url(${backgroundImage})`,
          height: `${height}px`,
        }}
        >
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 mb-3">
          {title}
        </h1>

        <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
          {breadcrumb.map((crumb, index) => (
              <span key={crumb} className="flex items-center gap-2">
              <NavLink
                to={linkMap[crumb] || "#"}
                className="hover:underline font-medium"
                >
                {crumb}
              </NavLink>
              {index < breadcrumb.length - 1 && <IoIosArrowForward />}
            </span>
          ))}
        </div>
      </div>
   
    </div>
    
          </div>
  );
};

export default Heros;
