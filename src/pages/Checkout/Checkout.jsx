import React from "react";
import LocationSelector from "../../components/CheckoutDetail/Location";
import UserInput from "@/components/CheckoutDetail/UserInput";
import Order from "@/components/CheckoutDetail/Order";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  if (!cartItems.length) {
    return <Navigate replace to={"/cart"} />;
  }
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white p-5 rounded-md shadow">
            <h2 className="text-lg font-semibold mb-3">Buyurtma qilish</h2>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 border rounded-md border-gray-300 bg-gray-100 text-sm text-[#f4b400] font-medium">
                Olib ketish <br /> bepul
              </button>
              <button className="px-4 py-2 border rounded-md border-gray-300 text-sm text-gray-500">
                Kuryer orqali <br /> 30 $
              </button>
            </div>

            <LocationSelector />

            <UserInput />

            <div className="mt-6 text-sm text-gray-700">
              <p>
                <strong>28 июня</strong>
              </p>
            </div>
          </div>
        </div>

        <Order data={cartItems} />
      </div>
    </div>
  );
};

export default React.memo(Checkout);
