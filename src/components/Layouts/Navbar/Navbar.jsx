import React, { useState } from "react";
import Logo from "@/assets/logo/Logo2.png";
import { NavLink } from "react-router-dom";
import { TbUserExclamation } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import CartIcon from "../../cardIcon/CardIcon";
import WishIcon from "../../wishlistIcon/WishIcon";
import ActiveLink from "../../ActiveLink/ActiveLink";
import { Modal } from "antd";
import { useProducts } from "@/api/useProducts";
import SearchItem from "./Search";
import useDebounce from "@/components/hook/useDebounce";

const Navbar = () => {
  const { getSearch } = useProducts();
  const [value, setValue] = useState("");
  const text = useDebounce(value);
  const { data } = getSearch({ q: text.trim(), limit: 10 });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = (id) => {
  
    setIsModalOpen(false);
  };
  return (
    <div className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md transition-all duration-300">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 gap-4">
        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className="font-montserrat font-semibold text-[24px] sm:text-[30px] leading-[100%] tracking-[0px]"
          >
            <img src={Logo} alt="Logo" className="w-[120px] h-[25px]" />
          </NavLink>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[14px] sm:text-[16px] font-medium">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/shop">Shop</ActiveLink>
          <ActiveLink to="/about">About</ActiveLink>
          <ActiveLink to="/contact">Contact</ActiveLink>
        </div>

        <div className="flex items-center text-[18px] sm:text-[22px] gap-4 sm:gap-6">
          <TbUserExclamation className="cursor-pointer" />

          <CiSearch onClick={showModal} className="cursor-pointer" />

          <WishIcon to="/wishlist" className="cursor-pointer bg-red-600" />
          <CartIcon to="/cart" className="cursor-pointer" />
        </div>
      </div>
      <Modal
        title="Search"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
    
        destroyOnHidden
      >
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={onChange}
          className="w-full border px-3 py-2 mb-3 rounded"
        />
        <div className="max-h-[400px] overflow-y-auto no-scrollbar">
          {data?.data?.products?.length ? (
            <SearchItem data={data?.data?.products} />
          ) : value ? (
            <p></p>
          ) : null}
        </div>
      </Modal>
    </div>
  );
};

export default React.memo(Navbar);
