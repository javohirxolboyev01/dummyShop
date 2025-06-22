import React from "react";
import Loading from "@/assets/vite.svg";
export const Loading = () => {
  return (
    <div className="w-full h-screen place-items-center">
      <img src={Loading} alt="Loading..." />
      <p className="text-gray-700 text-sm">Yuklanmoqda...</p>
    </div>
  );
};

export const Suspense = ({ children }) => {
  return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};
