import React from "react";
import {
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
  FaMedal,
} from "react-icons/fa";

const FaetureList = () => {
  const features = [
    {
      icon: <FaMedal className="text-3xl text-black mx-auto" />,
      title: "High Quality",
      desc: "Crafted from top materials",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-black mx-auto" />,
      title: "Warranty Protection",
      desc: "Over 2 years",
    },
    {
      icon: <FaShippingFast className="text-3xl text-black mx-auto" />,
      title: "Free Shipping",
      desc: "Order over 150 $",
    },
    {
      icon: <FaHeadset className="text-3xl text-black mx-auto" />,
      title: "24 / 7 Support",
      desc: "Dedicated support",
    },
  ];

  return (
    <div className="bg-[#F9F1E7] py-8 px-4 mt-10 ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center">
              {item.icon}
            </div>
            <div>
              <h4 className="font-semibold text-lg text-black">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaetureList;
