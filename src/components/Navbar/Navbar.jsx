import React from "react";
import Logo from "../../assets/logo/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { TbUserExclamation } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import CartIcon from "../cardIcon/CardIcon";
import WishIcon from "../wishlistIcon/WishIcon";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-black shadow-md w-full">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 gap-4">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-[40px] h-[30px]" />
          <NavLink
            to="/"
            className="font-montserrat font-bold text-[24px] sm:text-[30px] leading-[100%] tracking-[0px]"
          >
            Furniro
          </NavLink>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[14px] sm:text-[16px] font-medium">
          <NavLink to="/" className="hover:text-gray-600">
            Home
          </NavLink>
          <NavLink to="/shop" className="hover:text-gray-600">
            Shop
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-600">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:text-gray-600">
            Contact
          </NavLink>
        </div>

        <div className="flex items-center text-[18px] sm:text-[22px] gap-4 sm:gap-6">
          <TbUserExclamation className="cursor-pointer" />
          <CiSearch className="cursor-pointer" />

          <WishIcon to="/wishlist" className="cursor-pointer bg-red-600" />

          <CartIcon to="/cart" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
