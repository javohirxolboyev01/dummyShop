import React from "react";
import HeroImg from "@/assets/hero/Hero.png";

const Hero = () => {
  return (
    <div
      className="w-full h-[600px] bg-cover bg-center bg-no-repeat flex justify-end items-center px-4"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="bg-white/70 p-8 rounded shadow-md max-w-md text-black mr-10 w-[643px] h-[433px]">
        <div className="p-10">
          <p className="text-sm text-gray-600 uppercase mb-2 tracking-widest">
            New Arrival
          </p>
          <h1 className="text-3xl font-bold mb-4 text-[#B88E2F]">
            Discover Our
            <br /> New Collection
          </h1>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B88E2F] text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
