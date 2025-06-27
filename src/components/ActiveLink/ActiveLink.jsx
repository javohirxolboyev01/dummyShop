import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        ` transition-colors duration-200 ${isActive ? "text-[#F4B400]" : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
