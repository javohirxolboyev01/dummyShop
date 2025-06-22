import React from "react";
import { Select } from "antd";
import { NavLink, useSearchParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import HeroShop from "@/assets/hero/HeroShop.svg";

const { Option } = Select;

const ShopHero = ({ total, currentPage, pageSize, onPageChange }) => {
  const [params, setParams] = useSearchParams();

  const handlePageSizeChange = (value) => {
    params.set("pageSize", value);
    params.set("page", "1");
    setParams(params);
  };

  const handleSortChange = (value) => {
    params.set("sort", value);
    setParams(params);
  };

  return (
    <div>
      <div
        className="h-60 bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${HeroShop})` }}
      >
        <h1 className="text-4xl font-bold text-black mb-2">Shop</h1>
        <p className="text-white flex items-center gap-2 text-sm">
          <NavLink to="/" className="hover:underline text-black">
            Home
          </NavLink>
          <IoIosArrowForward className="text-black" />
          <NavLink to="/shop" className="hover:underline text-black">
            Shop
          </NavLink>
        </p>
      </div>

      <div className="bg-[#F9F1E7] p-6 shadow rounded-md mb-6 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            Showing {(currentPage - 1) * pageSize + 1}–
            {Math.min(currentPage * pageSize, total)} of {total} results
          </p>

          <div className="flex items-center gap-4 flex-wrap ">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Show</span>
              <Select
                value={pageSize}
                style={{ width: 80 }}
                onChange={handlePageSizeChange}
              >
                <Option value={8}>8</Option>
                <Option value={16}>16</Option>
                <Option value={24}>24</Option>
                <Option value={32}>32</Option>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by</span>
              <Select
                value={params.get("sort") || "default"}
                style={{ width: 160 }}
                onChange={handleSortChange}
              >
                <Option value="default">Default</Option>
                <Option value="price-low-high">Price: Low to High</Option>
                <Option value="price-high-low">Price: High to Low</Option>
                <Option value="title-az">Title: A-Z</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopHero;
