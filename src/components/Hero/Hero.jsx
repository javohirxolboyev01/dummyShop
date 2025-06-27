import React from "react";
import HeroImg from "@/assets/hero/Hero.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative min-h-[710px] bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="container mx-auto px-4">
        <div
          className="ml-auto 
  bg-white/60  py-14 px-10 max-w-[643px] rounded-lg shadow-lg
  max-[1024px]:mx-auto 
  max-[1024px]:max-w-[500px]
  max-[768px]:max-w-[400px]
  max-[480px]:max-w-[90%] max-[480px]:px-6 max-[480px]:py-8"
        >
          <p className="text-[#333333] font-Ps mb-2 text-base max-[768px]:text-sm">
            New Arrival
          </p>

          <p
            className="text-[#F4B400] mb-[17px] font-Pb leading-[65px] text-[52px]
            max-[1024px]:text-[42px]
            max-[768px]:text-[32px]
            max-[480px]:text-[24px] max-[480px]:leading-[38px]"
          >
            Discover Our
            <br />
            New Collection
          </p>

          <p
            className="text-[18px] font-Pm text-[#333333] mb-[46px]
            max-[1024px]:text-[16px]
            max-[768px]:text-[14px]
            max-[480px]:text-[13px] max-[480px]:mb-6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          <Button
            onClick={() => navigate("/shop")}
            type="primary"
            className="transition-all duration-300 
            text-[16px] font-semibold w-[300px]
            max-[1024px]:w-[250px]
            max-[768px]:w-[200px]
            max-[480px]:w-full"
            style={{
              backgroundColor: "#F4B400",
              borderColor: "#F4B400",
              color: "white",
              paddingTop: "16px",
              paddingBottom: "16px",
            }}
          >
            BUY NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
