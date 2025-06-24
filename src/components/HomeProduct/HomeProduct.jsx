import React from "react";
import Hero3 from "@/assets/hero/Hero3.svg";
import { useNavigate } from "react-router-dom";
import { useProducts } from "@/api/useProducts";

const HomeProduct = () => {
  const { getProduct } = useProducts();
  const { data } = getProduct({ limit: 2 });
  console.log(data);

  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full flex justify-center mt-10 px-4">
        <button
          onClick={() => navigate("/shop")}
          className="border border-yellow-600 text-yellow-600 font-medium px-6 py-2 rounded hover:bg-yellow-600 hover:text-white transition duration-300"
        >
          Show More
        </button>
      </div>

      <div className="container mx-auto mt-10 w-full flex flex-col lg:flex-row justify-between gap-6 p-4 md:p-8 bg-[#FDF7F2]">
        <div>

        <div className="lg:w-1/3 space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            50+ Beautiful rooms <br /> inspiration
          </h3>
          <p className="text-gray-600">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <button className="bg-yellow-700 text-white px-6 py-2 rounded hover:bg-yellow-800 transition duration-300">
            Explore More
          </button>
        </div>

        <div className="lg:w-2/3 flex flex-col sm:flex-row gap-6">
          {data?.data?.products?.map((room) => (
            <div
              key={room.id}
              className="relative w-full sm:w-1/3 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:border-2 hover:border-yellow-600 transition duration-300 cursor-pointer"
              >
              <img
                src={room.thumbnail}
                alt={room.title}
                className="w-full h-48 object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/60 px-4 py-3">
                <p className="text-xs text-gray-600">{room.category}</p>
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg text-gray-800">
                    {room.title}
                  </h4>
                  <button className="bg-yellow-700 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm hover:bg-yellow-800">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
                </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto mt-10 px-4 mb-5">
        <div className="w-[1000px] sm:w-[1200px] md:w-[1400px] lg:w-[1799px] h-[300px] md:h-[500px] lg:h-[721px] mx-auto">
          <img
            src={Hero3}
            alt="Hero"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(HomeProduct);
