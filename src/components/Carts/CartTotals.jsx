import React from "react";

const CartTotals = ({ subtotal }) => {
  const total = subtotal;

  return (
    <div
      className="
        bg-[#F9F1E7]
        p-8              /* paddingni biroz kattaroq qildim */
        rounded-md
        w-full
        max-w-[300px]
        h-[320px]

        mx-auto
        flex
        flex-col
        justify-start   /* yuqoridan boshlansin */
        items-center
      "
    >
      <h2 className="text-2xl font-semibold mb-8 text-center">Cart Totals</h2>

      <div className="flex justify-between mb-6 text-gray-600 w-full px-4">
        <p className="font-medium">Subtotal</p>
        <p>Rs. {subtotal.toLocaleString()}</p>
      </div>

      <div className="flex justify-between mb-8 w-full px-4">
        <p className="font-medium">Total</p>
        <p className="text-[#B88E2F] font-bold">Rs. {total.toLocaleString()}</p>
      </div>

      <button className="w-full border border-black py-2 rounded hover:bg-black hover:!text-white transition px-4">
        Check Out
      </button>
    </div>
  );
};

export default CartTotals;
