import React from "react";

import { Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      <Result
        status="403"
        title="Sahifa topilmadi!"
        subTitle="  Siz izlayotgan sahifa mavjud emas. Balki noto‘g‘ri havola bosilgandir
        yoki sahifa o‘chirilgan."
        extra={
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-3 bg-[#F4B400] text-black rounded-lg hover:!text-white transition duration-300"
          >
            Bosh sahifaga qaytish
          </button>
        }
      />
    </div>
  );
};

export default NotFound;
