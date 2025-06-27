import { Button } from "antd";

import React from "react";

const Order = ({ data }) => {
  const discount = data.reduce((sum, item) => {
    const itemDiscount =
      (item.price * item.quantity * (item.discountPercentage || 0)) / 100;
    return sum + itemDiscount;
  }, 0);

  const totalPrice = data.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryPrice = totalPrice > 0 ? 0 : 0;

  const finalAmount = totalPrice + deliveryPrice - discount;

  return (
    <>
      <div className="bg-white p-5 rounded-md shadow space-y-4">
        <h2 className="text-lg font-semibold">Buyurtmangiz</h2>

        <div className="flex justify-between text-sm">
          <span>Mahsulotlar</span>
          <span>{totalPrice.toLocaleString()} $</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Yetkazib berish</span>
          <span className="text-green-600 font-medium">Bepul</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Chegirma</span>
          <span className="text-pink-600">
            −{Math.round(discount).toLocaleString()} $
          </span>
        </div>

        <div className="border-t pt-3 flex justify-between text-base font-semibold">
          <span>Jami</span>
          <span>{Math.round(finalAmount).toLocaleString()} $</span>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full rounded-full hover:text-black mt-10"
          style={{
            backgroundColor: "#F4B400",
            borderColor: "#F4B400",
            color: "white",
          }}
        >
          Buyurtmani rasmiylashtirish
        </Button>
      </div>
    </>
  );
};

export default Order;
