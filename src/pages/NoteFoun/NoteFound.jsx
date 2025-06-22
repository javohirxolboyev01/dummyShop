import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      <img
        src="https://www.exkutupsozluk.com/img/404.png"
        alt="404"
        className="w-96 max-w-full"
      />
      <h1 className="text-4xl font-semibold text-gray-800 mt-6">
        Oops! Sahifa topilmadi.
      </h1>
      <p className="text-gray-500 text-center mt-4 max-w-md">
        Siz izlayotgan sahifa mavjud emas. Balki noto‘g‘ri havola bosilgandir
        yoki sahifa o‘chirilgan.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
};

export default NotFound;
