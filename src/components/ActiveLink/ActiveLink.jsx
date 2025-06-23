import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `hover:text-gray-600 transition-colors duration-200 ${
          isActive ? "text-yellow-600" : ""
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
