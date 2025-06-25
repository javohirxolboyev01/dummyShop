import { Select } from "antd";
import React from "react";

const BottomHero = () => {
  return (
    <div>
      <div className="bg-[#F9F1E7] w-full py-6 shadow mb-6">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-sm text-gray-600">Showing – of results</p>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Show</span>
                <Select style={{ width: 80 }} size="small">
                  <Option value={8}>8</Option>
                  <Option value={16}>16</Option>
                  <Option value={24}>24</Option>
                  <Option value={32}>32</Option>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by</span>
                <Select style={{ width: 160 }} size="small">
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
      s
    </div>
  );
};

export default BottomHero;
