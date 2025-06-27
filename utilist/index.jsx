import React from "react";
import Loadings from "@/assets/logo/Logo2.png";
export const Loading = () => {
  return (
    <div className="w-full h-screen grid place-items-center ">
      <div className="flex flex-col items-center">
        <img src={Loadings} width={80} alt="Loading..." />
        <p className="text-gray-700 text-sm mt-2 ml-3">Yuklanmoqda...</p>
      </div>
    </div>
  );
};

export const Suspense = ({ children }) => {
  return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};
