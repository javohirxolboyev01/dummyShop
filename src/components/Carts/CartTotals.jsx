import React from "react";

const CartTotals = ({ subtotal }) => {
  const total = subtotal;

  return (
    <div className="bg-[#F9F1E7] p-6 rounded-md w-full lg:w-[300px] h-fit">
      <h2 className="text-2xl font-semibold mb-6 text-center">Cart Totals</h2>

      <div className="flex justify-between mb-4 text-gray-600">
        <p className="font-medium">Subtotal</p>
        <p>Rs. {subtotal.toLocaleString()}</p>
      </div>

      <div className="flex justify-between mb-6">
        <p className="font-medium">Total</p>
        <p className="text-[#B88E2F] font-bold">Rs. {total.toLocaleString()}</p>
      </div>

      <button className="w-full border border-black py-2 rounded hover:bg-black hover:!text-white transition">
        Check Out
      </button>
    </div>
  );
};

export default CartTotals;
